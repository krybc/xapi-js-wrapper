export class BaseCommand {
    protected _arguments: {[name: string]: string | number | boolean | Object};

    public constructor() {
        this._command = null;
        this._arguments = {};
    }

    protected _command: string | null;

    get command(): string | null {
        return this._command;
    }

    public toString(): string {
        let json: any = {};
        json.command = this._command;

        if (Object.keys(this._arguments).length > 0) {
            json.arguments = this._arguments;
        }

        return JSON.stringify(json);
    }
}
