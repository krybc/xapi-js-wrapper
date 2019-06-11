import {Exclude, Expose, Transform, Type} from "class-transformer";
import {StreamingBaseResponse} from "./streaming-base.response";
import {StreamingKeepAliveRecord} from "../records/streaming-keep-alive.record";

@Exclude()
export class StreamingKeepAliveResponse extends StreamingBaseResponse {
    @Expose()
    command: string;

    @Expose()
    @Type(() => StreamingKeepAliveRecord)
    data: StreamingKeepAliveRecord;
}
