import {Exclude, Expose, Type} from "class-transformer";
import {StreamingBaseResponse} from "./streaming-base.response";
import {StreamingTradeRecord} from "../records/streaming-trade.record";

@Exclude()
export class StreamingTradeResponse extends StreamingBaseResponse {
    @Expose()
    command: string;

    @Expose()
    @Type(() => StreamingTradeRecord)
    data: StreamingTradeRecord;
}
