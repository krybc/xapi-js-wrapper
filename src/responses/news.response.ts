import {Exclude, Expose, Type} from "class-transformer";
import {BaseResponse} from "./base.response";
import {NewsTopicRecord} from "../records/news-topic.record";

@Exclude()
export class NewsResponse extends BaseResponse {
    @Expose({ name: 'returnData' })
    @Type(() => NewsTopicRecord)
    public newsRecords: NewsTopicRecord[];
}
