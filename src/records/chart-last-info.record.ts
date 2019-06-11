import {Exclude, Expose} from "class-transformer";

@Exclude()
export class ChartLastInfoRecord {
    @Expose()
    period: number;

    @Expose()
    start: number;

    @Expose()
    symbol: string;
}
