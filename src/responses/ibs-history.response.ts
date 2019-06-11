import {Exclude, Expose, Type} from "class-transformer";
import {BaseResponse} from "./base.response";
import {IbRecord} from "../records/ib.record";

@Exclude()
export class IbsHistoryResponse extends BaseResponse {
    @Expose({ name: 'returnData' })
    @Type(() => IbRecord)
    public IbRecords: IbRecord[];
}
