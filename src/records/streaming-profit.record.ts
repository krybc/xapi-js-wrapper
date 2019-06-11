import {Exclude, Expose} from "class-transformer";

@Exclude()
export class StreamingProfitRecord {
    @Expose()
    order: number;

    @Expose()
    order2: number;

    @Expose()
    position: number;

    @Expose()
    profit: number;
}
