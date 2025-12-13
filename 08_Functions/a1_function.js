// function 

function greeting(){ // function Declaration
    console.log("Hello, Welcome to JavaScript.");
}
greeting(); // function call


// function with parameter
function greet(name){  
    console.log(`Hello, ${name}, welcome to javascript`);
}
greet("Vamshikrishna"); // argument pass 


// function with parameter
function addition(num1, num2){
    console.log(`Adition is: ${num1 + num2}`);
}
addition(3, 6);


function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5));// Output: 5 (b uses default value 1)


//Function Expression
let calculateArea = function(width, height){
    return width * height
}
// Function is NOT hoisted (must be defined before being called)
console.log(calculateArea(2, 4)); // 8


//Return Statement
// The return statement stops the execution of a 
// function and returns a value back to the caller.
function checkAge(age) {
    if (age >= 18) {
        return "Eligible to vote."; // Value is returned
    }
    // If the age is less than 18, the function runs to the end and returns undefined
}
let result = checkAge(20);
console.log(result); // Output: Eligible to vote.



// before function expression
const addOld = function (x, y){ 
    return x + y;
}
console.log(addOld(2,12)); // Output: 14


//Arrow Function
const add = (x, y) => {
    return x + y;
};
console.log(add(20,20)); // Output: 40

// Implicit Return
const multiplication = (x, y) =>  x * y;
console.log(multiplication(10, 3)); // Output: 30


const square = num => num * num;
console.log(square(4)); // Output: 16
