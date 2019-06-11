import {BaseCommand} from "./base.command";

export class TradingHoursCommand extends BaseCommand {
    public constructor(
        private _symbols: string[]
    ) {
        super();
        this._command = 'getTradingHours';

        this._arguments = {
            symbols: this._symbols
        }
    }
}
