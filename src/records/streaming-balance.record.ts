import {Exclude, Expose} from "class-transformer";

@Exclude()
export class StreamingBalanceRecord {
    @Expose()
    balance: number;

    @Expose()
    credit: number;

    @Expose()
    equity: number;

    @Expose()
    margin: number;

    @Expose()
    marginFree: number;

    @Expose()
    marginLevel: number;
}
