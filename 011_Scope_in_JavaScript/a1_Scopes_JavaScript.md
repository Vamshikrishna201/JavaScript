# JavaScript Foundations: Scope, var, let, const

---

### 1. Scope in JavaScript 🧭

**Scope** determines the accessibility (visibility) of variables and functions in certain parts of your code. It answers the question: "Where can I use this variable?"

JavaScript primarily has two types of scope:

**A. Global Scope**

- Variables declared outside any function or block ({}) are Global.

- They are accessible from anywhere in your code (from all functions and files).

**B. Local Scope**

Local scope is created whenever you declare a function or a block. Variables inside a local scope are **only accessible** within that function or block.

**i. Function Scope (Applies to `var`)**

- Variables declared inside a function are only visible inside that function.

**ii. Block Scope (Applies to `let` and `const`)**

- Variables declared inside a pair of curly braces, such as within an `if` statement, `for` loop, or plain block, are only visible inside that specific block.

```js
let globalVar = "I am everywhere"; // Global Scope

function myFunc() {
    var funcVar = "I am only in this function"; // Function Scope (Local)
    
    if (true) {
        let blockVar = "I am only in this block"; // Block Scope (Local)
        console.log(globalVar); // ✅ Works
        console.log(funcVar);   // ✅ Works
        console.log(blockVar);  // ✅ Works
    }

    // console.log(blockVar); // ❌ Error: blockVar is not defined here
}

// console.log(funcVar); // ❌ Error: funcVar is not defined here
```

---

### 2. Variable Declaration Keywords: `var`, `let`, `const`

The way you declare a variable determines its scope and how it can be changed.

| Feature |	var (Old ES5) |	let (ES6+) | const (ES6+) |
| ------- | ------------  | ---------  | ------------ |
| **Scope**	  |**Function-Scoped**|**Block-Scoped**| **Block-Scoped** |
| Re-declaration |Allowed (Can be declared multiple times)|Not Allowed (Throws error)| Not Allowed (Throws error)|
| Re-assignment| Allowed (Value can be changed)| Allowed (Value can be changed)|Not Allowed (Must remain constant)|
|Hoisting|Hoisted and initialized to `undefined`|Hoisted but not initialized (TDZ)| Hoisted but not initialized (TDZ)|

---

**A. `var` (Legacy)**

- `var` is **Function-Scoped**. This causes issues, especially with loops, where the variable can "leak" outside the loop block.

```js
if (true) {
    var x = 10;
}
console.log(x); // Output: 10 (The variable 'x' leaks outside the if block!)
```

---

**B. `let` (Modern, Reassignable)**

- `let` is Block-Scoped. This prevents variable leakage and is safer than `var`.

- The value **can be changed later**.

```js
if (true) {
    let y = 20;
    // console.log(y); // Output: 20
}
// console.log(y); // ❌ Error: y is not defined (Block Scope prevents leakage)

let count = 1;
count = 2; // ✅ Re-assignment is allowed
```

---

**C. `const` (Modern, Constant Reference)**

- `const` is **Block-Scoped.**

- The value **cannot be re-assigned** after initialization.

```js
const PI = 3.14;

// PI = 3.14159; // ❌ Error: Assignment to constant variable

// Note: For objects and arrays, 'const' means the variable reference (memory address)
// cannot change, but the contents *inside* the object/array *can* be modified.
const config = { theme: 'dark' };
config.theme = 'light'; // ✅ This IS allowed (modifying the content)
```

✅ Bridging to Closures
Now that you know:

1. **Scope** defines where a variable lives.

2. `var`, `let`, and `const` create these different scopes.

You are fully prepared to understand Closures! A closure is simply the mechanism that allows a function created in one scope (the parent) to continue accessing variables from that parent scope, **even after the parent function has finished running and exited its scope.** This mechanism essentially "closes over" the necessary variables.

---