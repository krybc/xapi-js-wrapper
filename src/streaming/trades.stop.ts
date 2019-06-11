export class TradesStop {
    protected _command: string = 'stopTrades';

    public constructor() {}

    public toString() {
        return JSON.stringify({ command: this._command});
    }
}
