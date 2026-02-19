import {Product} from '../models/Product.js'
 
export function calculateDiscount(item: Product): number {
    return item.price * (item.discountPercentage/100);
}