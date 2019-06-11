import {BaseCommand} from "./base.command";

export class CalendarCommand extends BaseCommand {
    public constructor() {
        super();
        this._command = 'getCalendar';
    }
}
