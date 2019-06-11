import {Exclude, Expose, Type} from "class-transformer";
import {CalendarRecord} from "../records/calendar.record";
import {BaseResponse} from "./base.response";

@Exclude()
export class CalendarResponse extends BaseResponse {
    @Expose({ name: 'returnData' })
    @Type(() => CalendarRecord)
    public calendarRecords: CalendarRecord[];
}
