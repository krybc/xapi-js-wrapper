import {Exclude, Expose, Type} from "class-transformer";
import {BaseResponse} from "./base.response";
import {TradeRecord} from "../records/trade.record";

@Exclude()
export class TradesHistoryResponse extends BaseResponse {
    @Expose({ name: 'returnData' })
    @Type(() => TradeRecord)
    public tradeRecords: TradeRecord[];
}
