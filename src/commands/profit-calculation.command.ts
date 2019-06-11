import {BaseCommand} from "./base.command";

export class ProfitCalculationCommand extends BaseCommand {
    public constructor(
        private _closePrice: number,
        private _cmd: number,
        private _openPrice: number,
        private _symbol: string,
        private _volume: number
    ) {
        super();
        this._command = 'getProfitCalculation';

        this._arguments = {
            closePrice: this._closePrice,
            cmd: this._cmd,
            openPrice: this._openPrice,
            symbol: this._symbol,
            volume: this._volume
        }
    }
}
