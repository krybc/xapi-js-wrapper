export class ProfitsStop {
    protected _command: string = 'stopProfits';

    public constructor() {}

    public toString() {
        return JSON.stringify({ command: this._command });
    }
}
