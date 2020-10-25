import {
  SyncConnector,
} from '../../src/connector';

import {
  ProfitCalculationCommand,
} from '../../src/commands';

import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';


describe('test sync commands', () => {
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

  test('test getProfitCalculation command', async () => {
    const result = await conn.getProfitCalculation(1.4000, 0, 1.3000, 'EURUSD', 1.0);

    expect(result.profit).toBeDefined();
    expect(result.profit).toBeGreaterThan(0);
  });
});

