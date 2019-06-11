import {Exclude, Expose} from "class-transformer";
import {BaseResponse} from "./base.response";

@Exclude()
export class ServerTimeResponse extends BaseResponse {
    @Expose()
    time: number;

    @Expose()
    timeString: string;
}
