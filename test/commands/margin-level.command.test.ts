import {
  SyncConnector,
} from '../../src/connector';

import {
  MarginLevelResponse,
} from '../../src/responses';

import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';

describe('test marginLevel sync command', () => {
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

  test('expect to response be instance of MarginLevelResponse', async () => {
    const result = await conn.getMarginLevel();
    expect(result).toBeInstanceOf(MarginLevelResponse);
  });
});
