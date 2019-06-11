import {Exclude, Expose} from "class-transformer";

@Exclude()
export class HoursRecord {
    @Expose()
    day: number;

    @Expose({ name: 'fromT' })
    fromTimestamp: string;

    @Expose({ name: 'toT' })
    toTimestamp: number;
}
