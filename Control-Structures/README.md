# Control Structures (if..else Statements, Loops & Error Handling)

| Contents |
| :--- |
| [Conditional Statements - if, if...else & if...else if...else](#conditional-statements---if-ifelse--ifelse-ifelse) |
| [Loops in JS](#loops-in-js) |
| [Error Handling with "try-catch"](#error-handling-with-try-catch) |

&nbsp;

:abacus: [Understand with Code](summary-with-code/script.js)

:notebook_with_decorative_cover: [Projects](projects/)

## Conditional Statements - if, if...else & if...else if...else

Always keep in mind that `condition` in

```javascript
if (condition) { ... }
```

simply has to be a **boolean value**.

Often, you'll generate such a boolean value with the help of `===`, `>`, `<` etc. All these operators yield boolean values (without changing the variables/values you're using them on).

Since `if` only wants a boolean, you of course **don't have to use such an operator**. If you already got a variable that holds a boolean, you can use it without any extra operator.

Example:

```javascript
const isLoggedIn = true;
if (isLoggedIn) {
    // This code will execute because isLoggedIn is true => A valid condition
}
```

You could write

```javascript
const isLoggedIn = true;
if (isLoggedIn === true) {
    ...
}
```
but that would be redundant. You'd generate another new boolean where you already got one.

You can use the ! operator to negate ("invert") the value:

```javascript
const isLoggedIn = true;
if (!isLoggedIn) {
    // This code will NOT execute because isLoggedIn is true but ! inverts it (in this check)
} else {
    // This would execute because !isLoggedIn yields false => else block executes
}
```
Again, that would be similar to:

```javascript
const isLoggedIn = true;
if (isLoggedIn !== true) {
    // This would NOT execute
} else {
    // This would execute because isLoggedIn is true and hence !== true yields false
}
```

But again, that would be redundant.

### [Falsy & Truthy Values](https://drive.google.com/uc?export=view&id=19VJ__vz6UQcPxO64cqkJvQ4DTcoqEaDr)

It's important to understand that JavaScript is able to use variables in conditions, even without comparison operators.

This is kind of obvious, if we consider a boolean variable, for example:

```javascript
let isLoggedIn = true;
if (isLoggedIn) {
    ...
}
```

Since if just wants a condition that returns true or false, it makes sense that you can just provide a boolean variable or value and it works without the extra comparison (`if (isLoggedIn === true)`, that would also work but is redundant).

Whilst the above example makes sense, it can be confusing when you encounter code like this for the first time:

```javascript
let userInput = 'Max';
if (userInput) {
    ... // this code here will execute because 'Max' is "truthy" (all strings but empty strings are)
}
```

***JavaScript tries to coerce ("convert without really converting") the values you pass to `if` (or other places where conditions are required) to boolean values.***

That means that it tries to interpret `'Max'` as a boolean and there it follows the rules which is `0` is treated as false, all other numbers are treated as true etc.

It's important to understand that JavaScript doesn't really convert the value though.

`userInput` still holds `'Max'` after being used in a condition like shown above - it's not converted to a boolean. That would be horrible because you'd invisibly lose the values stored in your variables.

Instead,

```javascript
if (userInput) { ... }
```

is basically transformed (behind the scenes) to

```javascript
if (userInput === true) {
```

And here, the `=== operator` generates and returns a boolean. It also doesn't touch the variable you're comparing, `userInput` stays a string. But it generates a new boolean which is temporarily used in the comparison.

And that's exactly what JavaScript automatically does when it finds something like this:

```javascript
if (userInput) { ... }
```

### [Ternary Operators/Conditional Expressions](https://drive.google.com/uc?export=view&id=1XL8s7xPM1w5Honj2TfCdaljEbDHdIVqD)

***[Click Here](https://drive.google.com/uc?export=view&id=1vIjIWjVCoshekcTHqsbIft6AmI_Xs6aM) to know about logical operator tricks.***

```javascript
const userName = 'Max';
const altName = '';
console.log(userName === 'Max'); // generates and prints a boolean => true
console.log(userName); // wasn't touched, still is a string => 'Max'
 
console.log(userName || null); // userName is truthy and therefore returned by || => 'Max'
console.log(altName || 'Max'); // altName is falsy (empty string), hence 'Max' is returned => 'Max'
console.log(altName || ''); // both altName and '' are falsy but if the first operand is falsy, the second one is always returned => ''
console.log(altName || null || 'Anna'); // altName and null are falsy, 'Anna' is returned => 'Anna'
 
console.log(userName && 'Anna'); // userName is truthy, hence second (!) value is returned => 'Anna'
console.log(altName && 'Anna'); // altName is falsy, hence first value is returned => ''
console.log(userName && ''); // userName is truthy, hence second value is returned => ''
```

**Always keep in mind, NO operator** (neither `===`, `>` etc. nor `&&` or `||`) changes the variable you might be using in the comparison. In the above examples, the values stored in userName and altName are NEVER changed.

`===`, `>` etc. just **generate new boolean values** which are used in the comparison. `||` and `&&` **generate NO booleans**, they just treat the **values before and after them as conditions** (which therefore need to yield boolean values and are coerced to booleans if required).

Because of the above described behaviors, you often use `||` in JavaScript to assign default/fallback values to variables or constants:

```javascript
const enteredValue = ''; // let's assume this is set based on some input provided by the user, therefore it might be an empty string
 
const userName = enteredValue || 'PLACEHOLDER'; // will assign 'PLACEHOLDER' if enteredValue is an empty string
```

Readings:

- [Making decisions in your code — conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

- [JS Conditional Statements](https://www.freecodecamp.org/news/javascript-if-else-and-if-then-js-conditional-statements/)

- [JavaScript if...else Statement](https://www.programiz.com/javascript/if-else)

- [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

- [JavaScript Ternary Operator](https://www.programiz.com/javascript/ternary-operator)

- [2ality – JavaScript and more](https://2ality.com/2012/09/expressions-vs-statements.html)

- [Switch Case in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

- [JavaScript Switch Case – JS Switch Statement Example](https://www.freecodecamp.org/news/javascript-switch-case-js-switch-statement-example/)

## [Loops in JS](https://drive.google.com/uc?export=view&id=1vi7o5Gb2aXUHH91UqtbgQUoBJFZSiLLo)

Loops are a fundamental programming concept that allow you to execute a block of code repeatedly. In JavaScript, there are several types of loops that you can use:

| for loop | for-of loop | for-in loop | while loop |
| :--- | :--- | :--- | :--- |
| Execute code a certain amount of times (with counter variable) | Execute for every element in an array | Execute for every key in an object | Execute code as long as a condition is true |
|<pre>for(let i=0; i < 3; i++) {<br/>  console.log(i)<br/>}</pre>|<pre>for (const el of array) {<br/>  console.log(el)<br/>}</pre>|<pre>for (const key in obj) {<br/>  console.log(key, obj[key]);<br/>} </pre>|<pre>while(isLoggedIn) {<br/>  ...<br/>} </pre>|

Readings:

- [JavaScript Loops Explained](https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/)

- [How to Use Break & Continue Statements in JavaScript](https://javascript.plainenglish.io/hot-to-use-break-continue-statements-in-javascript-9b6d30e56deb)

- [Label Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)

## [Error Handling with "try-catch"](https://drive.google.com/uc?export=view&id=1_rqoo-T7NPfZPsU6Dc1qofa4j4g3bBtP)

In JavaScript, you can use the `try...catch...finally` statement to handle errors that occur during the execution of your code. Here is how it works:

- The `try` block contains the code that you want to execute. If an error occurs during the execution of this code, control is passed to the `catch` block.

- The `catch` block contains the code that you want to execute when an error occurs. The error object is passed to this block as a parameter, and you can use it to handle the error. You can also use the `catch` block to log the error or display an error message to the user.

- The `finally` block contains the code that you want to execute after the `try` and `catch` blocks have executed, regardless of whether an error occurred or not. This block is optional, and you can omit it if you don't need to execute any code after the `try` and `catch` blocks.

Here is an example of using `try...catch...finally` to handle errors in JavaScript:

```javascript
try {
    // code that may throw an error
    const result = someFunction();
} catch (error) {
    // code to handle the error
    console.error('An error occurred:', error);
} finally {
    // code to execute after the try and catch blocks
    console.log('Execution complete.');
}
```

In this example, the `try` block contains a call to a function that may throw an error. If an error occurs, control is passed to the `catch` block, which logs the error to the console. The `finally` block is then executed, which logs a message to the console to indicate that the code has finished executing.

Using `try...catch...finally` is a good practice to handle errors in your code, as it helps to prevent your application from crashing or displaying unexpected behavior to the user.

Readings:

- [Error handling, "try...catch"](https://javascript.info/try-catch)

- [JavaScript try...catch...finally Statement](https://www.programiz.com/javascript/try-catch-finally)

- [JavaScript throw Statement](https://www.programiz.com/javascript/throw)

* * *

[<img align="center" src="../images/left_arrow.png" height="20" width="20"/> Basic](../Basics/README.md)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [<img align="center" src="../images/home.png" height="20" width="20"/> Home](../README.md) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[More on Functions <img align="center" src="../images/right_arrow.png" height="20" width="20"/>](../More-on-Functions/README.md)