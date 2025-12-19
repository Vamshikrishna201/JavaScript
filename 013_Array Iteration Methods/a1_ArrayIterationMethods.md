# Array Iteration Methods (`forEach`, `map`, `filter`, `reduce`)

---

These methods are the backbone of modern JavaScript. They allow you to process arrays without using traditional `for` loops, making your code cleaner and more readable. They all use **Callback Functions** (which you now know!).

---

### 1. `forEach()` (Iterate)

The `forEach()` method executes a **provided callback function once for each array element**. It is used purely for iteration and side effects (like printing to the console).

- **Returns:** `undefined` (It does not create a new array).

- **Purpose:** To loop over elements and perform an action.

```js
const colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
  // The callback gets the element, index, and the whole array
  console.log(`Index ${index}: The color is ${color}`);
});
/*
Output:
Index 0: The color is red
Index 1: The color is green
Index 2: The color is blue
*/
```

---

### 2. `map()` (Transform)

The `map()` method creates a **new array** populated with the results of calling a provided function on every element in the calling array.

- **Returns:** A **new array** of the same length.

- **Purpose:** To **transform** every element into a new value.

```js
const numbers = [1, 4, 9, 16];

// The callback function transforms the number into its square root
const roots = numbers.map(Math.sqrt);

console.log(roots); // Output: [1, 2, 3, 4]
console.log(numbers); // Output: [1, 4, 9, 16] (Original array is unchanged)
```

---

### 3. `filter()` (Select)

The `filter()` method creates a **new array** with all elements that pass the test implemented by the provided function.

- **Returns:** A **new array** containing only the elements that returned `true`.

- **Purpose:** To **select** a subset of elements based on a condition.

```js
const ages = [12, 18, 25, 16, 30];

// The callback returns true only if the age is 18 or greater
const adults = ages.filter((age) => age >= 18);

console.log(adults); // Output: [18, 25, 30]
console.log(ages); // Original array is unchanged
```

---

### 4. `reduce()` (Accumulate)

The `reduce()` method executes a **reducer callback function** on each element of the array, resulting in a **single** output value.

- **Returns:** A **single value** (could be a number, string, array, or object).

- **Purpose:** To **accumulate** or combine all elements into one result (e.g., sum, product, flattening an array).

The `reduce()` callback takes two main arguments:

1. `accumulator`: The value returned from the previous iteration (or the initial value).

2. `currentValue`: The current element being processed.

```js
const items = [5, 10, 2];

// Initial value of accumulator (sum) is 0
const totalSum = items.reduce((sum, currentValue) => {
  return sum + currentValue;
}, 0);

console.log(totalSum); // Output: 17
```

**Reduce Step-by-Step**

| Iteration   | `sum` (Accumulator) | `currentValue` | Return Value (New sum) |
| ----------- | ------------------- | -------------- | ---------------------- |
| **Initial** | 0                   | 5              | 5                      |
| 2           | 5                   | 10             | 15                     |
| 3           | 15                  | 2              | 17                     |
| **Final**   |                     |                | 17                     |

---

# 📝 Practice Tasks: Array Iteration Methods

### 1. `forEach()` Practice: Logging Data 🪵

Remember: `forEach` is used for **iteration and side effects** (like printing, updating a UI, or pushing to an external array). It doesn't return a new array.

**Task: List Management**

You have a list of tasks. Use `forEach()` to print a status message for each task.

```js
const todoList = [
    { id: 1, task: "Buy Groceries", completed: false },
    { id: 2, task: "Finish JS Notes", completed: true },
    { id: 3, task: "Call Dentist", completed: false },
    { id: 4, task: "Go for a walk", completed: true }
];

// Your Code Here (Use forEach to iterate over todoList)
// If 'completed' is true, log: "TASK [ID]: [TASK] is DONE."
// If 'completed' is false, log: "TASK [ID]: [TASK] is pending..."

todoList.forEach(/* Your callback function here */);
```

---

### 2. `filter()` Practice: Selecting Data 🔍

Remember: `filter` is used to **select a subset** of elements that meet a specific condition. It always returns a **new array.**

**Task: Filtering Products**

You are managing product inventory. Filter out all products that are either out of stock (`inventory: 0`) or too cheap (`price < 50`).

```js
const products = [
    { name: "Mug", price: 15, inventory: 50 },
    { name: "T-Shirt", price: 85, inventory: 10 },
    { name: "Sticker", price: 5, inventory: 100 },
    { name: "Hoodie", price: 120, inventory: 0 },
    { name: "Notebook", price: 60, inventory: 25 }
];

// Your Code Here
// Create a new array called 'inStockAffordable'
// Condition: inventory MUST be greater than 0 AND price MUST be >= 50.

const inStockAffordable = products.filter(/* Your callback function here */);

console.log(inStockAffordable);
// Expected Output (2 Products)
/*
[
  { name: 'T-Shirt', price: 85, inventory: 10 },
  { name: 'Notebook', price: 60, inventory: 25 }
]
*/
```

---

### 3. `map()` Practice: Transforming Data 🔄

Remember: `map` is used to **transform** every element in an array into a new value. It always returns a **new array** of the same length.

**Task: Formatting User Names**

You have an array of user names. Use `map()` to create a new array where all names are capitalized and include a status prefix.

```js
const users = ["vamshi", "priya", "rahul", "neha"];

// Your Code Here
// Create a new array called 'formattedUsers'.
// Transformation: Capitalize the first letter and prefix it with 'User: '.
// Example: "vamshi" -> "User: Vamshi"

const formattedUsers = users.map(/* Your callback function here */);

console.log(formattedUsers);
// Expected Output: ["User: Vamshi", "User: Priya", "User: Rahul", "User: Neha"]
```

---

### 4. `reduce()` Practice: Accumulating Data ➕

Remember: `reduce` is used to **accumulate** all elements into a s**ingle value** (like a sum, total, or a new object).

**Task: Calculating Total Inventory Value**

You have the same products array. Use `reduce()` to calculate the total monetary value of all items currently in stock.

$$\text{Total Value} = \sum (\text{price} \times \text{inventory})$$


```js
const products = [
    { name: "Mug", price: 15, inventory: 50 },
    { name: "T-Shirt", price: 85, inventory: 10 },
    { name: "Sticker", price: 5, inventory: 100 },
    { name: "Hoodie", price: 120, inventory: 0 },
    { name: "Notebook", price: 60, inventory: 25 }
];

// Your Code Here
// Accumulate the running total value (sum of price * inventory)
// HINT: Don't forget the initial value (0) for the accumulator!

const totalInventoryValue = products.reduce(/* Your callback function here */, 0);

console.log(totalInventoryValue);
// Expected Output Calculation: (15*50) + (85*10) + (5*100) + (120*0) + (60*25) = 750 + 850 + 500 + 0 + 1500 = 3600
// Expected Output: 3600
```

---
---
