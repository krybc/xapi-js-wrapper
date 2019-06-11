export class TradesSubscribe {
    protected _command: string = 'getTrades';

    public constructor(
        protected _streamSessionId: string,
    ) {}

    public toString() {
        return JSON.stringify({ command: this._command, streamSessionId: this._streamSessionId});
    }
}
