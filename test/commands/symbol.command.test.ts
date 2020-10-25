import {
  SyncConnector,
} from '../../src/connector';

import {SymbolResponse} from "../../src/responses";

import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';


describe('test symbol sync command', () => {
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

  test('expect to response be instance of SymbolResponse', async () => {
    const result = await conn.getSymbol('EURUSD');
    expect(result).toBeInstanceOf(SymbolResponse);
  });
});
