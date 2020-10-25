import {BaseCommand} from "./base.command";
import {TradeOperationCodeEnum, TradeTransactionTypeEnum} from "../enums";

export class TradeTransactionCommand extends BaseCommand {
  public constructor(
    private cmd: TradeOperationCodeEnum,
    private type: TradeTransactionTypeEnum,
    private symbol: string,
    private volume: number,
    private price: number,
    private tp: number,
    private sl: number,
    private order: number,
    private offset: number,
    private expiration: number,
    private customComment: string,
  ) {
    super();
    this._command = 'tradeTransaction';

    this._arguments = {
      tradeTransInfo: {
        cmd,
        type,
        symbol,
        volume,
        price,
        tp,
        sl,
        order,
        offset,
        expiration,
        customComment
      }
    }
  }
}
