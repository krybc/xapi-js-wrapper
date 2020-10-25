import {
  SyncConnector,
} from '../../src/connector';

import {
  CurrentUserDataCommand,
} from '../../src/commands';

import {
  CurrentUserResponse,
} from '../../src/responses';

import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';


describe('test getCurrentUserData sync', () => {
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

  test('test getCurrentUserData command', async () => {
    const result = await conn.getCurrentUserData();

    expect(result).toBeInstanceOf(CurrentUserResponse);
  });
});
