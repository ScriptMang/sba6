import * as ApiService from './services/apiService.js'

ApiService.fetchAllProducts();
ApiService.fetchProduct(1);
ApiService.searchForProducts('phone');
ApiService.fetchEachProductsCategories();
ApiService.fetchProductCategoryList();
ApiService.fetchProductByCategory('smartphones');