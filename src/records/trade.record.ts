import {Exclude, Expose} from "class-transformer";

@Exclude()
export class TradeRecord {
    @Expose({ name: 'close_price' })
    closePrice: number;

    @Expose({ name: 'close_time' })
    closeTime: number;

    @Expose()
    closed: boolean;

    @Expose()
    cmd: number;

    @Expose()
    comment: string;

    @Expose()
    commission: number;

    @Expose()
    customComment: string;

    @Expose()
    digits: number;

    @Expose()
    expiration: number;

    @Expose({ name: 'margin_rate' })
    marginRate: number;

    @Expose()
    offset: number;

    @Expose({ name: 'open_price' })
    openPrice: number;

    @Expose({ name: 'open_time' })
    openTime: number;

    @Expose()
    order: number;

    @Expose()
    order2: number;

    @Expose()
    position: number;

    @Expose()
    profit: number;

    @Expose()
    sl: number;

    @Expose()
    state: string;

    @Expose()
    storage: number;

    @Expose()
    symbol: string;

    @Expose()
    tp: number;

    @Expose()
    type: number;

    @Expose()
    volume: number;
}
