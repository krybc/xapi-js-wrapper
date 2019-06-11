import {BaseCommand} from "./base.command";

export class StepRulesCommand extends BaseCommand {
    public constructor() {
        super();
        this._command = 'getStepRules';
    }
}
