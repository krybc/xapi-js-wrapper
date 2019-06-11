import {Exclude, Expose} from "class-transformer";
import {BaseResponse} from "./base.response";

@Exclude()
export class CommissionDefResponse extends BaseResponse {
    @Expose()
    public commission: number;

    @Expose()
    public rateOfExchange: number;
}
