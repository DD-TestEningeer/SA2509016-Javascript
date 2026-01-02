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







