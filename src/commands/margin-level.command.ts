import {BaseCommand} from "./base.command";

export class MarginLevelCommand extends BaseCommand {
    public constructor() {
        super();
        this._command = 'getMarginLevel';
    }
}
