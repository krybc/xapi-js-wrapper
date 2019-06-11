import {Exclude, Expose, Type} from "class-transformer";
import {BaseResponse} from "./base.response";
import {StepRecord} from "../records/step.record";
import {StepRuleRecord} from "../records/step-rule.record";

@Exclude()
export class StepRulesResponse extends BaseResponse {
    @Expose({ name: 'returnData' })
    @Type(() => StepRecord)
    public stepRulesRecords: StepRuleRecord[];
}
