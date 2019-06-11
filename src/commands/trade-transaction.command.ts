import {BaseCommand} from "./base.command";
import {TradeTransInfoRecord} from "../records/trade-trans-info.record";

export class TradeTransactionCommand extends BaseCommand {
    public constructor(
        private _tradeTransInfo: TradeTransInfoRecord
    ) {
        super();
        this._command = 'tradeTransaction';

        this._arguments = {
            tradeTransInfo: this._tradeTransInfo
        }
    }
}
