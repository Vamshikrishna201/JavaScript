import { products } from "./data.js";


const totalPrice = products.reduce((accumulator, currentValue) => {
    return accumulator+currentValue.price;
},0);

console.log(totalPrice);



