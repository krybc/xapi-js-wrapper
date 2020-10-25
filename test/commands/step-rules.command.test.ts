import {
  SyncConnector,
} from '../../src/connector';

import {StepRulesResponse} from "../../src/responses";

import {serverMock} from '../utils/server.mock';
import {WsSyncMock} from '../utils/ws-sync.mock';


describe('test stepRules sync command', () => {
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

  test('expect to response be instance of StepRulesResponse', async () => {
    const result = await conn.getStepRules();
    expect(result).toBeInstanceOf(StepRulesResponse);
  });
});
