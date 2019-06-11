import {Exclude, Expose} from "class-transformer";

@Exclude()
export class StreamingCandleRecord {
    @Expose()
    ctm: number;

    @Expose()
    ctmString: string;

    @Expose()
    open: number;

    @Expose()
    close: number;

    @Expose()
    high: number;

    @Expose()
    low: number;

    @Expose()
    vol: number;

    @Expose()
    quoteId: number;

    @Expose()
    symbol: string;
}
