import {BaseCommand} from "./base.command";

export class TradesCommand extends BaseCommand {
    public constructor(
        private _openedOnly: boolean = false
    ) {
        super();
        this._command = 'getTrades';

        this._arguments = {
            openedOnly: this._openedOnly
        }
    }
}
