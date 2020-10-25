import * as WebSocket from 'ws';
import {Subject} from "rxjs";

export abstract class BaseConnector {
    protected socket: WebSocket = null;
    protected _connected: boolean = false;
    protected subscriptions: { [id: string]: Subject<any> } = {};

    public get connected() {
        return this._connected;
    }
}
