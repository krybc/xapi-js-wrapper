import {Exclude, Expose} from "class-transformer";
import {BaseResponse} from "./base.response";

@Exclude()
export class ProfitCalculationResponse extends BaseResponse {
    @Expose()
    public profit: number;
}
