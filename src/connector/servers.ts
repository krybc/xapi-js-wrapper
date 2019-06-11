import {Server} from "./server";
import {ApiCommunicationError} from "../errors/api-communication.error";

export let SERVERS: {[provider: string]: {[type: string]: Server}} = {};
SERVERS = {
    xopenhub: {
        demo: new Server('wss://ws.xapi.pro/demo', 'wss://ws.xapi.pro/demoStream', 'xOpenHub - demo'),
        real: new Server('wss://ws.xapi.pro/real', 'wss://ws.xapi.pro/realStream', 'xOpenHub - real')
    },
    xtb: {
        demo: new Server('wss://ws.xtb.com/demo', 'wss://ws.xtb.com/demoStream', 'XTB - demo'),
        real: new Server('wss://ws.xtb.com/real', 'wss://ws.xtb.com/realStream', 'XTB - real')
    }
};

export class Servers {

    /**
     *
     * @param provider
     * @param type
     * @exception ApiCommunicationException
     */
    public static get(provider: string, type: string): Server | never {
        const server = SERVERS[provider][type];
        if (server === undefined) {
            throw new ApiCommunicationError('No server to connect to');
        }

        return server;
    }

}
