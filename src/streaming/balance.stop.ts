export class BalanceStop {
    protected _command: string = 'stopBalance';

    public constructor() {}

    public toString() {
        return JSON.stringify({ command: this._command });
    }
}
