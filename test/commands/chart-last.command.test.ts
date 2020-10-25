import {
  SyncConnector,
} from '../../src/connector';

import {
  ChartLastResponse,
} from '../../src/responses';

import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';


describe('test chartLastCommand sync', () => {
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

  test('test chartLast command', async () => {
    const result = await conn.getChartLast(1, Date.now() - (1000 * 60 * 60 * 10), 'EURUSD');

    expect(result).toBeInstanceOf(ChartLastResponse);
  });
});
