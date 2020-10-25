import {Exclude, Expose} from "class-transformer";
import {TradeOperationCodeEnum} from "../enums";
import {TradeTransactionTypeEnum} from "../enums";

@Exclude()
export class TradeTransInfoRecord {
    @Expose()
    cmd: TradeOperationCodeEnum;

    @Expose()
    customComment: string;

    @Expose()
    expiration: number;

    @Expose()
    offset: number;

    @Expose()
    order: number;

    @Expose()
    price: number;

    @Expose()
    sl: number;

    @Expose()
    symbol: string;

    @Expose()
    tp: number;

    @Expose()
    type: TradeTransactionTypeEnum;

    @Expose()
    volume: number;
}
