# 0.5 – Write Your First JS Program

## What You Will Learn
- How to **create and run your first JS program**  
- Test it in **browser** and **Node.js**  
- Understand basic **console output** and **variables**

---

## 1. First Program in Browser

1. Create an HTML file `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>First JS Program</title>
</head>
<body>
  <h1>Hello JS</h1>

  <script>
    let name = "Vamshi";
    console.log("Hello " + name + " from Browser!");
    alert("Welcome " + name + "!");
  </script>
</body>
</html>
```
2. Open the file in any browser

3. You will see:
    - Browser alert: “Welcome Vamshi!”
    - Console: “Hello Vamshi from Browser!”
> ✅ This is your first interactive JS program in the browser.

### 🖥️ 2. First Program in Node.js
1. Create a file first.js:
```javascript 
let name = "Vamshi";
console.log("Hello " + name + " from Node.js!");
```
2. Open terminal → run:
```bash
node first.js
```
3. Output:
```bash
Hello Vamshi from Node.js!
```
> ✅ JS runs outside the browser with Node.js.

### 3. What You Learned

- How to create JS files in both environments
- How to print messages using console.log()
- How to use variables (let) to store information
- Difference between browser output (console & alert) vs Node.js output

### Practice Task

1. Modify index.html to ask user name using prompt() and show a greeting
2. Modify first.js to store age and calculate next year’s age
3. Create 0.5_Write_Your_First_JS_Program.md in your repo and document:
    - Code you wrote
    - What output you saw
    - Notes on browser vs Node.js

