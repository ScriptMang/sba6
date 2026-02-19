import * as ApiService from './services/apiService.js';
import {Product} from './models/Product.js';
import {calculateTax} from './utils/taxCalculator.js';
import {NetworkError} from './utils/errorHandler.js';

try {
    // ApiService.fetchAllProducts();
    // ApiService.fetchProduct(1);
    // ApiService.searchForProducts('phone');
    // ApiService.fetchEachProductsCategories();
    // ApiService.fetchProductCategoryList();
    // ApiService.fetchProductByCategory('smartphones');
    // ApiService.sortProductsByFieldAndOrder('title', true);
} catch (err) {
    if (err instanceof NetworkError) {
        console.error("Network Error:", err.message);
    } else if (err instanceof Error){
         console.error("Unknown Error:", err.message);
    }
}


const prod = new Product(
     1, "file-cabinet", "Office file cabinet meant for archiving documents.",
    "office", 100, 7.16, 4.5, 6, ["business", "storage"],
    "scotts", "TKO39D1P", 50,
    {width: 23.13, height: 50.32, depth: 23.13},  "3 years of warranty", "Ships in 1 month",
    "Low Stock", [
         {
          "rating": 2,
          "comment": "Very unhappy with my purchase!",
          "date": new Date("2024-05-23T08:56:21.618Z"),
          "reviewerName": "John Doe",
          "reviewerEmail": "john.doe@x.dummyjson.com"
        }],  
    "30 days return policy",
    50, {
        "createdAt": new Date("2024-05-23T08:56:21.618Z"),
        "updatedAt": new Date("2024-05-23T08:56:21.618Z"),
        "barcode": "9164035109868",
        "qrCode": "..."
    }, 
    "https://i.imgflip.com/2n0nbi.jpg",
    [
       "https://i.imgflip.com/2n0nbi.jpg", 
    ],
);

ApiService.addProduct(prod);
prod.category = "groceries";
const productTax =  calculateTax(prod);
console.log(`The total tax for ${prod.title}: $`, productTax.toPrecision(3));