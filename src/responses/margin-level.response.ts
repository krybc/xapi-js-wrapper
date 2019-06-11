import {Exclude, Expose} from "class-transformer";
import {BaseResponse} from "./base.response";

@Exclude()
export class MarginLevelResponse extends BaseResponse {
    @Expose()
    public balance: number;

    @Expose()
    public credit: number;

    @Expose()
    public currency: string;

    @Expose()
    public equity: number;

    @Expose()
    public margin: number;

    @Expose({ name: 'margin_level' })
    public marginFree: number;

    @Expose({ name: 'margin_free' })
    public marginLevel: number;
}
