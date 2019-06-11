import {Exclude, Expose, Type} from "class-transformer";
import {StepRecord} from "./step.record";

@Exclude()
export class StepRuleRecord {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    @Type(() => StepRecord)
    steps: StepRecord[];
}
