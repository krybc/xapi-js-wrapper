export class CandlesSubscribe {
    protected _command: string = 'getCandles';

    public constructor(
        protected _streamSessionId: string,
        protected _symbol: string
    ) {}

    public toString() {
        return JSON.stringify({ command: this._command, streamSessionId: this._streamSessionId, symbol: this._symbol});
    }
}
