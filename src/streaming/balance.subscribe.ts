export class BalanceSubscribe {
    protected _command: string = 'getBalance';

    public constructor(
        protected _streamSessionId: string
    ) {}

    public toString() {
        return JSON.stringify({ command: this._command, streamSessionId: this._streamSessionId});
    }
}
