import {Exclude, Expose, Type} from "class-transformer";
import {BaseResponse} from "./base.response";
import {RateInfoRecord} from "../records/rate-info.record";

@Exclude()
export class ChartRangeResponse extends BaseResponse {
    @Expose()
    digits: number;

    @Expose()
    @Type(() => RateInfoRecord)
    public rateInfos: RateInfoRecord[];
}
