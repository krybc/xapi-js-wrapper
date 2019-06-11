import {Exclude, Expose} from "class-transformer";

@Exclude()
export class RateInfoRecord {
    @Expose()
    close: number;

    @Expose()
    ctm: number;

    @Expose()
    ctmString: string;

    @Expose()
    high: number;

    @Expose()
    low: number;

    @Expose()
    open: number;

    @Expose()
    vol: number;
}
