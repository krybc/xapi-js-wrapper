export class KeepAliveStop {
    protected _command: string = 'stopKeepAlive';

    public constructor() {}

    public toString() {
        return JSON.stringify({ command: this._command});
    }
}
