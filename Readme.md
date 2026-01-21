# 1) Index - JavaScript for QA Automation Testers

1. **Introduction to JavaScript**
2. **Variables, Data Types, and Operators**
3. **Conditional Statements**
4. **Looping Statements**
5. **Functions in JavaScript**
6. **Working with Objects**
7. **Arrays in JavaScript**
8. **Strings in JavaScript**
9. **OOP Concepts in JavaScript**
10. **Converting JSON Object to JavaScript**

# 2) Introduction to JavaScript

- **Light-weight, object-oriented language** used by websites for scripting web pages.  
- Creates **dynamic client-side pages** that can update without reloading.  
- Introduced in **1995** for Netscape Navigator.  
- Enables **modern web applications** to interact directly with users.  
- Makes web pages **interactive and responsive**.  
- **Case-sensitive** language (variable and function names must match exactly).

# 3) Java vs JavaScript

| Feature | Java | JavaScript |
|---------|------|------------|
| Type | OOP Programming Language | OOP Scripting Language |
| Typing | Strongly typed (data type required before declaration) | Loosely typed (no need to declare data type) |
| Execution | Compiled | Interpreted / Just-In-Time (JIT) compiled |
| Type Checking | Static | Dynamic |
| Environment | Runs on JVM or browser | Runs in browser only |

# 4) What is DOM (Document Object Model)

- The **DOM** is an API interface provided by the browser.
- When a web page loads, the browser creates a **Document Object Model** of the page.
- Using the DOM, **JavaScript can access, modify, and update** all elements of an HTML document.


# 5) Environment Setup

### Step 1: Install Node.js
1. Open a web browser.
2. Go to **https://nodejs.org**
3. Download the **LTS (Long Term Support)** version.
4. Run the installer.
5. Follow the installation wizard:
   - Accept the license agreement
   - Use default installation settings
   - Click **Next** until installation completes
6. After installation, open Command Prompt / Terminal and verify:
   ```bash
   node -v
   npm -v



### Step 2: Install Visual Studio Code

1. Open a web browser.
2. Go to **[https://code.visualstudio.com/download](https://code.visualstudio.com/download)**
3. Select the installer based on your operating system (Windows / macOS / Linux).
4. Download and run the installer.
5. Follow the installation steps:

   * Accept the license agreement
   * Choose default settings
   * Click **Install**
6. Launch **Visual Studio Code** after installation.

---

### Step 3: Verify Setup

1. Open Visual Studio Code.
2. Open the integrated terminal (**Ctrl + `**).
3. Run the following command to confirm Node.js is installed:

   ```bash
   node -v

4. If the version is displayed, the setup is complete.


# 6) JavaScript Comments

JavaScript comments are a meaningful way to add messages or explanations to the code.  
They help improve code readability and understanding.  
Comments are **ignored by the JavaScript engine** embedded in browsers and do not affect program execution.

### Types of Comments

#### 1. Single-Line Comment
Used to add a comment in a single line.

```js
// This is a single-line comment
````

#### 2. Multi-Line Comment

Used to add comments across multiple lines.

```js
/*
This is a
multi-line comment
*/
```

### QA Best Practice

* Use comments to explain test logic in automation scripts.
* Helpful for maintenance and team collaboration.


# 7) Variables in JavaScript

A **JavaScript variable** is a name given to a storage location used to store data during program execution.

### Types of Variables

1. **Local Variable**  
   - Declared inside a function or block  
   - Accessible only within that function or block

2. **Global Variable**  
   - Declared outside a function  
   - Accessible from anywhere in the program

---

### Rules for Declaring Variables

- Variable names must start with:
  - A letter (`a–z` or `A–Z`)
  - An underscore (`_`)
  - A dollar sign (`$`)
- Digits (`0–9`) can be used **after** the first character  
  - Example: `value1`
- JavaScript variables are **case-sensitive**  
  - Example: `count` and `Count` are different variables
 

