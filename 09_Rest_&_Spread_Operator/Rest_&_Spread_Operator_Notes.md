# Rest and Spread Operators (`...`)

---

The **Rest** and **Spread** operators use the same three dots (`...`), but their function depends on where they are used.

## 1.🌟 The Spread Operator (`...`)

The Spread Operator expands an iterable (like an array, string, or object) into its individual elements.

**A. Combining Arrays (Concatenation)**
The Spread Operator provides an easy, non-mutating way to combine arrays.

```js
const array1 = [1, 2];
const array2 = [3, 4];

// Spreads elements of array1 and array2 into a new array
const combined = [...array1, ...array2, 5]; 

console.log(combined); // Output: [1, 2, 3, 4, 5]
```

**B. Copying Arrays and Objects (Shallow Copy)**

This is the easiest way to create a **new** copy of an array or object, preventing accidental modification of the original data.

```js
const originalArray = [10, 20];

// Creates a new array with the same elements
const copiedArray = [...originalArray]; 

copiedArray.push(30);

console.log(originalArray); // Output: [10, 20] (Original is unchanged)
console.log(copiedArray);   // Output: [10, 20, 30]
```

**C. Spreading into Function Calls**

It allows you to pass array elements as separate arguments to a function.

```js
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];

// Spreads numbers array into three separate arguments: sum(1, 2, 3)
console.log(sum(...numbers)); // Output: 6
```

**D. Spreading into Objects (ES9+)**

It's used to quickly copy properties from one object to another.

```js
const defaults = { theme: 'light', font: 'Arial' };
const userSettings = { ...defaults, font: 'Times New Roman' }; // Override font

console.log(userSettings);
// Output: { theme: 'light', font: 'Times New Roman' }
```

---

## 2. 🎣 The Rest Operator (`...`)

The Rest Operator collects **multiple elements and condenses** them into a single **array**.

It is only used in function **parameter definitions** to handle an indefinite number of arguments.

**A. Collecting Function Arguments**

The rest parameter must be the last parameter in the function definition.

```js
function logArgs(first, second, ...remainingArgs) {
    console.log("First:", first);
    console.log("Second:", second);
    
    // remainingArgs is an Array containing all extra arguments
    console.log("Remaining:", remainingArgs); 
}

logArgs(10, 20, 30, 40, 50);
/*
Output:
First: 10
Second: 20
Remaining: [30, 40, 50] 
*/
```

**B. Destructuring Arrays and Objects**

The Rest operator can also be used in destructuring assignments to capture the remaining elements.

```js
// Array Destructuring
const [a, b, ...restOfArray] = [1, 2, 3, 4, 5];

console.log(a);             // Output: 1
console.log(restOfArray);   // Output: [3, 4, 5]

// Object Destructuring
const { theme, font, ...otherSettings } = { 
    theme: 'dark', 
    font: 'Verdana', 
    notifications: true, 
    autoSave: false 
};

console.log(theme);         // Output: dark
console.log(otherSettings); // Output: { notifications: true, autoSave: false }
``

---

These two uses of the three dots (`...`) are fundamental for writing modern, flexible, and non-mutating JavaScript code!

---