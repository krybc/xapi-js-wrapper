import {Exclude, Expose} from "class-transformer";
import {BaseResponse} from "./base.response";

@Exclude()
export class TradeTransactionResponse extends BaseResponse {
    @Expose()
    order: number;
}
