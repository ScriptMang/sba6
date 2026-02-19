export class NetworkError extends Error {
    constructor (message: string) {
        super(message);
        this.name = "NetworkError";
    }
}

export function validateResponseOK(resp: Response){
    if (!resp.ok){
        throw new NetworkError(`Request failed: ${resp.statusText}, statusCode: ${resp.status}`);
    }
}