// foreach method in JavaScript provides a simple,
// readable way to loop through elements in an 
// array or other iterable objects. 

// const arr = [10, 20, 30, "Vmahsi", 90];
// arr.forEach(( number, index, arr )=>{
//     console.log(number, index, arr);
// })



// let arr1 = [10,20,30,40,50,60,70,80];
// let sum = 0;
// arr1.forEach((num)=>{
//     sum+=num;
// })
// console.log(sum); //output: 360



let arr2 = [10,20,30,40,80]; // filter always return a new array
const newArr = arr2.filter(
    // true: select, false: not selected
    (num)=> num > 25
);

console.log(newArr);

