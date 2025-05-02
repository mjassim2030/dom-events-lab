# MVP & Full-Feature JavaScript Calculator

This repository contains two JavaScript-based calculator implementations,
the MVP Calculator is as per the GA SEB5 DOM-Events Assignment, and the enahnced version I've designed it to practice add more features to the MVP version.

1. **MVP Calculator** – A minimal viable product version designed to demonstrate basic arithmetic operations.
2. **Enhanced Calculator** – A fully functional, array-based calculator capable of handling chained operations with operator precedence.

## Assignment Overview

### MVP Calculator

The MVP version features:

* Handles basic arithmetic: addition, subtraction, multiplication, and division.
* Supports simple two-number operations (e.g., `4 + 5`).
* Stores the result and allows further operations using the result.
* Provides basic input validation and display formatting.

> This version is suitable uses DOM manipulation fundamentals.

---

### Enhanced Calculator

The enhanced version introduces more advanced operational model using an Arrays to:

* Track a full sequence of user-entered numbers and operators.
* Dynamically build and display expressions like `1 + 2 * 3 / 4`.
* Handle repeated equals (`=`) presses with the ability to double the last result.
* Provide clearing and error handling logic (e.g., dividing by zero).

> Designed as an exploratory extension to practice deeper JavaScript concepts like expression evaluation, array manipulation, and handling events.

---

## Tech Stack

* **HTML** – Layout and structure of calculator interfaces.
* **CSS** – Basic styling for visual structure and interaction.
* **JavaScript** – Core application logic and interaction handling.

---

## 🔍 File Structure

```plaintext
.
├── index.html             # Main HTML document (assumed)
├── style.css              # Styles for both calculators (assumed)
├── script.js              # Contains both MVP and enhanced calculator logic
└── README.md              # Project documentation
```

---

## 🚀 Features Summary

| Feature                     | MVP Calculator | Enhanced Calculator |
| --------------------------- | -------------- | ------------------- |
| Basic Arithmetic Operations | ✅              | ✅                   |
| Chained Operations          | ❌              | ✅                   |
| Operators Prioritization    | ❌              | ✅                   |
| Input Validation            | Basic          | Advanced            |
| Clear (C) Functionality     | ✅              | ✅                   |
| Repeat Equals Behavior      | ❌              | ✅                   |
| Error Handling              | Minimal        | Improved            |
| Code Documentation          | Extensive      | Extensive           |

---

## 📸 Screenshots

![Screenshot](images/001.png)

---

## Learning Goals

* JavaScript event listeners
* DOM manipulation
* Display formatting and UI feedback (CSS)
* Array-Based computational logic

---

## References

Both MVP and Enhanced Calculators javascript codes has been written by myself, no reference to **AI generated codes** at all, I've refered to the below references from MDN and W3School only, 
All comments written line by line extensivly for each line of code.

The only part I've used AI-Generated content is for this **readme.md ** file content, I asked the GPT to provide me with the standard structure of the readme.md to remind of the **Markdown notations.** as I've used them previosuly.
---

## References

* [MDN: eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)
* [MDN: parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
* [MDN: slice()]([https://www.w3schools.com/cssref/css_selectors.asp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice))
* [W3Schools: CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp)

---