import {Exclude, Expose, Type} from "class-transformer";
import {StreamingBaseResponse} from "./streaming-base.response";
import {StreamingProfitRecord} from "../records/streaming-profit.record";

@Exclude()
export class StreamingProfitResponse extends StreamingBaseResponse {
    @Expose()
    command: string;

    @Expose()
    @Type(() => StreamingProfitRecord)
    data: StreamingProfitRecord;
}
