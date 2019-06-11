import {BaseCommand} from "./base.command";

export class SymbolCommand extends BaseCommand {
    public constructor(
        private _symbol: string,
    ) {
        super();
        this._command = 'getSymbol';

        this._arguments = {
            symbol: this._symbol
        }
    }
}
