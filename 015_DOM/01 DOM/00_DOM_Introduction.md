<details>
<summary>DOM 1 INTRO</summary>

## 1. Window vs Document (No bullshit version)

### `window` — The Global Object

- Represents the **browser tab**
- Automatically created by the browser
- Everything global lives here

Examples:

```jsx
window.alert("Hi");
alert("Hi");// same thing

window.console.log("Hello");
console.log("Hello");// same thing
```

Key properties:

- `window.document`
- `window.location`
- `window.history`
- `window.innerWidth`

⚠️ **Important truth:**

JS **cannot control browser UI** (URL bar, tabs, back button).

It can only **read or request actions**, not control them fully.

---

### `document` — The Web Page

- Represents **HTML content only**
- Created **from your HTML**
- Used to **read/change elements**

Example:

```jsx
document.title ="New Page Title";
```

✔ `document` lives **inside** `window`

✔ DOM = `document` object + its tree structure

---

---

## 2. DOM Tree (This is where interviews hit)

!https://www.w3schools.com/js/pic_htmltree.gif

When browser loads HTML, it converts it into a **tree structure**.

```graphql
document
 └──html
     ├── head
     └──body
         ├──h1
         ├──p
         └──ul
             ├──li
             └──li
```

### Relationships (Interview keywords)

- **Parent** → element that contains another
- **Child** → element inside another
- **Sibling** → elements at same level
- **Root** → `<html>`

---

## 🎯 3. Core DOM Operations (Beginner Level)

## Dom Manipulation (Mandatory):

### Accessing Element:

- `document.querySelector()`

### Modifying Elements:

- `innerHTML`, `textContent`

### Manipulating Styles and Classes:

- `style`
- `classList`

### Creating and Deleting Elements:

- `createElement()`
- `appendChild()`
- `removeChild()`

### Event Handling:

- `addEventListener()`

### Selecting Elements

```jsx
document.getElementById("title"); 
//-> select's only id from element

document.querySelector(".box"); 
//-> select's single element with tag name, id & class

document.querySelectorAll("li"); 
//-> selects every element that matches the selector and puts them into a static NodeList.
```

### Changing Text

```jsx
const heading =document.querySelector(h1);
heading.textContent ="Welcome!";
```

### Changing Style

```jsx
heading.style.color ="green";
heading.style.fontSize ="32px";
```

> Key interview point:
> 
> 
> DOM lets JavaScript **read + change HTML and CSS dynamically**.
>

---

## 🧠 4. DOM Traversal (Intermediate Level)

Used when **IDs are missing** and structure matters.

### Common Traversal Properties

```jsx
element.parentElement()
element.children()
element.firstElementChild()
element.lastElementChild()
element.nextElementSibling()
element.previousElementSibling()
```

### Example

```jsx
const button =document.querySelector("button");

// style the parent div
button.parentElement.style.border ="2px solid red";
```

> Interview one-liner:
> 
> Traversal means moving up, down, or sideways in the DOM tree.
> 

---

## ⚡ 5. Events (Intermediate Level)

DOM becomes useful only with **events**.

### Button Click Example

```jsx
const btn =document.querySelector("#btn");

btn.addEventListener("click",function () {
alert("Button clicked");
});
```

### Input Value Example

```jsx
const input =document.querySelector("input");
const btn =document.querySelector("button");

btn.addEventListener("click",() => {
console.log(input.value);
});
```

---

# 🌙 6. Real-World Example: Theme Toggle

### HTML

```html
<body>
<h1>My Website</h1>
<button id="themeBtn">Toggle Theme</button>
</body>
```

### CSS

```css
.dark {
background-color: black;
color: white;
}
```

### JavaScript

```jsx
const btn =document.getElementById("themeBtn");

btn.addEventListener("click",() => {
document.body.classList.toggle("dark");
});
```

### Why interviewers like this example

- Uses `document`
- Uses `classList`
- Uses event handling
- Shows real UI change

---

## 🧪 7. Real-World Mini App: Greeting User

### HTML

```html
<input id="nameInput"placeholder="Enter name" />
<button id="greetBtn">Greet</button>
<h1id="msg"></h1>
```

### JavaScript

```jsx
const input =document.getElementById("nameInput");
const button =document.getElementById("greetBtn");
const message =document.getElementById("msg");

button.addEventListener("click",() => {
    message.textContent ="Hello " + input.value;
    message.style.color ="green";
});
```

---

## 🧩 8. Interview Rapid-Fire Answers (Memorize)

- **DOM** → Programming interface for HTML
- **document** → Represents webpage
- **window** → Represents browser
- **DOM Tree** → Hierarchical structure of elements
- **Traversal** → Moving through DOM nodes
- **Events** → User actions like click, input, scroll

</details>

<details>
<summary>DOM 2</summary>

