export class TradeStatusSubscribe {
    protected _command: string = 'getTradeStatus';

    public constructor(
        protected _streamSessionId: string,
    ) {}

    public toString() {
        return JSON.stringify({ command: this._command, streamSessionId: this._streamSessionId});
    }
}
