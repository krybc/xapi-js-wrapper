import {Exclude, Expose} from "class-transformer";
import {BaseResponse} from "./base.response";

@Exclude()
export class CurrentUserResponse extends BaseResponse {
    @Expose()
    public companyUnit: number;

    @Expose()
    public currency: string;

    @Expose()
    public group: string;

    @Expose()
    public ibAccount: boolean;

    @Expose()
    public leverage: number;

    @Expose()
    public leverageMultiplier: number;

    @Expose()
    public spreadType: string;

    @Expose()
    public trailingStop: boolean;
}
