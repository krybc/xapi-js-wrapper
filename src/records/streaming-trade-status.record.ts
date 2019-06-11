import {Exclude, Expose} from "class-transformer";

@Exclude()
export class StreamingTradeStatusRecord {
    @Expose()
    customComment: string;

    @Expose()
    message: string;

    @Expose()
    order: number;

    @Expose()
    price: number;

    @Expose()
    requestStatus: number;
}
