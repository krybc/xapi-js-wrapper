import {BaseCommand} from "./base.command";

export class TradeRecordsCommand extends BaseCommand {
    public constructor(
        private _orders: number[]
    ) {
        super();
        this._command = 'getTradeRecords';

        this._arguments = {
            orders: this._orders
        }
    }
}
