import { fetchAllProducts, fetchProduct, searchForProducts } from './services/apiService.js'

fetchAllProducts();
fetchProduct(1);
searchForProducts('phone');