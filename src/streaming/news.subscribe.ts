export class NewsSubscribe {
    protected _command: string = 'getNews';

    public constructor(
        protected _streamSessionId: string
    ) {}

    public toString() {
        return JSON.stringify({ command: this._command, streamSessionId: this._streamSessionId});
    }
}
