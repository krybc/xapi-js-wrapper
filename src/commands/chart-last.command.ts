import {BaseCommand} from "./base.command";
import {plainToClass} from "class-transformer";
import {ChartLastInfoRecord} from "../records/chart-last-info.record";

export class ChartLastCommand extends BaseCommand {
    public constructor(
        private _info: {period: number, start: number, symbol: string},
    ) {
        super();
        this._command = 'getChartLastRequest';

        this._arguments = {
            info: plainToClass(ChartLastInfoRecord, this._info)
        }
    }
}