## 9️⃣ `innerHTML` vs `textContent` vs `innerText` (VERY IMPORTANT)

!https://media2.dev.to/cdn-cgi/image/width%3D800%2Cheight%3D%2Cfit%3Dscale-down%2Cgravity%3Dauto%2Cformat%3Dauto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fta11xob8j5pqczxd5v5y.png

### `textContent` ✅ (SAFE + FAST)

- Inserts **only text**
- HTML is treated as plain text
- Fast and safe

```jsx
element.textContent ="<h1>Hello</h1>";
```

➡ Output: `<h1>Hello</h1>` (not rendered)

---

### `innerHTML` ⚠️ (POWERFUL but DANGEROUS)

- Parses HTML
- Can cause XSS
- Slower

```jsx
element.innerHTML ="<h1>Hello</h1>";
```

➡ Output: 

**Hello** (as heading)

> Interview truth:
> 
> 
> Never use `innerHTML` with user input.
> 

---

### `innerText` ❌ (AVOID)

- Reads visible text only
- Triggers layout
- Slow

---

### Quick Table

| Property | Use |
| --- | --- |
| textContent | Default |
| innerHTML | Only when HTML needed |
| innerText | Avoid |

---

## 🔁 10 Event Bubbling & Capturing (TOP INTERVIEW TRAP)

!https://javascript.info/article/bubbling-and-capturing/eventflow.svg

### Event Flow Has 3 Phases

1. **Capturing** (Top → Down)
2. **Target**
3. **Bubbling** (Bottom → Up)

---

### Example HTML

```html
<div id="parent">
<buttonid="child">Click</button>
</div>
```

### Bubbling (Default)

```jsx
parent.addEventListener("click",() => {
console.log("Parent clicked");
});

child.addEventListener("click",() => {
console.log("Child clicked");
});
```

➡ Output:

```
Child clicked
Parent clicked
```

---

### Capturing

```jsx
parent.addEventListener("click",() => {
console.log("Parent clicked");
},true);
```

➡ Parent runs **before** child

---

### Stop Bubbling

```jsx
child.addEventListener("click",(e) => {
    e.stopPropagation();
});
```

---

### 🔑 Interview Line

> Event bubbling means the event moves from child to parent.
> 

---

## 🧠 11 Event Delegation (ADVANCED + REAL WORLD)

!https://javascript.info/article/event-delegation/bagua-bubble.svg

!https://media.geeksforgeeks.org/wp-content/uploads/20200918160758/second-660x392.png

### Problem

Adding event listeners to **100 buttons** = dumb + slow.

### Solution

Attach **one listener** to parent.

---

### Example

```html
<ul id="list">
<li>One</li>
<li>Two</li>
<li>Three</li>
</ul>
```

```jsx
const list =document.getElementById("list");

list.addEventListener("click",(e) => {
if (e.target.tagName ==="LI") {
console.log(e.target.textContent);
    }
});

```

### Why This Matters

- Better performance
- Handles dynamic elements
- Used in frameworks

---

### 🔑 Interview Line

> Event delegation uses event bubbling to handle events efficiently.
> 

---

## ⚙️ 12️⃣ DOM Performance (Reflow & Repaint)

### Reflow (EXPENSIVE 💀)

Triggered when layout changes:

- width
- height
- margin
- font-size

```jsx
element.style.width ="200px";
```

---

### Repaint

Triggered when visual changes:

- color
- background
- visibility

```jsx
element.style.color ="red";
```

---

### Best Practice

❌ BAD

```jsx
box.style.width ="100px";
box.style.height ="100px";
box.style.margin ="10px";
```

✅ GOOD

```jsx
box.classList.add("active");
```

---

## ⚛️ 13 DOM vs Virtual DOM (React Question)

!https://miro.medium.com/v2/resize%3Afit%3A1200/1%2ANLNoFfBWzu8Uu1RgWw3Z9g.jpeg

https://media.licdn.com/dms/image/v2/D5612AQGtl93uAU3y8w/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1714115468907?e=2147483647&t=537BktjcUWWVlv6TduQaa1cNb3xIrH93kO9YGDHqsiQ&v=beta

| DOM | Virtual DOM |
| --- | --- |
| Direct update | In-memory copy |
| Slow | Fast |
| Reflows often | Batches updates |
| Browser handles | JS handles |

---

### One-Line Answer

> Virtual DOM minimizes direct DOM manipulation to improve performance.
> 

---

## 🧪 14️⃣ Real-World Advanced Example (Delegation + Toggle)

```html
<ul id="tasks">
<li>Learn JS</li>
<li>Practice DOM</li>
</ul>
```

```jsx
document.getElementById("tasks").addEventListener("click",(e) => {
if (e.target.tagName ==="LI") {
        e.target.classList.toggle("done");
    }
});
```

```css
.done {
text-decoration: line-through;
color: gray;
}
```

