import {Exclude, Expose} from "class-transformer";
import {BaseResponse} from "./base.response";

@Exclude()
export class MarginTradeResponse extends BaseResponse {
    @Expose()
    public margin: number;
}
