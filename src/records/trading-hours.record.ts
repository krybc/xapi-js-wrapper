import {Exclude, Expose, Type} from "class-transformer";
import {HoursRecord} from "./hours.record";

@Exclude()
export class TradingHoursRecord {
    @Expose()
    @Type(() => HoursRecord)
    quotes: HoursRecord[];

    @Expose()
    symbol: string;

    @Expose()
    @Type(() => HoursRecord)
    trading: HoursRecord[];
}
