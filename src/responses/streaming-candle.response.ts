import {Exclude, Expose, Type} from "class-transformer";
import {StreamingBaseResponse} from "./streaming-base.response";
import {StreamingCandleRecord} from "../records/streaming-candle.record";

@Exclude()
export class StreamingCandleResponse extends StreamingBaseResponse {
    @Expose()
    command: string;

    @Expose()
    @Type(() => StreamingCandleRecord)
    data: StreamingCandleRecord;
}
