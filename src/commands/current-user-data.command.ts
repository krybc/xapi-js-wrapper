import {BaseCommand} from "./base.command";

export class CurrentUserDataCommand extends BaseCommand {
    public constructor() {
        super();
        this._command = 'getCurrentUserData';
    }
}
