export class ApiCommunicationError extends Error {
    public constructor(message?: string) {
        super(message);
        this.name = 'ApiCommunicationError';
        this.message = message;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
