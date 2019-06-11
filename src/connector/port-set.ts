export class PortSet {
    public constructor(
        private _mainPort: number,
        private _streamingPort: number
    ) {}

    get mainPort(): number {
        return this._mainPort;
    }

    get streamingPort(): number {
        return this._streamingPort;
    }
}
