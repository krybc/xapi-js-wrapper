import {Exclude, Expose, Type} from "class-transformer";
import {BaseResponse} from "./base.response";
import {TradingHoursRecord} from "../records/trading-hours.record";

@Exclude()
export class TradingHoursResponse extends BaseResponse {
    @Expose({ name: 'returnData' })
    @Type(() => TradingHoursRecord)
    public tradingHoursRecords: TradingHoursRecord[];
}
