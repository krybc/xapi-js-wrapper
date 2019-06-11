export class CandlesStop {
    protected _command: string = 'stopCandles';

    public constructor(
        protected _symbol: string
    ) {}

    public toString() {
        return JSON.stringify({ command: this._command, symbol: this._symbol});
    }
}
