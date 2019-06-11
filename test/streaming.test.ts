import {Servers} from "../src/connector/servers";
import {SyncApiConnector} from "../src/connector/sync-api-connector";
import {Credentials} from "../src/connector/credentials";
import {LoginCommand} from "../src/commands/login.command";
import {StreamingApiConnector} from "../src/connector/streaming-api-connector";
import {StreamingCandleResponse} from "../src/responses/streaming-candle.response";
import {StreamingBalanceResponse} from "../src/responses/streaming-balance.response";
import {StreamingKeepAliveResponse} from "../src/responses/streaming-keep-alive.response";

xdescribe('test streaming', () => {
    let streamConn: StreamingApiConnector;

    beforeAll(async () => {
        const server = Servers.get('xtb', 'demo');
        const conn = await new SyncApiConnector(server).connect();

        const credentials = new Credentials(process.env.XAPI_LOGIN, process.env.XAPI_PASSWORD);
        const loginResult = await conn.executeCommand(new LoginCommand(credentials));

        return new StreamingApiConnector(server, loginResult.streamSessionId).connect().then((result: StreamingApiConnector) => {
            streamConn = result;
        });
    });

    test('test getCandles', done => {
        expect(streamConn).toBeInstanceOf(StreamingApiConnector);

        streamConn.subscribeCandles('EURUSD').subscribe((result: StreamingCandleResponse) => {
            expect(result).toBeInstanceOf(StreamingCandleResponse);

            streamConn.stopCandles('EURUSD');
            done();
        });
    }, 60000);

    test('test getBalance', done => {
        expect(streamConn).toBeInstanceOf(StreamingApiConnector);

        streamConn.subscribeBalance().subscribe((result: StreamingBalanceResponse) => {
            expect(result).toBeInstanceOf(StreamingBalanceResponse);

            streamConn.stopBalance();
            done();
        })
    }, 10000);

    test('test getKeepAlive', done => {
        expect(streamConn).toBeInstanceOf(StreamingApiConnector);
        let i = 0;

        streamConn.subscribeKeepAlive().subscribe((result: StreamingKeepAliveResponse) => {
            expect(result).toBeInstanceOf(StreamingKeepAliveResponse);

            i++;
            if (i === 2) {
                streamConn.stopKeepAlive();
                done();
            }
        });
    }, 15000);
});

