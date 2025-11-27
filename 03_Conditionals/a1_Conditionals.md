# Conditionals in JavaScript

---

**Conditionals ka matlab:** Decision making.
Agar condition true hai to ek block chalega, warna doosra.

---

## 🧩 Conditional Statements Use Cases

| Conditional | Use Case | Example in Real Life |
| :--- | :--- | :--- |
| **if** | Single condition check | Check if **user is logged in** to display personalized content. |
| **if-else** | Two possible outcomes (Do/Don't do) | Determine **Voting Eligibility** (Adult/Minor) based on age. |
| **if-else if-else** | Multiple condition checks | **Student Grading System** (A, B, C, D, or Fail) based on scores. |
| **switch** | Multiple fixed choices | **ATM Menu Options** (Withdraw, Deposit, Check Balance), or mapping **Day of the Week** to a name. |
| **Ternary (? :)** | Short decision (inline condition) | Check if an **Online Shopping Discount** should be applied based on cart total. |

---

### `if` Statement

```js
let age = 24;

if(age >= 18){
    console.log("You are eligible to vote");
}
```

---

### `if-else` Statement (Adult / Minor Check)

```js
let age = 14;

if(age >= 18){
    console.log("You are an Adult");
} else {
    console.log("You are a Minor");
}
```

---

### `if-else` `if-else` Statement (Grading System)

```js
let marks = 85;

if(marks >= 90){
    console.log("Grage A");
} else if(marks >= 75) {
    console.log("Grage B");
} 
else if(marks >= 50) {
    console.log("Grage C");
} else {
    console.log("Fail");
}
```

---

### `switch` Statement (Day of Week)

```js
let day = 3;

switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid Day");
}
```

---

### Literals in JavaScript

Literals wo **fixed values** hoti hain jo **directly code** me likhi jaati hain aur **variables** me assign ki ja sakti hain.

Matlab: ye values program ke **runtime me change nahi hoti** (they are constant).

### 💡 Example Literals

* **Number Literals:** `10`, `3.14`, `-50`
* **String Literals:** `"Hello World"`, `'A'`, `"2025"`
* **Boolean Literals:** `true`, `false`
* **Null Literal:** `null`
* **Object Literal:** `{ name: "Riya" }`
* **Array Literal:** `[1, 2, 3]`

```js
// Numeric literal
let num = 10;

// String literal
let name = "Vamshi"

// Boolean literal
let isStudent = true;

// Null literal
let data = null;
```

---