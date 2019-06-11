import {BaseCommand} from "./base.command";

export class LogoutCommand extends BaseCommand {
    public constructor() {
        super();
        this._command = 'logout';
    }
}
