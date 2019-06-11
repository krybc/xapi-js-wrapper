import {Exclude, Expose} from "class-transformer";

@Exclude()
export class CalendarRecord {
    @Expose()
    country: string;

    @Expose()
    current: string;

    @Expose()
    forecast: string;

    @Expose()
    impact: string;

    @Expose()
    period: string;

    @Expose()
    previous: string;

    @Expose()
    time: number;

    @Expose()
    title: string;
}
