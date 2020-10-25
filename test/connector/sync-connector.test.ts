import {SyncConnector} from "../../src/connector";
import {AllSymbolsResponse, CalendarResponse} from "../../src/responses";

import {serverMock} from "../utils/server.mock";
import {WsSyncMock} from "../utils/ws-sync.mock";


describe('test sync connector', () => {
  let wsSync: WsSyncMock;
  let conn: SyncConnector;

  beforeAll(async () => {
    wsSync = new WsSyncMock().start();
    const server = serverMock;
    return new SyncConnector(server).connect().then((result: SyncConnector) => {
      conn = result;
    });
  });

  afterAll( async () => {
    await wsSync.stop();
  });

  test('expected socket connected to be true', async () => {
    expect(conn.connected).toBeTruthy();
  });

  test('test send multiple commands i one time', async () => {
    const allSymbolsPromise = conn.getAllSymbols();
    const calendarPromise = conn.getCalendar();
    const allSymbols = await allSymbolsPromise;
    const calendar = await calendarPromise;

    expect(allSymbols).toBeInstanceOf(AllSymbolsResponse);
    expect(calendar).toBeInstanceOf(CalendarResponse);
  }, 15000);
});
