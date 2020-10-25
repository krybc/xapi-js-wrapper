import {
  StreamConnector,
} from '../../src/connector';

import {
  StreamingKeepAliveResponse,
} from '../../src/responses';

import {serverMock} from '../utils/server.mock';
import {WsStreamMock} from "../utils/ws-stream.mock";

describe('test getKeepAlive stream', () => {
  let wsStream: WsStreamMock;
  let streamConn: StreamConnector;

  beforeAll(async () => {
    wsStream = new WsStreamMock().start();
    const server = serverMock;

    return new StreamConnector(server, 'aaa').connect().then((result: StreamConnector) => {
      streamConn = result;
    });
  });

  test('test getKeepAlive', done => {
    expect(streamConn).toBeInstanceOf(StreamConnector);
    let i = 0;

    streamConn.subscribeKeepAlive().subscribe((result: StreamingKeepAliveResponse) => {
      expect(result).toBeInstanceOf(StreamingKeepAliveResponse);

      i++;
      if (i === 2) {
        streamConn.stopKeepAlive();
        done();
      }
    });
  }, 3000);

  afterAll(async () => {
    await wsStream.stop();
  });
});

