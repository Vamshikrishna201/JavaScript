# Data Structures: `Set` & `Map`

---

`Set` and `Map` are newer (ES6) built-in object types that offer specialized ways to store collections of data, often providing performance benefits over plain Objects or Arrays for certain tasks.

---

### `Set` (Unique Values)

A `Set` is a collection of unique values. **Duplicate values are automatically ignored.**

**💡 Example: Creating a Set**

```js
// 1. Creating a Set
const numbersSet = new Set([1, 2, 2, 3, 4, 4, 4]);

console.log(numbersSet); // Output: Set(4) {1, 2, 3, 4} (Duplicates removed!)
```

**Key Methods**

| **Method**      | **Purpose**                                      |
| --------------- | ------------------------------------------------ |
| `add(value)`    | Adds a new element to the Set.                   |
| `delete(value)` | Removes a specified element.                     |
| `has(value)`    | Checks if a value exists (returns boolean).      |
| `size`          | Property: Returns the number of unique elements. |

---

```js
numbersSet.add(5);
console.log(numbersSet.has(3)); // Output: true
console.log(numbersSet.size); // Output: 5
```

---

### 2. `Map` (Key-Value Pairs, Better Keys)

A `Map` is a collection of keyed data items, similar to an Object. However, a Map is more flexible because it allows keys of any type (objects, functions, or arrays), whereas a standard JavaScript Object only allows string/symbol keys.

**💡 Example: Creating a Map**

```js
// 1. Creating a Map
const userRoles = new Map();

// 2. Using the set() method to add key-value pairs
userRoles.set("john", "Admin");
userRoles.set("sara", "Editor");
userRoles.set(100, "Guest"); // Key can be a number!
```

**Key Methods**

| **Method**        | **Purpose**                                      |
| ----------------- | ------------------------------------------------ |
| `set(key, value)` | Adds or updates a key-value pair.                |
| `get(key)`        | Retrieves the value associated with the key.     |
| `has(key)`        | Checks if a key exists (returns boolean).        |
| `delete(key)`     | Removes the key and its value.                   |
| `size`            | Property: Returns the number of key-value pairs. |

```js
console.log(userRoles.get("john")); // Output: Admin
console.log(userRoles.has("sara")); // Output: true

userRoles.delete(100);
console.log(userRoles.size);        // Output: 2
```

---

# 📝 Practice Tasks: `Set` & `Map`

### 1. `Set` Practice: Uniqueness and Counting 🧩

Remember: A `Set` stores only unique values and is excellent for quickly checking existence or removing duplicates.

**Task: Finding Unique Languages**

You have an array of languages spoken by users. Use a `Set` to find out how many unique languages are spoken and then check if a specific language is present.

```js
const userLanguages = [
    "English", "Spanish", "French", "English", "German", "Spanish", "English"
];

// Your Code Here:

// 1. Create a Set from the array to get only unique languages.
const uniqueLanguages = /* Your Set creation code */;

// 2. Find the total count of unique languages.
const count = uniqueLanguages.size;

// 3. Check if "German" is one of the unique languages.
const hasGerman = uniqueLanguages.has("German");


console.log("Unique Languages:", uniqueLanguages);
console.log("Total unique count:", count); // Expected Output: 4
console.log("Is German spoken?", hasGerman); // Expected Output: true
```

---

### 2. `Map` Practice: Tracking Scores with Complex Keys 📊

Remember: A `Map` stores key-value pairs where the **key can be any data type** (unlike Objects, which primarily use strings). This is useful for associating data with objects or tracking unique identifiers.

**Task: Tracking Game Scores**

You want to track the highest score achieved by each team in a tournament. Use a Map to store the team name (string) as the key and their score (number) as the value.

```js
// Data for the teams and their scores
const scores = [
    { team: "Eagles", score: 85 },
    { team: "Sharks", score: 92 },
    { team: "Eagles", score: 95 }, // This should overwrite the previous Eagles score
    { team: "Bears", score: 78 }
];

// Your Code Here:

// 1. Create a new Map.
const teamScoresMap = new Map();

// 2. Loop through the 'scores' array and use the Map.set() method.
//    (Map.set() automatically overwrites the old value if the key already exists.)
scores.forEach(/* Your Map.set callback function here */);


// 3. Retrieve the final score for the "Eagles".
const eaglesScore = teamScoresMap.get("Eagles");

console.log("Final Scores Map:", teamScoresMap);
console.log("Eagles' final score:", eaglesScore); // Expected Output: 95
console.log("Total teams tracked:", teamScoresMap.size); // Expected Output: 3
```

---
---