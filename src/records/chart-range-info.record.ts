import {Exclude, Expose} from "class-transformer";

@Exclude()
export class ChartRangeInfoRecord {
    @Expose()
    end: number;

    @Expose()
    period: number;

    @Expose()
    start: number;

    @Expose()
    symbol: string;

    @Expose()
    ticks: string;
}
