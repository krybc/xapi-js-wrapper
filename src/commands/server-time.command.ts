import {BaseCommand} from "./base.command";

export class ServerTimeCommand extends BaseCommand {
    public constructor() {
        super();
        this._command = 'getServerTime';
    }
}
