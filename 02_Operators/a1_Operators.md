# Operators in JavaScript

---

## 1. ➕ Arithmetic Operators

| Operator | Meaning | Example (Code) | Output |
| :--- | :--- | :--- | :--- |
| **+** | Addition | `5 + 3` | `8` |
| **-** | Subtraction | `5 - 3` | `2` |
| **\*** | Multiplication | `5 * 3` | `15` |
| **/** | Division | `10 / 2` | `5` |
| **%** | Modulus (Remainder) | `10 % 3` | `1` |
| **\*\*** | Exponentiation | `2 ** 3` | `8` |
| **++** | Increment (Post-fix) | `let a = 5; a++;` | `a` becomes `6` |
| **--** | Decrement (Post-fix) | `let a = 5; a--;` | `a` becomes `4` |

*example*

```js
let x = 10, y = 3;
console.log("Addition:", x+ y);
console.log("Subtraction:", x - y);
console.log("Multiplication:",x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);
console.log("Exponentiation:", x ** y);
```

---

## 2. ➡️ Assignment Operators

| Operator | Meaning | Example (Code) | Result (Equivalent) |
| :--- | :--- | :--- | :--- |
| **=** | Assign value | `x = 10` | `10` |
| **+=** | Add and assign | `x += 5` | `x = x + 5` |
| **-=** | Subtract and assign | `x -= 2` | `x = x - 2` |
| **\***= | Multiply and assign | `x *= 3` | `x = x * 3` |
| **/**= | Divide and assign | `x /= 2` | `x = x / 2` |
| **%=** | Modulus and assign | `x %= 3` | `x = x % 3` |

*example*

```js
let num = 10;
num += 5; // 15
num *= 2; // 30
console.log("Final Value:", num);
```

---

## 3. ⚖️ Comparison Operators

| Operator | Meaning | Example (Code) | Result |
| :--- | :--- | :--- | :--- |
| **==** | **Equal** (value only) | `5 == "5"` | `true` |
| **===** | **Strict Equal** (value + type) | `5 === "5"` | `false` |
| **!=** | **Not Equal** (value only) | `5 != "5"` | `false` |
| **!==** | **Strict Not Equal** (value + type) | `5 !== "5"` | `true` |
| **>** | Greater than | `8 > 5` | `true` |
| **<** | Less than | `3 < 5` | `true` |
| **>=** | Greater than or equal | `5 >= 5` | `true` |
| **<=** | Less than or equal | `4 <= 5` | `true` |

*example*

```js
let a = 5, b = "5";
console.log(a == b);  // true
console.log(a === b); // false
console.log(a !== b); // true
```
---

## 5. ⚖️ Logical Operators

| Operator | Meaning | Example (Code) | Result |
| :--- | :--- | :--- | :--- |
| **&&** | Logical **AND** | `(5 > 3 && 10 > 5)` | `true` |
| **\|\|** | Logical **OR** | `(5 > 3 \|\| 10 > 5)` | `true` |
| **!** | Logical **NOT** | `!(5 > 3)` | `false` |

*example*

```js
let age = 20;
let citizen = true;
if(age >= 18 && citizen) {
console.log("Eligible to vote");
}
```

---

## 5. ❓ Ternary Operator

| Operator | Meaning | Example (Code) | Output |
| :--- | :--- | :--- | :--- |
| **? :** | Short form of if...else (Ternary Operator) | `let result = (age >= 18) ? "Adult" : "Minor";` | `"Adult"` (assuming age is $\geq 18$) |

*example*

```js
let age = 15;
let type = (age >= 18) ? "Adult" : "Minor";
console.log(type);
```

---

## 6.  💻 Bitwise Operators

Ye Operators numbers ke binary (0 aur 1) pe kaam karte hai.

*Example:* 5 = 0101 (binary), 1 = 0001 (binary) 

---

| Operator | Kaam (Easy Meaning) | Example (Code) | Output |
| :--- | :--- | :--- | :--- |
| **&** (AND) | Dono bit 1 ho toh 1 | `5 & 1` | `1` |
| **\|** (OR) | Agar ek bhi 1 ho toh 1 | `5 \| 1` | `5` |
| **^** (XOR) | Alag-alag bit ho toh 1 | `5 ^ 1` | `4` |
| **~** (NOT) | Bits ulta kar do (1→0, 0→1) | `~5` | `-6` |
| **<<** (Left Shift) | Bits left bhejo (×2 hota hai) | `5 << 1` | `10` |
| **>>** (Right Shift) | Bits right bhejo (÷2 hota hai) | `5 >> 1` | `2` |


*example*

```js
let a = 5; // (0101)
let b = 1; // (0001)
console.log("a & b =", a & b);   // 1
console.log("a | b =");          // 5
console.log("a ^ b =");          // 4
console.log("~a =", ~a);         // -6
console.log("a << 1 =", a << 1); // 10
console.log("a >> 1 =", a >> 1); // 2
```


### 🔢 Bitwise Shift Operators: Tricks and Formulas

| Operator | Trick Formula | Meaning |
| :--- | :--- | :--- |
| **x << n** (Left Shift) | $x \times (2^n)$ | Number ko **multiply** karo by $2^n$ |
| **x >> n** (Signed Right Shift) | $x / (2^n)$ (floor division) | Number ko **divide** karo by $2^n$ (integer division) |

---

### 🔢 Bitwise Shift Operators: Examples

| Expression | Calculation (Trick) | Output |
| :--- | :--- | :--- |
| **5 << 1** | $5 \times 2 = 10$ | `10` |
| **5 << 2** | $5 \times 2^2 = 5 \times 4$ | `20` |
| **5 << 3** | $5 \times 2^3 = 5 \times 8$ | `40` |
| **16 >> 1** | $16 / 2 = 8$ | `8` |
| **16 >> 2** | $16 / 4 = 4$ | `4` |
| **18 >> 1** | $18 / 2 = 9$ | `9` |
| **18 >> 2** | $18 / 4 = 4$ (floor) | `4` |

```js
let x = 5;
console.log("5 << 1 =", x << 1); // 10
console.log("5 << 2 =", x << 2); // 20
console.log("5 << 3 =", x << 3); // 40

let y = 16;
console.log("16 >> 1 =", y >> 1);  // 8
console.log("16 >> 2 =", y >> 2);  // 4
console.log("18 >> 1 =", 18 >> 1); // 9
console.log("18 >> 2 =" , 18 >> 2);// 4
```

---
