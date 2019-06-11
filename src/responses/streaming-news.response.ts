import {Exclude, Expose, Type} from "class-transformer";
import {StreamingBaseResponse} from "./streaming-base.response";
import {StreamingNewsRecord} from "../records/streaming-news.record";

@Exclude()
export class StreamingNewsResponse extends StreamingBaseResponse {
    @Expose()
    command: string;

    @Expose()
    @Type(() => StreamingNewsRecord)
    data: StreamingNewsRecord;
}
