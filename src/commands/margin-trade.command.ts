import {BaseCommand} from "./base.command";

export class MarginTradeCommand extends BaseCommand {
    public constructor(
        private _symbol: string,
        private _volume: number
    ) {
        super();
        this._command = 'getMarginTrade';

        this._arguments = {
            symbol: this._symbol,
            volume: this._volume
        }
    }
}
