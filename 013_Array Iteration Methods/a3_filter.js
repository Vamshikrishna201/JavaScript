import {products} from './data.js';

const priceFilter = 
products.filter((product) => product.price>2000).sort((a, b) => b.price -a.price); // sort compare 2 values for sorting

console.log(priceFilter);


