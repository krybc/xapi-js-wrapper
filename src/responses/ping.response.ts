import {BaseResponse} from "./base.response";
import {Exclude, Expose} from "class-transformer";

@Exclude()
export class PingResponse extends BaseResponse {}
