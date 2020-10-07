import * as WebSocket from 'ws';

export class Connector {

    protected apiSocket: WebSocket = null;

    public constructor() {

    }

    protected _connected: boolean = false;

    public get connected() {
        return this._connected;
    }
}