# 8) Variables in JavaScript

### Local Variable
- A local variable is declared **inside a function or a block**.
- It is accessible **only within that function or block**.

```js
function abc() {
  var x = 10; // local variable
}
````

---

### Global Variable

* A global variable is declared **outside a function**.
* It is accessible from **any function** in the program.
* Variables declared using the `window` object are also global.

```js
var x = 100; // global variable

function a() {
  console.log(x);
}
```

### QA Best Practice

* Prefer **local variables** in automation scripts to avoid side effects.
* Avoid unnecessary **global variables** to prevent flaky tests.


# 9) Declaration of Variables in JavaScript

JavaScript provides different ways to declare variables, each with its own scope behavior.

---

### 1. Using `var`
- Function-scoped
- Can be global or local based on where it is declared

```js
var x = 10;

function showVar() {
  var y = 20;
  console.log(x); // 10
  console.log(y); // 20
}

showVar();
````

---

### 2. Using `let`

* Block-scoped
* Value can be reassigned

```js
let count = 1;

if (count === 1) {
  let message = "Inside block";
  console.log(message);
}
```

---

### 3. Using `const`

* Block-scoped
* Value cannot be reassigned

```js
const appName = "QA Automation";

function showApp() {
  console.log(appName);
}

showApp();
```

---

## Variable Scopes in JavaScript

### Global Scope

* Accessible anywhere in the script

```js
var globalUser = "Admin";

function accessGlobal() {
  console.log(globalUser);
}

accessGlobal();
```

---

### Module Scope

* Accessible only within the module

```js
export const timeout = 5000;
```

---

### Function Scope

* Accessible only inside the function

```js
function login() {
  let username = "tester";
  console.log(username);
}

login();
```

---

### Block Scope

* Accessible only inside `{ }`
* Applies to `let` and `const`

```js
if (true) {
  const status = "PASS";
  console.log(status);
}
```

---

### QA Best Practice

* Use `const` by default
* Use `let` when value needs to change
* Avoid `var` to prevent scope-related issues


# 10) Choosing Between `var`, `let`, and `const`

### Use `const`
- Use `const` when the variable value **should never change**.

```js
const baseUrl = "https://example.com";
console.log(baseUrl);
````

---

### Use `let`

* Use `let` when the variable value **needs to change**.
* Does **not** allow unsafe hoisting.

```js
let count = 1;
count = 2;
console.log(count);
```

---

### Use `var`

* Use `var` if you want **reassignment with hoisting behavior**.
* Function-scoped and hoisted to the top.

```js
console.log(value); // undefined
var value = 10;
```

---

## Hoisting Behavior

Hoisting moves variable declarations to the top of their scope.

```js
console.log(a); // undefined
var a = 5;
```

This behavior can cause **unexpected bugs** if not understood properly.

---

## Best Practice

* Avoid using `var` due to hoisting and scope issues
* Prefer `let` and `const` for safer and cleaner code
* Use `const` by default, and `let` only when reassignment is required



# 11) Hoisting in JavaScript

Hoisting is a JavaScript behavior where **variable and function declarations are moved to the top of their scope** before execution.

### Example with `var`
```js
console.log(x); // undefined
var x = 10;
````

### Example with `let`

```js
console.log(y); // ReferenceError
let y = 20;
```

### Key Points

* Only **declarations** are hoisted, not initializations
* `var` allows access before declaration (returns `undefined`)
* `let` and `const` throw errors if used before declaration
* Hoisting can cause **unexpected bugs**

### Best Practice

* Avoid `var`
* Use `let` and `const`

# 12) JavaScript Data Types with Uses

JavaScript data types are divided into **Primitive** and **Non-Primitive** types.  

---

### Primitive Data Types
- Hold a **single simple value** and are immutable.

