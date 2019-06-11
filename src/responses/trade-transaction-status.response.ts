import {Exclude, Expose} from "class-transformer";
import {BaseResponse} from "./base.response";

@Exclude()
export class TradeTransactionStatusResponse extends BaseResponse {
    @Expose()
    ask: number;

    @Expose()
    bid: number;

    @Expose()
    customComment: string;

    @Expose()
    message: string;

    @Expose()
    order: number;

    @Expose()
    requestStatus: number;
}
