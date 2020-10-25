import {
  SyncConnector,
} from '../../src/connector';

import {
  ChartRangeResponse,
} from '../../src/responses';

import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';

describe('test chartRange sync command', () => {
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

  test('expected result to be instance of ChareRangeResponse', async () => {
    const result = await conn.getChartRange(Date.now(), 1, Date.now() - (1000 * 60 * 60 * 10), 'EURUSD');
    expect(result).toBeInstanceOf(ChartRangeResponse);
  });
});
