# Function in JavaScript

---

A **Function** is a block of reusable code designed to perform a particular task. It allows you to define code once and use it multiple times, promoting better organization and preventing repetition (**DRY** - Don't Repeat Yourself).

---

**1. Defining a Function**
There are three main ways to define a function in JavaScript:

**A. Function Decalration (Classic way)**
This is the standard way to difine a named function.
```js
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Function is 'hoisted' (can be called before it is defined)
```

---

**B. Function Expression**

Here, you create a function and assign it to a variable.

```js
const calculateArea = function(width, height) {
    return width * height;
};

// Function is NOT hoisted (must be defined before being called)
```

---

**2. Calling a Function**

To run the code inside a function, you must call (or invoke) it using the function name followed by parentheses `()`.

```js
// Calling the function declaration
let message = greet("Vamshi");
console.log(message); // Output: Hello, Vamshi! Welcome to JavaScript.

// Calling the function expression
let area = calculateArea(10, 5);
console.log(area);    // Output: 50
```

---

**3. Function Parameters and Arguments**

- **Parameters:** The names listed in the function definition (e.g., `name`, `width`, `height`).

- **Arguments:** The real values passed to the function when it is called (e.g., `"Vamshi"`, `10`, `5`).

**Default Parameters**

You can set default values for parameters, which are used if no argument is passed during the call.

```js
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5));    // Output: 5 (b uses default value 1)
```

---

**4. Return Statement**

The `return` statement stops the execution of a function and returns a value back to the caller.

- If a function does not have an explicit `return` statement, it implicitly returns `undefined`.

```js
function checkAge(age) {
    if (age >= 18) {
        return "Eligible to vote."; // Value is returned
    }
    // If the age is less than 18, the function runs to the end and returns undefined
}

let result = checkAge(20);
console.log(result); // Output: Eligible to vote.
```

---

## 5. ➡️ Arrow Functions (ES6 Feature)

Arrow functions are a concise and modern way to write function expressions. They simplify the syntax, making the code cleaner.

**A. Basic Syntax**
The `function` keyword is replaced by the arrow `=>`.

**Before (Function Expression)**

```js
const addOld = function(x, y) {
    return x + y;
};
```

**After (Arrow Function)**

```js
const add = (x, y) => {
    return x + y;
};
```

**B. Implicit Return (Concise Body)**

If the function body has only one single statement (which is usually the `return` statement), you can omit the curly braces `{}` and the `return` keyword.

```js
// Implicit Return
const subtract = (x, y) => x - y;

console.log(subtract(10, 3)); // Output: 7
```

**C. Single Parameter Omission**

If the function takes exactly one parameter, you can omit the parentheses `()` around the parameter.

```js
// Single parameter, no parentheses needed
const square = num => num * num;

console.log(square(4)); // Output: 16
```

---

**🛑 Key Difference: `this` Keyword**

Arrow functions do **NOT** have their own `this` context. They inherit the `this` value from the scope they are defined in (lexical scope).

This is the main reason they are used in modern JS, particularly inside objects and callback functions, to avoid confusing `this` behavior.

---

**6. Higher-Order Functions**

A function that either:

1. Takes one or more functions as arguments, or

2. Returns a function.

This concept is heavily used with Array methods like `map`, `filter`, and `forEach`, where you pass a function (callback) as an argument.

**Example: Using a Callback Function**

```js
const numbers = [1, 2, 3, 4];

// The arrow function (num => num * 2) is the callback function
const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
```

---