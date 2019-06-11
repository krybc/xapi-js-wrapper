import {BaseResponse} from "./base.response";
import {Exclude, Expose} from "class-transformer";

@Exclude()
export class LoginResponse extends BaseResponse {
    @Expose()
    public streamSessionId: string;
}
