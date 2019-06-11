import { Servers } from "../../src/connector/servers";
import {ApiCommunicationError} from "../../src/errors/api-communication.error";

test('test unavailable server', () => {
    try {
        const server = Servers.get('xtb', 'aaa');
    } catch (e) {
        expect(e).toBeInstanceOf(ApiCommunicationError);
    }
});


test('test servers', () => {
    const server = Servers.get('xtb', 'demo');

    expect(server.address).toBe('wss://ws.xtb.com/demo');
    expect(server.addressStream).toBe('wss://ws.xtb.com/demoStream');
});