| Type      | Example                          | Use in QA / Automation |
|-----------|---------------------------------|----------------------|
| String    | `let name = "QA Tester";`       | Store text like usernames, test messages, or element values |
| Number    | `let age = 25;`                 | Perform calculations, validate numeric inputs |
| BigInt    | `let bigNumber = 9007199254740991n;` | Handle very large integers beyond Number limits |
| Boolean   | `let isActive = true;`          | Control flow, flags for test conditions or assertions |
| undefined | `let value;`                    | Detect uninitialized variables or optional parameters |
| null      | `let data = null;`              | Represent empty or missing values in test data |
| Symbol    | `let id = Symbol("id");`        | Create unique identifiers for keys or testing uniqueness |

---

### Non-Primitive Data Types
- Can hold **multiple values**, mutable, represented as **Objects**.

| Type      | Example                         | Use in QA / Automation |
|-----------|--------------------------------|----------------------|
| Object    | `let user = {name: "Tester", role: "QA"};` | Store structured data like user profiles, test cases, or configs |
| Array     | `let scores = [90, 85, 70];`    | Store multiple values, iterate over test data sets |
| Function  | `function greet() { console.log("Hello QA"); }` | Reusable logic, helper functions, event handling in automation |

---

### Summary
- **Primitive** → single, simple, immutable values, used for storing simple data and flags  
- **Non-Primitive** → multiple, complex, mutable values, used for storing structured test data, reusable logic, and configurations



# 13) JavaScript Operators 

---

### 1. Arithmetic Operators
| Operator | Meaning       | Example            | Result |
|----------|---------------|------------------|--------|
| `+`      | Addition      | `2 + 3`           | 5      |
| `-`      | Subtraction   | `5 - 2`           | 3      |
| `*`      | Multiplication| `4 * 2`           | 8      |
| `/`      | Division      | `10 / 2`          | 5      |
| `%`      | Modulus       | `10 % 3`          | 1      |
| `++`     | Increment     | `let x = 1; x++`  | 2      |
| `--`     | Decrement     | `let y = 2; y--`  | 1      |

---

### 2. Assignment Operators
| Operator | Meaning             | Example        | Result |
|----------|-------------------|---------------|--------|
| `=`      | Assign value        | `let a = 10`  | a = 10 |
| `+=`     | Add and assign      | `a += 5`      | a = 15 |
| `-=`     | Subtract and assign | `a -= 3`      | a = 12 |
| `*=`     | Multiply and assign | `a *= 2`      | a = 24 |
| `/=`     | Divide and assign   | `a /= 2`      | a = 12 |
| `%=`     | Modulus and assign  | `a %= 5`      | a = 2  |

---

### 3. Comparison Operators
| Operator | Meaning                  | Example        | Result |
|----------|-------------------------|---------------|--------|
| `==`     | Equal to (value only)    | `5 == '5'`    | true   |
| `===`    | Strict equal (value+type)| `5 === '5'`   | false  |
| `!=`     | Not equal (value only)   | `5 != 3`      | true   |
| `!==`    | Strict not equal         | `5 !== '5'`   | true   |
| `>`      | Greater than             | `10 > 5`      | true   |
| `<`      | Less than                | `10 < 5`      | false  |
| `>=`     | Greater than or equal    | `10 >= 10`    | true   |
| `<=`     | Less than or equal       | `5 <= 3`      | false  |

---

### 4. Logical Operators
| Operator | Meaning       | Example         | Result |
|----------|---------------|----------------|--------|
| `&&`     | Logical AND   | `true && false`| false  |
| `||`     | Logical OR    | `true || false`| true   |
| `!`      | Logical NOT   | `!true`        | false  |

---

### 5. String Operator
| Operator | Meaning           | Example                       | Result       |
|----------|-----------------|-------------------------------|--------------|
| `+`      | Concatenation    | `"QA" + " Tester"`            | `"QA Tester"`|

---

