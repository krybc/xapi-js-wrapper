import { SyncApiConnector } from "../../src/connector/sync-api-connector";
import {Servers} from "../../src/connector/servers";

test('test connect to api', async () => {
    const server = Servers.get('xtb', 'demo');

    const conn = await new SyncApiConnector(server).connect();
    expect(conn.connected).toBeTruthy();
});


