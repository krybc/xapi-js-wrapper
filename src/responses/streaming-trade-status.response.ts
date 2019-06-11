import {Exclude, Expose, Type} from "class-transformer";
import {StreamingBaseResponse} from "./streaming-base.response";
import {StreamingTradeStatusRecord} from "../records/streaming-trade-status.record";

@Exclude()
export class StreamingTradeStatusResponse extends StreamingBaseResponse {
    @Expose()
    command: string;

    @Expose()
    @Type(() => StreamingTradeStatusRecord)
    data: StreamingTradeStatusRecord;
}
