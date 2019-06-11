import {BaseCommand} from "./base.command";

export class TradesHistoryCommand extends BaseCommand {
    public constructor(
        private _end: number = 0,
        private _start: number
    ) {
        super();
        this._command = 'getTradesHistory';

        this._arguments = {
            end: this._end,
            start: this._start
        }
    }
}
