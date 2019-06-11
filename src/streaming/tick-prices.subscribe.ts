export class TickPricesSubscribe {
    protected _command: string = 'getTickPrices';

    public constructor(
        protected _streamSessionId: string,
        protected _symbol: string,
        protected _minArrivalTime: number,
        protected _maxLevel: number
    ) {}

    public toString() {
        return JSON.stringify({ command: this._command, streamSessionId: this._streamSessionId, symbol: this._symbol, minArrivalTime: this._minArrivalTime, maxLevel: this._maxLevel});
    }
}
