export class TickPricesStop {
    protected _command: string = 'stopTickPrices';

    public constructor(
        protected _streamSessionId: string,
        protected _symbol: string,
    ) {}

    public toString() {
        return JSON.stringify({ command: this._command, streamSessionId: this._streamSessionId, symbol: this._symbol});
    }
}
