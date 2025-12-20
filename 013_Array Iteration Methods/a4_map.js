import { products } from "./data.js";

// const arr = [8, 6, 5, 4, 3];

// const square = arr.map((num) =>num*2);
// console.log(square); //[ 16, 12, 10, 8, 6 ]


//method chaining with map
let ans = products.map((product) => ({
    name:product.name, price:product.price
}))
.filter((product)=> product.price > 3000)
.sort((a,b)=> ( b.price -a.price ));
console.log(ans);
