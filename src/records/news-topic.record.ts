import {Exclude, Expose} from "class-transformer";

@Exclude()
export class NewsTopicRecord {
    @Expose()
    key: string;

    @Expose()
    title: string;

    @Expose()
    time: number;

    @Expose()
    timeString: string;

    @Expose()
    body: string;

    @Expose({ name: 'bodylen' })
    bodyLength: number;
}
