import {Servers} from "../src/connector/servers";
import {SyncApiConnector} from "../src/connector/sync-api-connector";
import {LoginCommand} from "../src/commands/login.command";
import {Credentials} from "../src/connector/credentials";
import {NewsCommand} from "../src/commands/news.command";
import {ProfitCalculationCommand} from "../src/commands/profit-calculation.command";
import {CurrentUserDataCommand} from "../src/commands/current-user-data.command";
import {CurrentUserResponse} from "../src/responses/current-user.response";
import {VersionCommand} from "../src/commands/version.command";
import {VersionResponse} from "../src/responses/version.response";
import {NewsTopicRecord} from "../src/records/news-topic.record";

describe('test sync commands',  () => {
    let conn: SyncApiConnector;
    let sessionId: string;

    beforeAll(async () => {
        const server = Servers.get('xtb', 'demo');
        return new SyncApiConnector(server).connect().then((result: SyncApiConnector) => {
            conn = result;
        });
    });

    test('test login command', async () => {
        const credentials = new Credentials(process.env.XAPI_LOGIN, process.env.XAPI_PASSWORD);
        const result = await conn.executeCommand(new LoginCommand(credentials));
        sessionId = result.streamSessionId;

        expect(result.streamSessionId).toBeDefined();
    });

    test('test getCurrentUserData command', async () => {
        const result = await conn.executeCommand(new CurrentUserDataCommand());

        expect(result).toBeInstanceOf(CurrentUserResponse);
    });

    test('test getNews command', async () => {
        const result = await conn.executeCommand(new NewsCommand(0, Date.now() - (1000 * 60 * 60 * 24 * 3)));

        expect(result.newsRecords).toBeDefined();

        if (result.newsRecords.length > 0) {
            expect(result.newsRecords[0]).toBeInstanceOf(NewsTopicRecord);
        }
    });

    test('test getProfitCalculation command', async () => {
        const result = await conn.executeCommand(new ProfitCalculationCommand(1.4000, 0, 1.3000, 'EURUSD', 1.0));

        expect(result.profit).toBeDefined();
        expect(result.profit).toBeNumber();
    });

    test('test version command', async () => {
        const result = await conn.executeCommand(new VersionCommand());

        expect(result).toBeInstanceOf(VersionResponse);
    });
});

