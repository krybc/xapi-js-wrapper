export class NewsStop {
    protected _command: string = 'stopNews';

    public constructor() {}

    public toString() {
        return JSON.stringify({ command: this._command });
    }
}
