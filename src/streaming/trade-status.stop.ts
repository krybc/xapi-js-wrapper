export class TradeStatusStop {
    protected _command: string = 'stopTradeStatus';

    public constructor() {}

    public toString() {
        return JSON.stringify({ command: this._command});
    }
}
