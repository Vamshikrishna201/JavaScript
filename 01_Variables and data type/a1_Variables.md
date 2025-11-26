## 1. Variables in JavaScript

---

A variable is a container used to store data.

In JavaScript, we declare variables using, `var`, `let` and `const`.

---

### How to Declare Variables

**2. `var`, `let` aur `const` kya hai ?**

JavaScript mein variable declare karne ke liya 3 tarike hote hai:

- `var` &rarr; Purana tarika (ES5 se pehle use hota tha)

- `let` &rarr; Naya tarika (ES6 se baad)

- `const` &rarr; Naya tarika (ES6 se baad), constant value ke liye.

---

### 3. Declaration vs Initialization

- Declaration &rarr; Variable ka naam batana

- Initialization &rarr; Variable ko value dena

```js
var a;        //Declaration
a = 10;       //Initialization

let b = 19;   //Declaration + Initialization
const c = 24; //Declaration + Initialization (const main value deni zaruri hai)
```

---

## Rules for Naming Variables

**1. Invalid Examples:**

```js
let 1name = "Vamshi";     // Cannot start with numbers
let user-name = "Krishna";// Hyphen not allowed
let let = 5; // Cannot use reserved keywords
```

**2. Valid Examples:**

```js
let userName = "Vamshi";
let _age = 24;
let $grade = A;
```

---

# `var`:

### Using `var`:

`var` is **function-scoped** and **can be redeclared** or **reassigned**.

**Key Points**

- **Redeclaration allowed**

- **Reassignment allowed**

- **Function-scoped, not block-scoped**

- Can cause unexpected results inside loops or conditions.

```js
//Using var
var name "Vamshi";
console.log(name); // Vamshi

var name "Krishna"; //Redeclaration allowed
console.log(name); // Krishna

name = "Ram"; // Reassignment allowed
console.log(name); // Ram
```

---

# `let` 

`let` is **block-scoped** and **cannot be redeclared** **in the same block**, but **it can be reassigned**.

- **Redeclaration Not allowed** in the same block.

- **Reassignment allowed**.

- **Bloack-scoped**, safer then var.



```js
//Using let
let age 24;
console.log(age); // 24

let age = 30; // Error: Cannot redeclare block-scoped, variable 'age'

let age 25;       //Redeclaration allowed
console.log(age); // 25

{
    let age = 90;     // Block-scoped variable
    console.log(age); // 90 (inside block)
}

console.log(age); // 25 (Outside block)
```

---

# `const`

`const` is **block-scoped**, **cannot be redeclared**, and **cannot be reassigned**.

### Key Points :

- Redeclaration Not allowed.

- Reassignment Not allowed.

- Bloack-scoped.

- Best for constants that **never change.**

```js
//Using const
const pi = 3.14;
console.log(pt); // 3.14

pi = 3.1416; //Error: Assignment to constant variable

const pi = 3.1416; // Error: cannot redeclare lock-scoped variable 'pi'

{
    const pi=22/7;
    console.log(pi); // 3.142857142857143 (inside block)
}

console.log(pi); // 3.14 (outside block)
```

---

# Function Scope vs Block Scope

**(A) Function Scope**

- Agar variable **function ke andar** var declare kiya hai, to wo sirf usi function ke andar accessible hota hai.

- Bahar use access nahi kar sekte.

*Example - 1*
```js
function test() {
    var x = 10;
    console.log(x); // 10
}
test(); // function call

console.log(x); //Error: x is not defined.
```

*Example - 2*

```js
function demo(){
    let a = 10;
    const b = 20;
    console.log("Inside function: ", a,b);// Works
}
demo();

console.log(a); // Error: a is not defined
console.log(b); // Error: b is not defined
```

---

**(B) Block Scope**

- **Block =** `{ ... }` &rarr; ye koi bhi curly braces wale block ho sakte hai (`if`, `for`, `while`, `switch`, etc.)

&rarr; `let` aur `const` **block scoped** hote hain &rarr; iska matlab jo variables { } ke andar declare hote hai, wo bahar access nahi ho sakte.

- Lekin `var` **socped nahi hai**, wo functionscoped hota hai.

*Example*

```js
{
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a); // 10 (var bahr accessible hai)
console.log(b); // Error: b is not defined
console.log(c); // Error: c is not defined
```

---

## 📝 JavaScript Variable Keywords Comparison

| **Keyword** | **Scope Type** | **Scope** | **Inside Function** | **Inside Block** `{ }` | **Redeclaration** | **Reassignment** |
| :---    | :---       | :---   | :---            | :---             | :---         | :---         |
| `var` | Function-scoped | The entire function, or globally if outside a function. | Accessible | Accessible | Yes | Yes |
| `let` | Block-scoped | The nearest enclosing block ({ }) | Accessible | Accessible | No | Yes |
| `const`| Block-scoped | The nearest enclosing block ({ }) | Accessible | Accessible | No | No |

---

## Data Type in javaScript 

- JavaScipt has two of data:
    - Primitive
    - Non-Premitive

| Category | Data Type | Example |
| :--- | :--- | :--- |
| **Primitive** | **Number** | `let num = 10;` |
| | **String** | `let name = "Vamshi";` |
| | **Boolean** | `let isOn = false;` |
| | **Undefined** | `let x;` |
| | **Null** | `let y = null;` |
| | **Symbol** | `let id = Symbol("key");` |
| | **BigInt** | `let big = 123456789n;` |
| **Non-Primitive** | **Object** | `let user = {name: "John"};` |
| | **Array** | `let arr = [1, 2, 3];` |
| | **Function** | `function hello() {}` |

---

```js
// Example: Primitive Type

let age = 24;                    // Number
let isStudent = true;            // Boolean
let name = "vamshi"              // String
let emptyValue = null;           // Null
let uniqueId = symbol("id");     // Symbol
let bigNumber = 89348903275380n; // BigInt
let score;                       // Undefined
```

---




