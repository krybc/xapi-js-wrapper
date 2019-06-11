import {BaseCommand} from "./base.command";
import {plainToClass} from "class-transformer";
import {ChartRangeInfoRecord} from "../records/chart-range-info.record";

export class ChartRangeCommand extends BaseCommand {
    public constructor(
        private _info: {end: number, period: number, start: number, symbol: string, ticks: number},
    ) {
        super();
        this._command = 'getChartLastRequest';

        this._arguments = {
            info: plainToClass(ChartRangeInfoRecord, this._info)
        }
    }
}
