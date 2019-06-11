import {BaseCommand} from "./base.command";

export class VersionCommand extends BaseCommand {
    public constructor() {
        super();
        this._command = 'getVersion';
    }
}
