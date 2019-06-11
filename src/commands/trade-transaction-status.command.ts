import {BaseCommand} from "./base.command";

export class TradeTransactionStatusCommand extends BaseCommand {
    public constructor(
        private _order: number
    ) {
        super();
        this._command = 'tradeTransactionStatus';

        this._arguments = {
            order: this._order
        }
    }
}
