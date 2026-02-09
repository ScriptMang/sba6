import { fetchAllProducts, fetchProduct, searchForProducts, fetchEachProductsCategories, fetchProductCategoryList } from './services/apiService.js'

fetchAllProducts();
fetchProduct(1);
searchForProducts('phone');
fetchEachProductsCategories();
fetchProductCategoryList();