---

## 🔥 Final Interview Checklist (MEMORIZE)

If you **can't explain these**, you’re not DOM-ready:

✅ window vs document

✅ DOM tree

✅ textContent vs innerHTML

✅ Event bubbling

✅ Event delegation

✅ Reflow vs repaint

✅ DOM vs Virtual DOM

</details>

<details>
<summary>DOM 3 CURD </summary>

# DOM CRUD Manipulation (Must-Know)

CRUD = **Create, Read, Update, Delete**

In DOM terms: **elements on the page**

---

## 0️⃣ Mental Model (Simple, No BS)

HTML page = empty shelf

DOM CRUD = **add items, read items, change items, remove items**

Everything is just **nodes**.

---

## 🟢 CREATE — Add Elements to DOM

### Basic Example (Beginner)

```jsx
// create element
const p =document.createElement("p");

// add content
p.textContent ="Hello DOM";

// add to page
document.body.appendChild(p);
```

### What happened (tree view)

```graphql
body
 └── p  ("Hello DOM")
```

---

### CREATE with class + id

```jsx
const div =document.createElement("div");
div.id ="box";
div.className ="card";
div.textContent ="New Box";

document.body.appendChild(div);
```

---

## 🔵 READ — Read DOM Data

### Read Text

```jsx
const heading =document.querySelector("h1");
console.log(heading.textContent);

```

### Read Input Value

```jsx
const input =document.querySelector("input");
console.log(input.value);

```

### Read Attribute

```jsx
const img =document.querySelector("img");
console.log(img.getAttribute("src"));
```

---

## 🟡 UPDATE — Modify Existing Elements

### Update Text

```jsx
heading.textContent ="Updated Title";
```

### Update Style

```jsx
heading.style.color ="red";
```

### Update Class

```jsx
heading.classList.add("active");
heading.classList.remove("active");
heading.classList.toggle("active");
```

---

## 🔴 DELETE — Remove Elements

### Remove an Element

```jsx
const box =document.querySelector(".box");
box.remove();
```

### Old Method (still asked sometimes)

```jsx
box.parentElement.removeChild(box);
```

---

# CRUD TOGETHER — SIMPLE PRACTICE

### HTML

```html
<input id="text" />
	<button id="add">Add</button>
<ul id="list"></ul>
```

### JavaScript

```jsx
const input =document.getElementById("text");
const btn =document.getElementById("add");
const list =document.getElementById("list");

btn.addEventListener("click",() => {
const li =document.createElement("li");// CREATE
  li.textContent = input.value;// UPDATE
  list.appendChild(li);// CREATE
  input.value ="";// UPDATE
});
```

---

## Tree after adding items

```graphql
ul
 ├── li ("Task 1")
 ├── li ("Task 2")
```

---

# REAL-WORLD CRUD EXAMPLE (IMPORTANT)

## ✅ Task List (Create, Read, Update, Delete)

### HTML

```html
<input id="taskInput"placeholder="Enter task" />
<button id="addTask">Add</button>

<ul id="tasks"></ul>
```

---

### JavaScript

```jsx
const input =document.getElementById("taskInput");
const button =document.getElementById("addTask");
const taskList =document.getElementById("tasks");

button.addEventListener("click",() => {
// CREATE
const li =document.createElement("li");
  li.textContent = input.value;

// UPDATE (toggle done)
  li.addEventListener("click",() => {
    li.classList.toggle("done");
  });

// DELETE
  li.addEventListener("dblclick",() => {
    li.remove();
  });

  taskList.appendChild(li);
  input.value ="";
});
```

### CSS

```css
.done {
text-decoration: line-through;
color: gray;
}
```

---

## What CRUD Is Happening Here

| Action | DOM Operation |
| --- | --- |
| Add task | CREATE |
| Read input | READ |
| Mark done | UPDATE |
| Remove task | DELETE |

---

## ⚠️ Better Way (Real-World Pattern)

Instead of adding listeners to every `li`, use **event delegation**.

```jsx
taskList.addEventListener("click",(e) => {
if (e.target.tagName ==="LI") {
    e.target.classList.toggle("done");
  }
});

taskList.addEventListener("dblclick",(e) => {
if (e.target.tagName ==="LI") {
    e.target.remove();
  }
});
```

This is **production style**.

---

# Interview-Ready CRUD Summary (Memorize)

- **Create** → `createElement`, `appendChild`
- **Read** → `textContent`, `value`, `getAttribute`
- **Update** → `textContent`, `style`, `classList`
- **Delete** → `remove()`

---

## Brutal Truth (Final)

If you know:

- DOM selection
- DOM events
- DOM CRUD

👉 you know **90% of real DOM usage**.

Anything beyond this:

- frameworks handle it
- or it’s senior-level edge cases

---

</details>

---

















