import {Exclude, Expose} from "class-transformer";

@Exclude()
export class StreamingNewsRecord {
    @Expose()
    key: string;

    @Expose()
    title: string;

    @Expose()
    time: number;

    @Expose()
    body: string;
}
