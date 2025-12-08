# Object in JavaScript

---

A JavaScript **Object** is a **non-primitive data type** used to store **collections of data** and more complex entities.


Unlike arrays (which use ordered indices), **objects store data as key-value pairs**. This is similar to a dictionary or a map where you look up a value using a name (the key).

#### 💡 Object Example Literal
```js
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    isAvailable: true
};
```

---

## 1. Creating an Object

#### A. Object Literal (Most Common)

This uses curly braces `{}.` Each item is a property defined by a `key` followed by a colon `:` and its `value`. Properties are separated by commas.

```js
const person = {
    firstName: "Vamshi",
    lastName: "Krishna",
    age: 24,
    hobbies: ["coding", "traveling"]
};
```

#### B. Using the new Object() Constructor (Less Common)
```js
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
```

---

## 2. Accessing Object Properties

There are two main ways to retrieve the value associated with a key: **Dot Notation** and **Bracket Notation**.

#### A. Dot Notation (`object.key`)

This is the preferred and cleaner method when you know the key name.
```js
console.log(person.firstName); // Output: Vamshi
console.log(person.age);       // Output: 24
```

---

#### B. Bracket Notation (`object["key"]`)

This is required when:

1. The key name contains spaces or special characters (though this is discouraged).

2. The key name is stored in a variable.

```js
console.log(person["lastName"]); // Output: Krishna

let keyName = "age";
console.log(person[keyName]);    // Output: 24 (Key is dynamic)
```

---

## 3. Modifying Objects

Objects are **mutable** (changeable). You can add new properties or change existing ones.

#### A. Adding a New Property

```js
const user = { username: "vamshi_dev" };

// Add the 'email' property
user.email = "v@example.com";
user["city"] = "Hyd";

console.log(user); 
// Output: { username: "vamshi_dev", email: "v@example.com", city: "Hyd" }
```

#### B. Changing an Existing Property

```js
user.email = "new.v@example.com";

console.log(user.email); // Output: new.v@example.com
```

#### C. Deleting a Property

Use the `delete` keyword to completely remove a property.

```js
delete user.city;

console.log(user); 
// Output: { username: "vamshi_dev", email: "new.v@example.com" }
```

---

## 4. Object Methods

When a property's value is a function, it is called a method
```js
const calculator = {
    a: 10,
    b: 5,
    
    // This is a method
    add: function() {
        return this.a + this.b;
    }
};

// Calling the method
console.log(calculator.add()); // Output: 15
```

**Note** on `this`: Inside an object method, the keyword `this` refers to the object itself (in this case, the `calculator` object).

---

## 5. Built-in Object Methods

The global `Object` constructor has useful methods for working with objects.

| Method  |	Function (Kaam) |	Example (Code) | 	Output |
| -----  |	-------------- |	-------------- | 	------ |
| Object.keys() | Object ke sabhi keys (property names) ko array me return karta hai | Object.keys(person) | ['firstName', 'lastName', 'age', 'hobbies']|
|Object.values() | Object ke sabhi values ko array me return karta hai | Object.values(person) | ['Vamshi', 'Krishna', 24, ['coding', 'traveling']] |
|Object.entries() | Object ke sabhi [key, value] pairs ko array of arrays me return karta hai| Object.entries(person)| [['firstName', 'Vamshi'], ...]|


#### Example using `Object.keys()`

```js
const settings = { theme: "dark", notifications: true };
let keys = Object.keys(settings);

console.log(keys); // Output: ["theme", "notifications"]
```