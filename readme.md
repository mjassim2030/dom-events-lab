# 🧲 MVP & Full-Feature JavaScript Calculator

This repository contains two JavaScript-based calculator implementations:

1. **MVP Calculator** – A minimal viable product version designed to demonstrate basic arithmetic operations.
2. **Enhanced Calculator** – A fully functional, array-based calculator capable of handling chained operations with operator precedence.

## 📌 Project Overview

### MVP Calculator

The MVP version is a button-driven calculator that:

* Handles basic arithmetic: addition, subtraction, multiplication, and division.
* Supports simple two-number operations (e.g., `4 + 5`).
* Stores the result and allows further operations using the result.
* Provides basic input validation and display formatting.

> This version is suitable for demonstrating JavaScript event handling and DOM manipulation fundamentals.

---

### Full-Feature Calculator

The enhanced version introduces a more advanced operational model using an `allOperations` array to:

* Track a full sequence of user-entered numbers and operators.
* Dynamically build and display expressions like `1 + 2 * 3 / 4`.
* Respect operator precedence using JavaScript’s built-in `eval()` method.
* Handle repeated equals (`=`) presses with the ability to double the last result.
* Provide robust clearing and error handling logic (e.g., dividing by zero).

> Designed as an exploratory extension to practice deeper JavaScript concepts like expression evaluation, array manipulation, and event-driven state handling.

---

## 🧰 Tech Stack

* **HTML5** – Layout and structure of calculator interfaces.
* **CSS3** – Basic styling for visual structure and interaction.
* **JavaScript (ES6)** – Core application logic and interaction handling.

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
| Operator Precedence         | ❌              | ✅                   |
| Input Validation            | Basic          | Advanced            |
| Clear (C) Functionality     | ✅              | ✅                   |
| Repeat Equals Behavior      | ❌              | ✅                   |
| Error Handling              | Minimal        | Improved            |
| Code Documentation          | Extensive      | Extensive           |

---

## 📸 Screenshots

> (Optional: Add screenshots or screen recordings of the calculator interfaces here.)

---

## ⚠️ Security Note

The enhanced calculator uses JavaScript’s `eval()` function for evaluating expressions. While this approach is suitable for controlled environments and learning purposes, **it is not recommended for production applications** due to potential security risks if user input is not properly sanitized.

---

## 🧠 Learning Goals

This project helps reinforce key front-end development concepts:

* JavaScript event listeners
* DOM traversal and manipulation
* Array-based state management
* Display formatting and UI feedback
* Fundamental computational logic

---

## 📖 References

* [MDN: eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)
* [MDN: parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
* [W3Schools: CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp)

---

## 📄 License

This project is open-source and free to use for educational and non-commercial purposes.

---

## 🙌 Contributions

Contributions are welcome. Please fork the repository, submit a pull request, or open an issue with suggestions or enhancements.

---
