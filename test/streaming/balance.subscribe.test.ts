import {
  StreamConnector,
} from '../../src/connector';

import {
  StreamingBalanceResponse,
} from '../../src/responses';

import {serverMock} from '../utils/server.mock';
import {WsStreamMock} from "../utils/ws-stream.mock";

describe('test getBalance stream', () => {
  let wsStream: WsStreamMock;
  let streamConn: StreamConnector;

  beforeAll(async () => {
    wsStream = new WsStreamMock().start();
    const server = serverMock;

    return new StreamConnector(server, 'aaa').connect().then((result: StreamConnector) => {
      streamConn = result;
    });
  });

  test('test getBalance', done => {
    expect(streamConn).toBeInstanceOf(StreamConnector);

    streamConn.subscribeBalance().subscribe((result: StreamingBalanceResponse) => {
      expect(result).toBeInstanceOf(StreamingBalanceResponse);

      streamConn.stopBalance();
      done();
    })
  }, 3000);

  afterAll(async () => {
    await wsStream.stop();
  });
});

