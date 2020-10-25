import {BaseCommand} from "./base.command";
import {plainToClass} from "class-transformer";
import {ChartLastInfoRecord} from "../records";

export class ChartLastCommand extends BaseCommand {
  public constructor(
    private period: number,
    private start: number,
    private symbol: string,
  ) {
    super();
    this._command = 'getChartLastRequest';

    this._arguments = {
      info: plainToClass(ChartLastInfoRecord, {period, start, symbol})
    }
  }
}
