import {Product} from '../models/Product.js'

export function calculateTax(item: Product): number {
    if (item.category === "groceries") {
        return item.getPriceWithDiscount() * 0.03;
    }
    return  item.getPriceWithDiscount() * 0.0475;
}