### 6. Ternary Operator
| Operator       | Meaning               | Example                                      | Result   |
|----------------|---------------------|---------------------------------------------|----------|
| `? :`          | Conditional shortcut | `let status = age >= 18 ? "Adult" : "Minor";` | `"Adult"` if age ≥ 18 |


---

# 14) Conditional Statements in JavaScript

Conditional statements are used to **execute different blocks of code based on conditions**.
They are heavily used in **QA automation** for validations, decision-making, and flow control.

---

## 1. `if` Statement

Executes a block of code **only if the condition is true**.

```js
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("User is logged in");
}
```

### QA Use Case

* Verify login success
* Check element visibility

---

## 2. `if...else` Statement

Executes one block if the condition is true, otherwise executes another block.

```js
let result = "FAIL";

if (result === "PASS") {
  console.log("Test case passed");
} else {
  console.log("Test case failed");
}
```

### QA Use Case

* Pass / Fail handling
* Assertion result handling

---

## 3. `else if` Ladder

Used to check **multiple conditions**.

```js
let statusCode = 404;

if (statusCode === 200) {
  console.log("Success");
} else if (statusCode === 404) {
  console.log("Not Found");
} else if (statusCode === 500) {
  console.log("Server Error");
} else {
  console.log("Unknown status");
}
```

### QA Use Case

* API response validation
* Error handling scenarios

---

## 4. `switch` Statement

Used when you have **multiple fixed values** to compare.

```js
let browser = "chrome";

switch (browser) {
  case "chrome":
    console.log("Run tests on Chrome");
    break;
  case "firefox":
    console.log("Run tests on Firefox");
    break;
  case "edge":
    console.log("Run tests on Edge");
    break;
  default:
    console.log("Unsupported browser");
}
```

### QA Use Case

* Cross-browser testing
* Environment-based execution

---

## 5. Truthy and Falsy Values

### Falsy Values in JavaScript

These are treated as `false` in conditions:

* `false`
* `0`
* `""` (empty string)
* `null`
* `undefined`
* `NaN`

```js
let value = "";

if (value) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}
```

---

## QA Best Practices

* Always use **strict comparison (`===`)**
* Handle **negative scenarios**
* Add clear logs for condition outcomes
* Avoid deeply nested `if` statements

---

# 15) Looping Statements in JavaScript

Loops are used to **execute a block of code repeatedly**.
In automation, loops are commonly used for **test data iteration** and **element handling**.

---

## 1. `for` Loop

Used when the number of iterations is known.

```js
for (let i = 1; i <= 3; i++) {
  console.log("Run test iteration:", i);
}
```

### QA Use Case

* Run test steps multiple times
* Iterate over test data

---

## 2. `while` Loop

Runs as long as the condition remains true.

```js
let count = 1;

while (count <= 3) {
  console.log("Execution count:", count);
  count++;
}
```

### QA Use Case

* Retry mechanisms
* Polling until a condition is met

---

## 3. `do...while` Loop

Executes **at least once**, even if the condition is false.

```js
let attempt = 1;

do {
  console.log("Attempt:", attempt);
  attempt++;
} while (attempt <= 2);
```

### QA Use Case

* Retry login
* Mandatory first execution

---

## 4. `for...of` Loop

Used to iterate over **arrays**.

```js
let users = ["Admin", "Tester", "Guest"];

for (let user of users) {
  console.log("User:", user);
}
```

### QA Use Case

* Iterate over test users
* Loop through input values

---

## 5. `for...in` Loop

Used to iterate over **object properties**.

```js
let user = {
  name: "QA",
  role: "Tester",
  active: true
};

for (let key in user) {
  console.log(key + ":", user[key]);
}
```

### QA Use Case

* Read API response objects
* Validate key-value pairs

---

## Loop Control Statements

### `break`

Stops the loop completely.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
```

### `continue`

Skips the current iteration.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

---

## QA Best Practices

* Avoid infinite loops
* Use `for...of` instead of traditional loops for arrays
* Keep loop logic simple and readable

---







