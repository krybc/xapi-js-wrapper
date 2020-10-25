import {
  SyncConnector,
} from '../../src/connector';

import {TradeTransactionStatusResponse} from "../../src/responses";

import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';


describe('test tradeTransactionStatus sync command', () => {
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

  test('expect to response be instance of TradeTransactionStatusResponse', async () => {
    const result = await conn.tradeTransactionStatus(1);
    expect(result).toBeInstanceOf(TradeTransactionStatusResponse);
  });
});
