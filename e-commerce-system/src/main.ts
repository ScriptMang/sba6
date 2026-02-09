import { fetchAllProducts, fetchProduct, searchForProducts, fetchEachProductsCategories, fetchProductCategoryList, fetchProductByCategory } from './services/apiService.js'

fetchAllProducts();
fetchProduct(1);
searchForProducts('phone');
fetchEachProductsCategories();
fetchProductCategoryList();
fetchProductByCategory('smartphones');