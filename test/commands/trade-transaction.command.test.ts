import {
  SyncConnector,
} from '../../src/connector';

import {TradeTransactionResponse} from "../../src/responses";

import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';


describe('test tradeTransaction sync command', () => {
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

  test('expect to response be instance of TradeRecordsResponse', async () => {
    const result = await conn.tradeTransaction(2, 0, 'EURUSD', 1, 1, 1.1, 0.9, 0, 0, Date.now(), 'test');
    expect(result).toBeInstanceOf(TradeTransactionResponse);
  });
});
