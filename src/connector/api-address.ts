export class ApiAddress {
    public constructor(
        private _address: string,
        private _name: string
    ) {}

    get address(): string {
        return this._address;
    }

    get name(): string {
        return this._name;
    }
}
