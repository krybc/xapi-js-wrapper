import {BaseCommand} from "./base.command";

export class CommissionDefCommand extends BaseCommand {
    public constructor(
        private _symbol: string,
        private _volume: number
    ) {
        super();
        this._command = 'getCommissionDef';

        this._arguments = {
            symbol: this._symbol,
            volume: this._volume
        }
    }
}
