import { fetchAllProducts, fetchProduct, searchForProducts, fetchEachProductsCategories } from './services/apiService.js'

fetchAllProducts();
fetchProduct(1);
searchForProducts('phone');
fetchEachProductsCategories()