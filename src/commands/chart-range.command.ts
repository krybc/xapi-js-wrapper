import {BaseCommand} from "./base.command";
import {plainToClass} from "class-transformer";
import {ChartRangeInfoRecord} from "../records";

export class ChartRangeCommand extends BaseCommand {
  public constructor(
    private end: number,
    private period: number,
    private start: number,
    private symbol: string,
    private ticks: number,
  ) {
    super();
    this._command = 'getChartRangeRequest';

    this._arguments = {
      info: plainToClass(ChartRangeInfoRecord, {end, period, start, symbol, ticks})
    }
  }
}
