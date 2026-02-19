import  { Product } from '../models/Product.js';
import {validateResponseOK, validateMinStock} from '../utils/errorHandler.js';

export async function fetchAllProducts(){
    try{
        const response = await fetch("https://dummyjson.com/products");
        validateResponseOK(response);
        const jsonData = await response.json();
        console.log(jsonData);
    } catch(err) {
        console.error("Fetch error: ", err);
    }
}

export async function fetchProduct(id: number) {
    try {
        const resp =  await fetch(`https://dummyjson.com/products/${id}`);
        validateResponseOK(resp);
        const jsonData = await resp.json();
        validateMinStock(jsonData["title"], jsonData["stock"]);
        console.log(jsonData);
    } catch(err){
        console.error("Fetch error: ", err);
    }
}

export async function searchForProducts(val: string) {
  try {
        const resp =  await fetch(`https://dummyjson.com/products/search?q=${val}`);
        validateResponseOK(resp);
        const jsonData = await resp.json();
        console.log(jsonData);
    } catch(err){
        console.error("Fetch error: ", err);
    }
}

export async function sortProductsByFieldAndOrder(fieldName: string, isAsc: boolean) {
    try {
        const order = isAsc ? 'asc' : 'desc';  
        const resp =  await fetch(`https://dummyjson.com/products?sortBy=${fieldName}&order=${order}`);
        validateResponseOK(resp);
        const jsonData = await resp.json();
        console.log(jsonData);
    } catch(err){
        console.error("Fetch error: ", err);
    }
}


export async function fetchEachProductsCategories() {
    try {
        const resp =  await fetch(`https://dummyjson.com/products/categories`);
        validateResponseOK(resp);
        const jsonData = await resp.json();
        console.log(jsonData);
    } catch(err){
        console.error("Fetch error: ", err);
    }
}


export async function fetchProductCategoryList() {
    try {
        const resp =  await fetch(`https://dummyjson.com/products/category-list`);
        validateResponseOK(resp);
        const jsonData = await resp.json();
        console.log(jsonData);
    } catch(err){
        console.error("Fetch error: ", err);
    }
}

export async function fetchProductByCategory(name: string) {
    try {
        const resp =  await fetch(`https://dummyjson.com/products/category/${name}`);
       validateResponseOK(resp);
        const jsonData = await resp.json();
        console.log(jsonData);
    } catch(err){
        console.error("Fetch error: ", err);
    }
}

export async function addProduct(prod: Product){
    try {
        const resp = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: prod.id,  title: prod.title, description: prod.description,
                category: prod.category, price: prod.price, discountPercentage: prod.discountPercentage,
                rating: prod.rating, stock: prod.stock, tags: prod.tags,
                brand: prod.brand, sku: prod.sku, weight: prod.weight,
                dimensions: prod.dimensions,  warrantyInfo: prod.warrantyInfo, shippingInfo: prod.shippingInfo,
                availabilityStatus: prod.availabilityStatus, reviews: prod.reviews,  returnPolicy: prod.returnPolicy,
                minOrderQuantity:  prod.minOrderQuantity, meta: prod._meta, thumbnail: prod.thumbnail,
                images: prod.images,
            })
        });
        
        validateResponseOK(resp);
        const jsonData = await resp.json();
        console.log(jsonData);
    } catch(err){
        console.error("Fetch error: ", err);
    }
}