export class Server {
    public constructor(
       private _address: string,
       private _addressStream: string,
       private _description: string
    ) {}

    public get address() {
        return this._address;
    }

    public set address(value: string) {
        this._address = value;
    }

    get addressStream(): string {
        return this._addressStream;
    }

    set addressStream(value: string) {
        this._addressStream = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}
