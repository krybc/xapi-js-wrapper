import {
  SyncConnector,
  Credentials
} from '../../src/connector';

import {
  LoginCommand,
} from '../../src/commands';

import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';


describe('test login sync', () => {
  let wsSync: WsSyncMock;
  let conn: SyncConnector;
  let sessionId: string;

  beforeAll(async () => {
    wsSync = new WsSyncMock().start();
    const server = serverMock;
    return new SyncConnector(server).connect().then((result: SyncConnector) => {
      conn = result;
    });
  });

  afterAll( async () => {
    await wsSync.stop();
  });

  test('test login command', async () => {
    const credentials = new Credentials('aaa', 'bbb');
    const result = await conn.login(credentials);

    sessionId = result.streamSessionId;
    expect(result.streamSessionId).toBeDefined();
  });
});

