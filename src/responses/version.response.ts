import {Exclude, Expose} from "class-transformer";
import {BaseResponse} from "./base.response";

@Exclude()
export class VersionResponse extends BaseResponse {
    @Expose()
    version: string;
}
