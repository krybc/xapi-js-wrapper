import {BaseCommand} from "./base.command";

export class NewsCommand extends BaseCommand {
    public constructor(
        private _end: number,
        private _start: number
    ) {
        super();
        this._command = 'getNews';

        this._arguments = {
            end: this._end,
            start: this._start
        }
    }
}
