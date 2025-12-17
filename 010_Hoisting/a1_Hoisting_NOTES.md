# Hoisting

---

## 🏗️ How Hoisting Works

When the JavaScript engine processes your code, it goes through two main phases:

1. **Creation/Compilation Phase:** The engine scans the code and allocates memory for all declared variables and functions.

- **Function Declarations** are fully hoisted (the function name and its entire definition are moved to the top).

- **Variable Declarations** (`var`, `let`, `const`) are partially hoisted (only the variable name is moved to the top, but the assignment/initialization remains in place).

2. **Execution Phase:** The code runs line by line.

---

### 1. Function Hoisting (Fully Hoisted)

Function declarations are the most straightforward example of hoisting. You can call the function before the declaration line appears in the file.

💡 Example: Function Declaration
```js
// Function Call (Works because 'myFunc' declaration is hoisted)
console.log(greet()); // Output: Hello from the top!

// Function Declaration
function greet() {
    return "Hello from the top!";
}
```

**What the compiler sees (Conceptual view):**

```js
function greet() {
    return "Hello from the top!";
}
console.log(greet());
```

---

### 2. Variable Hoisting (`var`)

Variables declared with `var` are hoisted, but only the **declaration** is moved, not the **initialization** (the assignment of the value).

If you try to access a `var` variable before its assignment, its value will be `undefined`.

💡 Example: `var`
```js
console.log(myVar); // Output: undefined (The declaration is hoisted, but not the value)

var myVar = 10;

console.log(myVar); // Output: 10 (Now the assignment has executed)
```

**What the compiler sees (Conceptual view):**
```js
var myVar; // Declaration is hoisted and initialized to undefined
console.log(myVar);

myVar = 10; // Assignment stays put
console.log(myVar);
```

---

### 3. Hoisting with `let` and `const` (The "Temporal Dead Zone")

Variables declared with `let` and `const` are also hoisted, but they are handled differently than `var`.

- They are hoisted, but they are not initialized.

- Trying to access them before the declaration line results in a ReferenceError.

The time between the start of the scope and the declaration line is known as the **Temporal Dead Zone (TDZ)**.

```js
// console.log(myLet); // <-- Uncaught ReferenceError: Cannot access 'myLet' before initialization (TDZ)

let myLet = 20;

console.log(myLet); // Output: 20
```

Because of this behavior, it's generally best practice to **always declare variables** (`let` or `const`) **at the start of their scope** to keep code clear and avoid issues related to hoisting.

---