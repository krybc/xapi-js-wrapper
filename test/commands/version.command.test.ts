import {
  SyncConnector,
} from '../../src/connector';

import {
  VersionCommand
} from '../../src/commands';

import {
  VersionResponse
} from '../../src/responses';

import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';


describe('test version sync command', () => {
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

  test('should get version', async () => {
    const result = await conn.getVersion();

    expect(result).toBeInstanceOf(VersionResponse);
  });
});

