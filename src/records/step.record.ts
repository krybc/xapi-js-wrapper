import {Exclude, Expose} from "class-transformer";

@Exclude()
export class StepRecord {
    @Expose()
    fromValue: number;

    @Expose()
    step: number;
}
