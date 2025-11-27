# Loops + (User Input + Output)

---

### 1. For Loop

| Conditional | Use Case (Hindi) | Meaning |
| :---  | :--- | :--- |
| **For Loop** | Jab humein **pata ho kitni baar repeat karna hai**, tab use karte hain. | Used when the **number of iterations is known** beforehand. |

### 💡 Examples:

* **Counting:** 1 se 100 tak numbers print karna.
* **Array Traversal:** Ek fixed array ke saare elements ko process karna.

```js
// For loop example
for(let i = 0; i <= 5; i++){
    console.log("Number is: " + i);
}
```

```bash
Number is: 1
Number is: 2
Number is: 3
Number is: 4
Number is: 5
```

---

### 2. While Loop

| Conditional | Use Case (Hindi) | Meaning |
| :--- | :--- | :--- |
| **While Loop** | Jab iterations ka **count fix nahi hai** par **condition ke base pe chalana hai**. | Used when the **number of iterations is unknown** and the loop runs as long as a specific condition remains true. |

### 💡 Examples:

* **User Input:** Jab tak user "Quit" type na kare, tab tak input lena.
* **Searching:** Linked List ya Tree me tab tak search karna jab tak element mil na jaaye.

```js
// while loop example
let i = 1;
while(i <= 5){
    console.log("Number is: ", i);
    i++;
}
```

```bash
Number is: 1
Number is: 2
Number is: 3
Number is: 4
Number is: 5
```

---

### 3. Do…While Loop

| Conditional | Use Case (Hindi) | Meaning |
| :--- | :--- | :--- |
| **Do...While Loop** | **Pehle ek baar loop definitely chalega**, chahe condition false hi kyu na ho. | Ensures the loop body executes **at least once**, regardless of the initial condition. |

### 💡 Examples:

* **Menu Display:** User ko **ATM menu** *ek baar* dikhana zaroori hai, phir uske choice par condition check karna.
* **Validation:** User se **valid input** tab tak lena jab tak woh sahi format mein input na de de.

```js
let j = 1;
do{
    console.log("Number is: ", j);
    i++;
} while(j <= 5)
```

---

### 4. For…of Loop (Array ke liye)

| Conditional | Use Case (Hindi) | Meaning |
| :--- | :--- | :--- |
| **For…of Loop** | Array ke **elements ko directly access** karne ke liye. | Used to iterate directly over the **values** (elements) of an iterable object like an Array, String, Map, etc. |

### 💡 Examples:

* **Array Values:** Array ke andar ke har `item` ko ek-ek karke nikalna.
* **String Characters:** Ek string ke **har character** ko alag-alag process karna.

```js
// for of loop example
let f = ["Apple", "Mango", "Banana"];

for(let fruit of f){
    console.log("Fruit: " + fruit);    
}
```

---

### 5. For…in Loop (Object ke liye)

| Conditional | Use Case (Hindi) | Meaning |
| :--- | :--- | :--- |
| **For…in Loop** | Object ke **keys ko access** karne ke liye. | Used to iterate over the **enumerable properties (keys)** of an object. |

### 💡 Examples:

* **Object Properties:** `user` object ke andar ki har `name`, `age`, ya `city` property (key) ko access karna.
* **Debugging:** Object ke saare properties ko print karke dekhna.

```js
// for in loop example
let student = {
    name: "Vamshi",
    age: 24,
    course: IT
}

for(let key in student){
    console.log(key + " : " + student[key]);
}
```

```
name : Vamshi
age : 24
course : IT
```

---

### (User Input + Output)

```js
// User input
let num = prompt("Enter a number:");

// string ko number me convert karna (kyunkiprompt string deta hai)
num = Number(num);

// calculate Square
let square = num * num;

// Output
alert("Square of " + num + " is " + square);
console.log("Square of " + num + " is " + Square);
```

---