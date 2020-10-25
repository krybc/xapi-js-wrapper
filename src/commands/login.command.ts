import {Credentials} from "../connector/credentials";
import {BaseCommand} from "./base.command";

export class LoginCommand extends BaseCommand {
  public constructor(credentials: Credentials) {
    super();
    this._command = 'login';

    this._arguments = {
      userId: credentials.userId,
      password: credentials.password,
      appId: credentials.appId,
      appName: credentials.appName
    };
  }
}
