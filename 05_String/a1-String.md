# String in Javascript

---

**String** JavaScript me ek **data type** hai jo **text** ko represent karta hai.

Matlab jo bhi tum **double quotes** (`" "`), **single quotes** (`' '`) ya **backticks** (``` ` ``) ke andar likhte ho, wo ek string hoti hai.

### 💡 String Example Literals

* `"Hello World!"` (Double Quotes)
* `'JavaScript Notes'` (Single Quotes)
* ``` `Yeh ek template literal hai` ``` (Backticks)

---

### 1. 3 ways to create strings:

```js
let str1 = "Hello World";   // Double quotes
let str2 = 'JavaScript';    // single quotes
let str3 = `Hi ${str1}`;    // template literal (backticks)
```

---

## String Concatenation in JavaScript

String concatenation matlab 2 ya usse zyada strings ko jodna

```js
let firstName = "Vamshikrishna";
let lastName = "Ravulwar";
let fullName = firstName + " " + lastName;

console.log(fullName);
```
```bash
Vamshikrishna Ravulwar
```

---

```js
let str1 = "JavaScript";
let str2 = "is awesome";
let fullName = firstName + " " + lastName;

console.log(str1.concat(str2));
```

```bash
JavaScript is awesome
```

---

```js
let name = "Vamshi";
let age = 24;

console.log(`May name is ${name} and I am ${age} years old.`);
```

```bash
May name is Vamshi and I am 24 years old.
```



---

## 🔡 JavaScript String Methods and Properties

| Method / Property | Kaam (Meaning) | Example (Code) | Output |
| ---               | ---          | ---           | --- |
| **length** | String ki **length** (kitne characters) batata hai | `"Hello".length` | `5` |
| **toUpperCase()** | Sabko **CAPITAL letters** me karega | `"hello".toUpperCase()` | `"HELLO"` |
| **toLowerCase()** | Sabko **small letters** me karega | `"HELLO".toLowerCase()` | `"hello"` |
| **charAt(n)** | **nth index** ka character dega | `"Java".charAt(2)` | `"v"` |
| **indexOf("x")** | Kis **position** pe character/word hai | `"Hello".indexOf("o")` | `4` |
| **slice(start, end)** | Ek **part cut** karke naya string banata hai (end index exclusive) | `"Hello".slice(1,4)` | `"ell"` |
| **substring(start, end)** | `slice` jaisa hi hai (difference in handling negative arguments) | `"Hello".substring(0, 2)` | `"He"` |
| **replace(a, b)** | Ek word ko dusre se **replace** karega (only first match) | `"JS is good".replace("good", "best")` | `"JS is best"` |
| **trim()** | **Extra spaces** (whitespace) hata deta hai start aur end se | `" hi ".trim()` | `"hi"` |
| **split(" ")** | String ko **array** me todta hai (separator ke basis par) | `"a,b,c".split(",")` | `["a", "b", "c"]` |

---

## 1. `length`

**Kaam:** String ki total length (kitne characters hain) batata hai.

```js
let str = "Hello";
console.log(str.length);
```

---

## 2. `toUpperCase()`

**Kaam:** String ke sabhi characters ko capital letters me convert karta hai.

```js
let str = "hello";
console.log(str.toUpperCase());
```

---

## 3. `toLowerCase()`

**Kaam:** String ke sabhi characters ko small letters me convert karta hai.

```js
let str = "HELLO";
console.log(str.toLowerCase());
```

---

## 4. `charAt(n)`

**Kaam:** String ke kisi specific index (position) pe kaunsa character hai, wo return karta hai.

```js
let str = "Java";
console.log(str.charAt(3));
```

---

## 5. `indexOf("x")`

**Kaam:** String me diya gaya character/word kis index (position) pe aaya hai,
wo batata hai.

```js
let str = "Hello";
console.log(str.indexOf("o"));
```

---

## 6. `slice(start,end)`

**Kaam:** String ke ek part ko cut karke naya string return karta hai (start index se
end index-1 tak)

```js
let str = "Hello";
console.log(str.slice(1,4));
```

```
ell
```

## 7. `substring(start,end)`

**Kaam:** slice() jaisa hi hota hai, lekin negative index accept nahi karta.

```js
let str = "Hello";
console.log(str.substring(0,2));
```

```
He
```

---

## 8. `replace(a,b)`

**Kaam:** String me ek word/character ko dusre word/character se replace
karta hai.

```js
let str = "Js is good";
console.log(str.replace("good", "best"));
```

```
JS is best
```

---

## 9. `trim()`

**Kaam:** String ke starting aur ending ke extra spaces hata deta hai

```js
let str = "   hi   ";
console.log(str.trim());
```

---

## 10. `split("separator")`

**Kaam:** String ko todkar array me convert karta hai (separator ke base par).

```js
let str = "a,b,c";
console.log(str.split(","));
```

```
["a", "b", "c"]
```

---

TIP:- This will helpfull when your making something searching bar.

## 11. `startsWith()`

`startWith()` -> Checks if a string begins with the specified characters. It is case-sensitive.

```js
const greeting = "Hello World";
console.log(greeting.startsWith("Hello")); // true
console.log(greeting.startsWith("hello")); // false (H is not the same as h)
```


---

## 12. `include()`

`include()` Checks if one string can be found inside another string.

```js
const sentence = "The quick brown fox jumps.";

// Check if "fox" is in the string
const hasFox = sentence.includes("fox");
console.log(hasFox); // Output: true

// Check if "cat" is in the string
const hasCat = sentence.includes("cat");
console.log(hasCat); // Output: false
```

---

## 13. `endsWith()`

`endsWith()` Checks if a string ends with the specified characters.

```js
const word = "Apple";

console.log(word.endsWith("e"));   // Output: true
console.log(word.endsWith("E"));   // Output: false (The string ends with 'e', not 'E')
```

---

## 14. `repeat(n)`

`repeat(n)` Returns a new string with the string repeated a specified number of times.

```js
const laughter = "Ha";
console.log(laughter.repeat(3)); // Output: HaHaHa
```

---