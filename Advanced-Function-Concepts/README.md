# Advanced Function Concepts

| Contents |
| :--- |
| [Pure Functions and Side-Effect](#pure-functions-and-its-side-effect) |
| [Factory Functions](#factory-functions) |
| [Closures](#closures) |

&nbsp;

:abacus: [Understand with Code](summary-with-code/app.js)

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

## [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

In JavaScript, a closure is created when a function is defined inside another function and the inner function accesses variables from the outer function's scope. The inner function has access to the outer function's variables, parameters, and even other inner functions, even after the outer function has returned. This behavior is possible because of how JavaScript handles scope and variable declaration.

Here's an example to illustrate closures in JavaScript:

```javascript
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

const counter = createCounter();

counter(); // logs 1
counter(); // logs 2
counter(); // logs 3
```

In this example, `createCounter()` is a function that returns another function called `increment()`. Inside `createCounter()`, we define a variable called `count` and initialize it to 0. We also define `increment()`, which increments `count` by 1 and logs its value to the console.

We then return `increment()`, which means that calling `createCounter()` actually returns the `increment()` function. We assign this function to a variable called `counter`, which allows us to call `increment()` as many times as we want.

When we call `counter()` for the first time, it logs `1` to the console. This is because `counter()` is actually calling the `increment()` function that was defined inside `createCounter()`. This inner function has access to the `count` variable that was defined in the outer function's scope, so it can increment and log its value.

When we call `counter()` again, it logs `2` to the console, because the `count` variable is still accessible to the `increment()` function. We can call `counter()` as many times as we want, and the value of `count` will continue to increment and be logged to the console.

This is an example of a closure in JavaScript, because the `increment()` function has access to the `count` variable even after `createCounter()` has returned. The inner function "closes over" the outer function's scope and remembers its variables, allowing us to create a counter that persists between function calls.

> All functions in JavaScript are closures. This is because every function in JavaScript has access to the variables and parameters of its outer or parent scope, even after the outer function has returned.

### Closures and Memory Management

If every function logs all surrounding variables, it could potentially lead to a negative impact on memory, especially in large applications with many variables. A function may log in many variables that it doesn't actually use, but since the function closes over them, JavaScript won't get rid of them.

This could result in a memory issue, but modern JavaScript engines are designed to optimize this behavior by tracking variable usage. If a variable isn't used by any functions or elsewhere in the code, the engine will safely dispose of it. This way, you don't need to manually reset all unused variables as the engine will handle it for you. The JavaScript engines are intelligent and efficient enough to optimize this process without affecting your program's stability.

Readings:

- [Learn JavaScript Closures with Code Examples](https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/)

- [JavaScript Closures](https://www.javascripttutorial.net/javascript-closure/)

### Immediately Invoked Function Expression (IIFE)

In JavaScript, especially in older scripts, you sometimes find a pattern described as **IIFEs**. **IIFE** stands for "Immediately Invoked Function Expression" and the pattern you might find looks like this (directly in a script file):

```javascript
(function() {
    var age = 30;
    console.log(age); // 30
})()

console.log(age); // Error: "age is not defined"
```

What's that?

We see a function expression which calls itself (please note the `()` right after the function).

It's NOT a function declaration because it's wrapped in `()`. That happens on purpose since you can't immediately execute function declarations.

**But why would you write some code?**

Please note that the snippet uses `var`, not `let` or `const`. Remember that `var` does not use block scope but only differ between global and function scope.

As a consequence, it was hard to control where variables were available. Variables outside of function always were available globally. Well, IIFEs solve that problem since the script (or parts of it) essentially are wrapped in a function and function scope is used.

**Nowadays, this is not really required anymore.** With `let` and `const` we got block scope and if you want to restrict where variables are available (outside of functions, `if` statements, `for` loops etc, where you automatically have scoped variables since these structures create blocks), you can simply wrap the code that should have scoped variables with `{}`.

```javascript
{
    const age = 30;
    console.log(age); // 30
}

console.log(age); // Error: "age is not defined"
```

Not something you see too often but something that is possible.