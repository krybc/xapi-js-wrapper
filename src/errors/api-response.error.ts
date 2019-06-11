export class ApiResponseError extends Error {
    public constructor(errorCode: string, errorDescription: string) {
        const message = `${errorCode}: ${errorDescription}`;
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
