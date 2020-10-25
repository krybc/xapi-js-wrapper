import {
  SyncConnector,
} from '../../src/connector';

import {TradesHistoryResponse} from "../../src/responses";

import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';


describe('test tradesHistory sync command', () => {
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

  test('expect to response be instance of TradesHistoryResponse', async () => {
    const result = await conn.getTradesHistory(Date.now(), Date.now() - (1000 * 60 * 60 * 24));
    expect(result).toBeInstanceOf(TradesHistoryResponse);
  });
});
