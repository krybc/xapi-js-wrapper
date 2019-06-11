import {Exclude, Expose, Type} from "class-transformer";
import {BaseResponse} from "./base.response";
import {TickRecord} from "../records/tick.record";

@Exclude()
export class TickPricesResponse extends BaseResponse {
    @Expose({ name: 'quotations' })
    @Type(() => TickRecord)
    public ticks: TickRecord[];
}
