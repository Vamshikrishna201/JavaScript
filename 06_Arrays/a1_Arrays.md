# Array in JavaScript

---

- An **Array** in JavaScript is a single variable used to **store multiple values** (elements) in an **ordered list.**

- **Arrays** are **zero-indexed**, meaning the first element is at **index** `0`, the second at **index** `1`, and so on.

---

### 💡 Array Example Literal

```js
//      Index ->  0         1         2        3
const fruits = ["Apple", "Banana", "Cherry", "Date"];
```

---

## 1. Creating an Array

- There are two primary ways to create an array:

**A. Arrays Literal (Most Common)**

- Using square brakets `[]` and listing elements separated by commas.

```js
let colors = ["red", "green", "blue"];
let numbers = [10, 20, 30, 40];
```

**B. Using the `new Array()` Constructor**

- This method is less common.

```js
let names = new Array("Alice", "Bob", "Charlie");
```

---

## 2. Accessing Elements

- Elements are accessed using their index (position) inside square brackets `[]`.

```js
const animals = ["dog", "cat", "bird"];

console.log(animals[0]); // Output: dog (First element)
console.log(animals[2]); // Output: bird (Third element)
```

---

## 3. Array Property: `length`

- The `.length` property tells you how many elements are in the array.

```js
const students = ["Vamshi", "Arjun", "Rahul", "Krishna"];

console.log(students.length); // Output: 4
```

**💡 Accessing the Last Element**

You can use `.length - 1` to always access the last element, regardless of the array's size.

```js
let lastStudent = students[students.length - 1];

console.log(lastStudent); // Output: Krishna
```

---

## 4. Mutability: Modifying an Array

- Arrays are mutable (changeable). You can change, add, or remove elements even if the array is declared with `const`.

**A. Changing an Element**

```js
const numbers = [10, 20, 30, 40];
numbers[1] = 25; // Change the value at index 1

console.log(numbers); // Output: [10, 25, 30, 40]
```

**B. Adding an Element (using index)**

```js
const items = ["A", "B"];
items[2] = "C"; // Adds 'C' at index 2

console.log(items); // Output: ["A", "B", "C"]
```

---

## 📝 JavaScript Array Methods and Mutability

| Method | Kaam (Meaning) | Example (Code) | Output | Mutability |
| :--- | :--- | :--- | :--- | :--- |
| **push()** | End me naya element **add** karta hai | `arr.push('d')` | `['a', 'b', 'c', 'd']` | **Mutates** |
| **pop()** | End se ek element **remove** karta hai | `arr.pop()` | `['a', 'b']` | **Mutates** |
| **unshift()** | **Start** me naya element **add** karta hai | `arr.unshift('z')` | `['z', 'a', 'b', 'c']` | **Mutates** |
| **shift()** | **Start** se ek element **remove** karta hai | `arr.shift()` | `['b', 'c']` | **Mutates** |
| **indexOf()** | Element ka **index** batata hai | `arr.indexOf('b')` | `1` | Does Not Mutate |
| **includes()** | Check karta hai ki element array me **hai ya nahi** | `arr.includes('b')` | `true` | Does Not Mutate |
| **join()** | Array elements ko **string** me jodta hai (separator ke saath) | `arr.join(' - ')` | `"a - b - c"` | Does Not Mutate |
| **slice()** | Array ka ek part cut karke **naya array** banata hai | `arr.slice(1, 3)` | `['b', 'c']` | Does Not Mutate |
| **splice()** | Elements ko **add/remove** karne ke liye (original array ko badalta hai) | `arr.splice(1, 1, 'x')` | `['a', 'x', 'c']` | **Mutates** |

---

## Detailed Method Explanations

**1. `push()` and `pop()` (End of Array)**

- `push()`: Adds one or more elements to the end of an array.

- `pop()`: Removes the last element from an array and returns that element.

```js
let animals = ["dog", "cat"];

animals.push("rabbit"); // Add to end
// animals is now: ["dog", "cat", "rabbit"]

let removed = animals.pop(); // Remove from end
// removed is 'rabbit'
// animals is now: ["dog", "cat"]
```

---

**2. `unshift()` and `shift()` (Start of Array)**

- `unshift()`: Adds one or more elements to the beginning of an array.

- `shift()`: Removes the first element from an array and returns that element.

```js
let nums = [2, 3];

nums.unshift(1); // Add to start
// nums is now: [1, 2, 3]

let firstRemoved = nums.shift(); // Remove from start
// firstRemoved is 1
// nums is now: [2, 3]
```

---

**3. `indexOf()` and `includes()`**

- `indexOf()`: Returns the index of the first occurrence of an element, or `-1` if not found.

- `includes()`: Returns `true` if an element is found, otherwise `false`.

```js
const data = [10, 20, 30, 20];

console.log(data.indexOf(30));  // Output: 2
console.log(data.indexOf(50));  // Output: -1 (Not found)
console.log(data.includes(20)); // Output: true
```

---

**4. `slice(start, end)`**

- Creates a **new array** by extracting elements from the original array.

- It does **not** modify the original array.

```js
const items = ["A", "B", "C", "D", "E"];
const newItems = items.slice(1, 4); // index 1 se shuru, 4 se pehle khatam

console.log(newItems); // Output: ["B", "C", "D"]
console.log(items);    // Original is unchanged: ["A", "B", "C", "D", "E"]
```

---

**5. `splice(index, count, ...newItems)` (Advanced)**

- This is the most flexible (and complex) method.

- It **changes the original array** by adding, removing, or replacing elements.

| Argument | Kaam (Purpose) | Detailed Meaning |
| :--- | :--- | :--- |
| **index** | Woh index jahan se **changes shuru** karne hain. | The starting position for adding or removing elements. (Required) |
| **count** | Kitne elements **remove** karne hain (uss index se). | The number of elements to remove from the starting `index`. (Required, can be `0` to add without removing) |
| **...newItems** | Jo **naye elements add** karne hain (optional). | The elements to be added to the array at the starting `index`. (Optional) |


### 💡 `splice()` Example:

* **Removal:** `arr.splice(1, 2);` $\rightarrow$ Index 1 se shuru karke 2 elements remove karega.
* **Insertion:** `arr.splice(2, 0, 'new');` $\rightarrow$ Index 2 par 0 elements remove karke 'new' add karega.
* **Replacement:** `arr.splice(1, 1, 'x');` $\rightarrow$ Index 1 ke 1 element ko remove karke 'x' se replace karega.


**Example A: Removing elements**

```js
let cars = ["BMW", "Audi", "Tata", "Mahindra"];
cars.splice(2, 2); // index 2 se shuru karke 2 elements remove karo

console.log(cars); // Output: ["BMW", "Audi"] 
```

**Example B: Replacing elements**

```js
let colors = ["Red", "Green", "Blue"];
colors.splice(1, 1, "Yellow", "Purple"); // index 1 pe 'Green' ko hatao, aur 'Yellow', 'Purple' add karo

console.log(colors); // Output: ["Red", "Yellow", "Purple", "Blue"]
```

---