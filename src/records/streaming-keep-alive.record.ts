import {Exclude, Expose} from "class-transformer";

@Exclude()
export class StreamingKeepAliveRecord {
    @Expose()
    public timestamp: number;
}
