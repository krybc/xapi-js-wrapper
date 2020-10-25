import {
  SyncConnector,
} from '../../src/connector';

import {TickPricesResponse} from "../../src/responses";

import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';


describe('test tickPrices sync command', () => {
  let wsSync: WsSyncMock;
  let conn: SyncConnector;

  beforeAll(async () => {
    wsSync = new WsSyncMock().start();
    const server = serverMock;
    return new SyncConnector(server).connect().then((result: SyncConnector) => {
      conn = result;
    });
  });

  afterAll(async () => {
    await wsSync.stop();
  });

  test('expect to response be instance of TickPricesResponse', async () => {
    const result = await conn.getTickPrices(1, ['EURUSD'], Date.now());
    expect(result).toBeInstanceOf(TickPricesResponse);
  });
});
