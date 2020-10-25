import {
  SyncConnector,
} from '../../src/connector';

import {
  NewsCommand,
} from '../../src/commands';

import {NewsTopicRecord} from '../../src/records';
import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';


describe('test getNews command', () => {
  let wsSync: WsSyncMock;
  let conn: SyncConnector;

  beforeAll(async () => {
    wsSync = new WsSyncMock().start();
    const server = serverMock;
    return new SyncConnector(server).connect().then((result: SyncConnector) => {
      conn = result;
    });
  });

  test('test getNews command', async () => {
    const result = await conn.getNews(0, Date.now() - (1000 * 60 * 60 * 24 * 3));

    expect(result.newsRecords).toBeDefined();
    expect(result.newsRecords[0]).toBeInstanceOf(NewsTopicRecord);
  });

  afterAll(async () => {
    await wsSync.stop();
    console.log(await wsSync.connected());
  });
});

