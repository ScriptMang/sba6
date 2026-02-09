import type { Product } from '../models/Product.js';

export async function fetchAllProducts(){
    try{
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log(jsonData);
    } catch(err) {
        console.error("Fetch error: ", err);
    }
}

export async function fetchProduct(id: number) {
    try {
        const resp =  await fetch(`https://dummyjson.com/products/${id}`);
        if (!resp.ok) {
            throw new Error("Network response was not ok");
        }
        const jsonData = await resp.json();
        console.log(jsonData);
    } catch(err){
        console.error("Fetch error: ", err);
    }
}

export async function searchForProducts(val: string) {
  try {
        const resp =  await fetch(`https://dummyjson.com/products/search?q=${val}`);
        if (!resp.ok) {
            throw new Error("Network response was not ok");
        }
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
        if (!resp.ok) {
            throw new Error("Network response was not ok");
        }
        const jsonData = await resp.json();
        console.log(jsonData);
    } catch(err){
        console.error("Fetch error: ", err);
    }
}


export async function fetchEachProductsCategories() {
    try {
        const resp =  await fetch(`https://dummyjson.com/products/categories`);
        if (!resp.ok) {
            throw new Error("Network response was not ok");
        }
        const jsonData = await resp.json();
        console.log(jsonData);
    } catch(err){
        console.error("Fetch error: ", err);
    }
}


export async function fetchProductCategoryList() {
    try {
        const resp =  await fetch(`https://dummyjson.com/products/category-list`);
        if (!resp.ok) {
            throw new Error("Network response was not ok");
        }
        const jsonData = await resp.json();
        console.log(jsonData);
    } catch(err){
        console.error("Fetch error: ", err);
    }
}

export async function fetchProductByCategory(name: string) {
    try {
        const resp =  await fetch(`https://dummyjson.com/products/category/${name}`);
        if (!resp.ok) {
            throw new Error("Network response was not ok");
        }
        const jsonData = await resp.json();
        console.log(jsonData);
    } catch(err){
        console.error("Fetch error: ", err);
    }
}