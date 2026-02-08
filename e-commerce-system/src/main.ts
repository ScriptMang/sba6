fetch('https://dummyjson.com/products')
.then(resp => resp.json())
.then(console.log);
