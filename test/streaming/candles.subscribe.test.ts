import {
  StreamConnector,
} from '../../src/connector';

import {
  StreamingCandleResponse,
} from '../../src/responses';

import {serverMock} from '../utils/server.mock';
import {WsStreamMock} from "../utils/ws-stream.mock";

describe('test getCandles stream', () => {
  let wsStream: WsStreamMock;
  let streamConn: StreamConnector;

  beforeAll(async () => {
    wsStream = new WsStreamMock().start();
    const server = serverMock;

    return new StreamConnector(server, 'aaa').connect().then((result: StreamConnector) => {
      streamConn = result;
    });
  });

  test('test getCandles', done => {
    expect(streamConn).toBeInstanceOf(StreamConnector);

    streamConn.subscribeCandles('EURUSD').subscribe((result: StreamingCandleResponse) => {
      expect(result).toBeInstanceOf(StreamingCandleResponse);

      streamConn.stopCandles('EURUSD');
      done();
    });
  }, 3000);

  afterAll(async () => {
    await wsStream.stop();
  });
});

