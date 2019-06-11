export class KeepAliveSubscribe {
    protected _command: string = 'getKeepAlive';

    public constructor(
        protected _streamSessionId: string
    ) {}

    public toString() {
        return JSON.stringify({ command: this._command, streamSessionId: this._streamSessionId});
    }
}
