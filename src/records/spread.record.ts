import {Exclude, Expose} from "class-transformer";

@Exclude()
export class SpreadRecord {
    @Expose()
    companyUnit: number;

    @Expose()
    currency: string;

    @Expose()
    group: string;

    @Expose()
    ibAccount: boolean;

    @Expose()
    leverage: number;

    @Expose()
    leverageMultiplier: number;

    @Expose()
    spreadType: string;

    @Expose()
    trailingStop: boolean;
}
