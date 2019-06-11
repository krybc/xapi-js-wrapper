import {Exclude, Expose, Type} from "class-transformer";
import {BaseResponse} from "./base.response";
import {SymbolRecord} from "../records/symbol.record";

@Exclude()
export class SymbolResponse extends BaseResponse {
    @Expose({ name: 'returnData' })
    @Type(() => SymbolRecord)
    public symbol: SymbolRecord;
}
