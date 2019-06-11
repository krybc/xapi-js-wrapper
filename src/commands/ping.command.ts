import {BaseCommand} from "./base.command";

export class PingCommand extends BaseCommand {
    public constructor() {
        super();
        this._command = 'ping';
    }
}
