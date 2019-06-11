export class ProfitsSubscribe {
    protected _command: string = 'getProfits';

    public constructor(
        protected _streamSessionId: string
    ) {}

    public toString() {
        return JSON.stringify({ command: this._command, streamSessionId: this._streamSessionId});
    }
}
