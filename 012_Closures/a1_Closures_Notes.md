# Closures in JavaScript 🔒

---

A **Closure** is a combination of a function and the environment (scope) in which that function was **declared**.

In simpler terms, a closure allows an **inner function** to **remember and access** the variables of its **outer function**, even after the outer function has finished executing and its variables should technically be gone.

---

### 1. The Core Concept

Every time a function is created in JavaScript, a closure is automatically created.

**💡 Example 1: Remembering the Variable**

Let's look at a simple scenario where the outer function finishes, but the inner function still needs its variables.

```js
function makeCounter() {
    let count = 0; // This is the variable the closure will 'remember'
    
    return function() {
        count += 1; // The inner function accesses and updates the 'count'
        return count;
    };
}

// 1. We call makeCounter(). It runs, creates 'count = 0', and returns the inner function.
const counter1 = makeCounter(); 

// 2. The makeCounter() execution is done, but the 'count' variable is still kept alive
//    in the memory by the closure associated with 'counter1'.

console.log(counter1()); // Output: 1 (count is 0 -> 1)
console.log(counter1()); // Output: 2 (count is 1 -> 2)
```

In this example, the inner function (which is assigned to `counter1`) has a **closure** over the `count` variable. This allows `counter1` to persist and update `count` across multiple calls, even though `makeCounter()` only ran once.

---

### 2. Separate Closures for Separate Instances

If we call the outer function again, it creates a brand new scope and a brand new closure, meaning the variables are independent.

```js
// A new call to makeCounter creates a new scope and a new 'count' variable.
const counter2 = makeCounter(); 

console.log(counter2()); // Output: 1 (The new count starts at 0 -> 1)
console.log(counter1()); // Output: 3 (counter1's original count continues)
```

The closure created by `counter1` is completely separate from the closure created by `counter2`.

---

### 3. Real-World Use Case: Data Privacy (Private Variables)

Closures are the primary mechanism for achieving **data privacy** or **encapsulation** in JavaScript (since it doesn't have true private variables like some other languages).

The outer function's variables are **private** because they can only be accessed or modified by the inner function(s) defined inside them.

**💡 Example 2: Private Bank Balance**

```js
function createBankAccount(initialBalance) {
    let balance = initialBalance; // This variable is 'private'
    
    // The returned object exposes two public methods (withdraw and getBalance)
    return {
        // Method 1: Can read the private variable
        getBalance: function() {
            return balance;
        },
        
        // Method 2: Can modify the private variable
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                return `Withdrew $${amount}. New balance: $${balance}`;
            } else {
                return "Insufficient funds.";
            }
        }
    };
}

const myAccount = createBankAccount(500); // balance is set to 500

// We cannot directly access myAccount.balance (it's undefined)
// We must use the methods exposed by the closure.
console.log(myAccount.withdraw(100)); // Output: Withdrew $100. New balance: $400
console.log(myAccount.getBalance());  // Output: 400
```

The variable **balance** is completely inaccessible from the outside, ensuring it can only be changed by the **withdraw** method (the inner function that shares the closure).


