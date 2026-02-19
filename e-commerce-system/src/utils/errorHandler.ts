export class NetworkError extends Error {
    constructor (message: string) {
        super(message);
        this.name = "NetworkError";
    }
}

export class ValidationError extends Error {
    constructor (message: string) {
        super(message);
        this.name = "ValidationError";
    }
}


export function validateResponseOK(resp: Response){
    if (!resp.ok){
        throw new NetworkError(`Request failed: ${resp.statusText}, statusCode: ${resp.status}`);
    }
}

export function validateMinStock(productName: string, amountOfStock: number){
    if (amountOfStock <= 10) {
         throw new ValidationError(`The amount of ${productName}s in stock is too low; remainingStock: ${amountOfStock}`);
    }
}