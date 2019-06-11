import {Exclude, Expose, Transform, Type} from "class-transformer";
import {StreamingBaseResponse} from "./streaming-base.response";
import {StreamingBalanceRecord} from "../records/streaming-balance.record";

@Exclude()
export class StreamingBalanceResponse extends StreamingBaseResponse {
    @Expose()
    command: string;

    @Expose()
    @Type(() => StreamingBalanceRecord)
    data: StreamingBalanceRecord;
}
