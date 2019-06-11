import {BaseCommand} from "./base.command";

export class TickPricesCommand extends BaseCommand {
    public constructor(
        private _level: number,
        private _symbols: string[],
        private _timestamp: number
    ) {
        super();
        this._command = 'getTickPrices';

        this._arguments = {
            level: this._level,
            symbols: this._symbols,
            timestamp: this._timestamp
        }
    }
}
