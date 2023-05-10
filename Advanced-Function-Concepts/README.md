# Advanced Function Concepts

| Contents |
| :--- |
| [Pure Functions and Side-Effect](#pure-functions-and-its-side-effect) |
| [Factory Functions](#factory-functions) |

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

## Factory Functions

A factory function is a function that returns another function or object. It's called a factory function because it creates and returns new objects without having to use the `new` keyword or a class constructor.

Here's an example of a factory function that creates objects representing cars:

```javascript
function createCar(make, model, year) {
  return {
    make,
    model,
    year,
    getInfo: function() {
      return `${this.year} ${this.make} ${this.model}`;
    }
  };
}

const myCar = createCar('Honda', 'Civic', 2022);
console.log(myCar.getInfo()); // "2022 Honda Civic"
```

In this example, `createCar` is a factory function that takes three arguments: `make`, `model`, and `year`. It returns an object that has properties for `make`, `model`, and `year`, as well as a method `getInfo` that returns a string representation of the car's make, model, and year.

To create a new car object, we simply call the `createCar` function with the appropriate arguments, and assign the returned object to a variable (`myCar` in this case). We can then call the `getInfo` method on the `myCar` object to get a string representation of the car's make, model, and year.

Here's an example of a factory function that returns a function:

```javascript
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // output: 10
console.log(triple(5)); // output: 15
```

Factory functions can be useful in situations where you need to create many similar objects, or where you want to encapsulate the creation of an object so that it can be customized or reused in different contexts.

Readings:

- [What are factory functions in JavaScript ?](https://www.geeksforgeeks.org/what-are-factory-functions-in-javascript/)

- [JavaScript Factory Functions](https://www.javascripttutorial.net/javascript-factory-functions/)