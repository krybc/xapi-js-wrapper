import {Exclude, Expose} from "class-transformer";

@Exclude()
export class IbRecord {
    @Expose()
    closePrice: number;

    @Expose()
    login: string;

    @Expose()
    nominal: number;

    @Expose()
    openPrice: number;

    @Expose()
    side: number;

    @Expose()
    surname: string;

    @Expose()
    symbol: number;

    @Expose()
    timestamp: number;

    @Expose()
    volume: number;
}
