

export interface BaseStreamingInterface {
    command: string;
}

export class BaseStreaming {
    private _command: string;

    get command(): string {
        return this._command;
    }
}
