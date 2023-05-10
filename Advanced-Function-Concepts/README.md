# Advanced Function Concepts

| Contents |
| :--- |
| [Pure Functions and Side-Effect](#pure-functions-and-its-side-effect) |

## [Pure Functions and Side-Effects](https://drive.google.com/uc?export=view&id=1J1QRcr3UMC-h4zeQhgv6INAfitnKWa2_)

In JavaScript, a pure function is a function that:

- Given the same inputs, always returns the same output.
- Has no side effects, meaning it doesn't modify anything outside of its own scope, including global variables, DOM elements, or any other external state.

Here's an example of a pure function:

```javascript
function sum(a, b) {
  return a + b;
}
```

The `sum` function takes two arguments and always returns their sum. It doesn't have any side effects because it doesn't modify anything outside of its scope.

On the other hand, an impure function is a function that:

- Doesn't always return the same output for the same inputs.
- Has side effects, meaning it modifies something outside of its own scope.

Here's an example of an impure function:

```javascript
let counter = 0;

function increment() {
  counter++;
  return counter;
}
```

The `increment` function modifies the global counter variable every time it is called, which is a side effect. Additionally, it doesn't always return the same output for the same input, since it returns a different value each time it is called.

Side effects can be problematic in code because they can make it harder to reason about what a function does and can introduce bugs. It's generally a good practice to write as many pure functions as possible and minimize the number of impure functions.

Readings:

- [Pure and Impure Functions in JavaScript: A Complete Guide](https://www.syncfusion.com/blogs/post/pure-and-impure-functions-in-javascript-a-complete-guide.aspx)

- [Pure vs Impure Functions in Functional Programming – What's the Difference?](https://www.freecodecamp.org/news/pure-function-vs-impure-function/)
