import {
  SyncConnector,
} from '../../src/connector';

import {
  CalendarResponse,
} from '../../src/responses';

import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';

describe('test calendar sync command', () => {
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

  test('expect to getCalendar be instance of CalendarResponse', async () => {
    const result = await conn.getCalendar();
    expect(result).toBeInstanceOf(CalendarResponse);
  });
});
