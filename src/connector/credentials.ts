export class Credentials {
    public constructor(
        private _userId: string,
        private _password: string,
        private _appId: string = '',
        private _appName: string = ''
    ) {}

    get userId(): string {
        return this._userId;
    }

    get password(): string {
        return this._password;
    }

    get appId(): string {
        return this._appId;
    }

    get appName(): string {
        return this._appName;
    }
}
