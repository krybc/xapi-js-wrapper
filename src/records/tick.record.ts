import {Exclude, Expose} from "class-transformer";

@Exclude()
export class TickRecord {
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
    spreadRaw: number;

    @Expose()
    spreadTable: number;

    @Expose()
    symbol: string;

    @Expose()
    timestamp: number;
}
