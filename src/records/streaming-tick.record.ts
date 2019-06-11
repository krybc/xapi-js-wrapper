import {Exclude, Expose} from "class-transformer";

@Exclude()
export class StreamingTickRecord {
    @Expose()
    ask: number;

    @Expose()
    askVolume: number;

    @Expose()
    bid: number;

    @Expose()
    bidVolume: number;

    @Expose()
    high: number;

    @Expose()
    level: number;

    @Expose()
    low: number;

    @Expose()
    quoteId: number;

    @Expose()
    spreadRaw: number;

    @Expose()
    spreadTable: number;

    @Expose()
    symbol: string;

    @Expose()
    timestamp: number;
}
