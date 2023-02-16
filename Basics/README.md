# Basics

| Contents |
| :--- |
| [Adding/Importing JS to the Website](#addingimporting-js-to-the-website) |
| [Introducing Variables and Constants](#introducing-variables-and-constants) |
| [Working with Variables and Operators](#working-with-variables-and-operators) |
| [Data Types](#data-types) |
| [Code Styles, Conventions & Syntax](#code-styles-conventions--syntax) |
| [Functions in JavaScript](#functions-in-javascript) |
| [Arrays](#arrays)|
| [Importing JavaScript with `defer` and `async`](#importing-javascript-with-defer-and-async) |
| [Efficient Development & Debugging](#efficient-development--debugging) |
| [ES5 v ES6+](#es5-v-es6) |
| [`var` vs `let` & `const`](#var-vs-let--const) |
| [Understanding Hoisting](#understanding-hoisting) |
| [Strict Mode and Writing Good Code](#strict-mode-and-writing-good-code) |

&nbsp;

:abacus: [Understand with Code](summary-with-code/script.js)

:notebook_with_decorative_cover: [Projects](projects/)

## Adding/Importing JS to the Website

1. The ***script*** tag

The `<script>` tag is what we use to includes our JavaScript. It's a lot like the `<link>` tag you've already been using to include your CSS files.

Here's a very basic snippet of JavaScript using the script tag. This JavaScript is written directly into our HTML page. It will call and alert box as soon as the page loads.

```html
<script type="text/javascript">
  alert("This alert box was called with the onload event");
</script>
```

> When using the script tag, we must always use the attribute name and value of type="text/javascript".

2. Using the ***script*** tag to include an external JavaScript file

To include an external JavaScript file, we can use the script tag with the attribute src. The value for the `src` attribute should be the path to your JavaScript file.

In both above ways, generally, JavaScript code can go inside of the document `<head>` section in order to keep them contained and out of the main content of your HTML document.

However, if your script needs to run at a certain point within a page’s layout, like when using `document.write` to generate content, you should put it at the point where it should be called, usually within the `<body>` section.

Readings:

- [How To Add JavaScript to HTML - Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-add-javascript-to-html)

- [Including JavaScript In Your Page](http://web.simmons.edu/~grabiner/comm244/weeknine/including-javascript.html)

- [How to add JavaScript to HTML - JavaTpoint](https://www.javatpoint.com/how-to-add-javascript-to-html)

## [Introducing Variables and Constants](https://drive.google.com/uc?export=view&id=1IxGxVMNQG_Ljvlk87Dn4v3CFtOV2qENx)

Readings:

- [JavaScript Variables and Constants](https://www.programiz.com/javascript/variables-constants)

- [Variables and Constants](https://sabe.io/classes/javascript/variables-constants)

## [Declaring and Defining Variables](https://drive.google.com/uc?export=view&id=1FvffAfSGnktjJwf9r3hHrQy8_I3-WBgZ)

Readings:

- [Let’s talk about semicolons in JavaScript](https://www.freecodecamp.org/news/lets-talk-about-semicolons-in-javascript-f1fe08ab4e53/)

- [The Use of the JavaScript Semicolon](https://betterprogramming.pub/the-use-of-the-javascript-semicolon-843fd5e94d0e)

## [Working with Variables and Operators](https://drive.google.com/uc?export=view&id=1_3XRDc2Zm3zK-0QpjHd7GY3BlclZpehB)

### Useful Points

1. Strings can also be compared with greater than (`>`) or lower/smaller than (`<`) operators.

    JavaScript compares strings based on standard lexicographical ordering, using Unicode values. That means that `b` is greater than `a` for instance.

    JavaScript always looks at the first character and only considers other characters if the first character is similar. In addition, capital characters are considered to be smaller than lowercase characters.

    ```javascript
    'ab' > 'aa' // true
    'a' > 'B' // true
    'a' > 'b' // false
    ```

2. [Beware When Comparing Objects & Arrays for Equality.](https://drive.google.com/uc?export=view&id=1jpVtZ8AAdzrOmghqubDAJ4-Tyy4j8Q1Y)

    ```javascript
    let obj1 = {name: 'XYZ'};
    let obj2 = {name: 'XYZ'};
    console.log(obj1 == obj2); // false
    console.log(obj1 === obj2) // false

    let arr1 = ['hello', 'world']
    let arr2 = ['hello', 'world']
    console.log(arr1 == arr2); // false
    console.log(arr1 === arr2) // false
    ```

    Object and Arrays, both are of type `object` and objects are not compared based on their values but based on the references of the variables. Hence, equality does not work similar to other data types.

Readings:

- [JavaScript Operators](https://www.programiz.com/javascript/operators)

- [Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

- [JavaScript Data Types: Typeof Explained](https://www.freecodecamp.org/news/javascript-data-types-typeof-explained/)

- [typeof - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

## Data Types

There are eight basic data types in JavaScript. They are:

| Data Types | Description | Example | 
| :--- | :--- | :--- |
| `String` | represents textual data | `'hello'`, `'hello World'` etc |
| `Number` | an integer or a floating-point number | `3`, `3.234`, `3e-2` etc |
| `BigInt` | an integer with arbitrary precision | `900719925124740999n`, `1n` etc |
| `Boolean` | Any of two values: true or false | `true` and `false` |
| `undefined` | a data type whose variable is not initialized | `let a;` |
| `null` | denotes a `null` value | `let a = null;` |
| `Symbol` | data type whose instances are unique and immutable | `let value = Symbol('hello');` |
| `Object` | key-value pairs of collection of data | `let student = {};` |

- The Object data type (non-primitive type) can store collections of data, whereas primitive data type can only store a single data.

- Here, all data types except Object are primitive data types, whereas Object is non-primitive.

Readings:

- [JavaScript Data Types - Programiz](https://www.programiz.com/javascript/data-types)

- [JavaScript Data Types - JavaScript Tutorial](https://www.javascripttutorial.net/javascript-data-types/)

- [JavaScript Type Conversions](https://www.programiz.com/javascript/type-conversion)

- [undefined vs null vs NaN](https://drive.google.com/uc?export=view&id=1pw-fLcy8Jdc3v7ueXHFh_0j4K0edYG_5)

## Code Styles, Conventions & Syntax

There is a difference between writing correct code (i.e. avoiding syntax errors) and writing *readable*, properly formatted code.

Here's a syntax error example:

```javascript
function greetUser {
    alert('Hi there!');
}
```

What's the problem?

This function has no parameter list `(the ())`, it should be:

```javascript
function greetUser() {
    alert('Hi there!');
}
```

Writing readable code along with correct syntax is equally important. Take this as an example:

```javascript
function greetUser() {alert('Hi there!');}
```

This would be a valid code snippet!

*Whitespace, line breaks and indentation are all totally optional!* Not required!

But of course this version of the code is more readable:

```javascript
function greetUser() {
    alert('Hi there!');
}
```

The same goes for variable definitions:

```javascript
let userName='Max';
```

would be valid. And of course you can also read it. But,

```javascript
let userName = 'Max';
```

is simply a bit more readable. It makes it easier to see where the variable name ends and the value starts.

So in general, *whitespace, adding a line break and indentation is optional* as long as you don't create syntax errors by omitting it - e.g. `functiongreet(){}` would be wrong since the function keyword can now no longer be identified.

You can also *structure longer expressions across multiple lines* to make them more readable, for example:

```javascript
let someResult = 5 + 10 - 3 + 22 - 10000 + 5.344 * 1200;
```

could be written as:

```javascript
let someResult = 5 + 10 - 3 + 
                 22 - 10000 + 5.344 * 
                 1200;
```

The same goes for long string concatenations:

```javascript
let someLongString = 'Hi, this is going to be a bit longer, ' +
                     'so maybe split it across multiple lines by ' +
                     'concatenating multiple strings!';
```

This would not be valid, it would be a syntax error:

```javascript
let someLongString = 'Hi, this is going to be a bit longer, 
                      so maybe split it across multiple lines by 
                      concatenating multiple strings!';
```

Why? Because *JavaScript can't find the end of the string in the first line* - and it doesn't look in the other lines. *Strings always have to be in one line* (or split into multiple strings, concatenated `via +`).

**What about semi-colons?**

Generally, you should place them after every expression you wrote. The exception are functions and similar code snippets where you use `{}` (exception from that rule: objects!).

Adding a semi-colon after a function wouldn't be a problem, you wouldn't get an error. But it's a common practice to NOT add semi-colons there.

## [Functions in JavaScript](https://drive.google.com/uc?export=view&id=1eV4tQnw2DLxAAZ_KN6WDTZtIC9UkSZGW)

In JavaScript, a function is a block of code that performs a specific task and can be called or invoked from elsewhere in the code. Functions are a fundamental building block of the language and are used extensively to create reusable code and modularize large programs.

In JavaScript, functions can be declared in two ways:

1. **Function Declarations**: This is the traditional way to define a function, using the `function` keyword followed by a name, a set of parameters in parentheses, and a function body in curly braces. For example:

```javascript
function myFunction(param1, param2) {
    // Function body
    return param1 + param2;
}
```

2. **Function Expressions**: This is a newer way to define a function, which involves assigning a function to a variable or a property of an object. Function expressions are often used to create anonymous functions, which can be passed as arguments to other functions. For example:

```javascript
let myFunction = function(param1, param2) {
    // Function body
    return param1 + param2;
};
```

Functions can also have optional parameters, which are specified in the function declaration and can be used to provide default values or handle variable numbers of arguments. For example:

```javascript
function myFunction(param1, param2, optionalParam) {
    if (typeof optionalParam === "undefined") {
        optionalParam = "default value";
    }
    // Function body
    return param1 + param2 + optionalParam;
}

myFunction(1, 2); // Output: "3default value"
myFunction(1, 2, "custom value"); // Output: "3custom value"
```

Functions can return values using the `return` statement, which stops the function execution and passes a value back to the caller. Functions can also access variables outside their own scope, through closures. This is a powerful feature that allows functions to maintain state and create private variables.

Finally, JavaScript supports higher-order functions, which are functions that take other functions as arguments or return functions as values. Higher-order functions are a key feature of functional programming and are often used to create flexible and reusable code.

Readings:

- [JavaScript Function and Function Expressions](https://www.programiz.com/javascript/function)

- [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)

- [JavaScript Variable Scope](https://www.programiz.com/javascript/variable-scope)

### Shadowed Variables

You learned about local ("function-internal") variables and global variables. What happens if you have this code?

```javascript
let userName = 'Max';
function greetUser(name) {
    let userName = name;
    alert(userName);
}
userName = 'Manu';
greetUser('Max');
```

This will actually show an alert that says `Max` (NOT `Manu`).

You might've expected that an error gets thrown because we use and declare `userName` more than once, and as you learned, that is not allowed.

It indeed is not allowed on the same level in the same scope. So this would fail:

```javascript
let userName = 'Max';
let userName = 'Manu';
```

Why does it work in the first code snippet though?

Because we first create a global variable `userName` via

```javascript
let userName = 'Max';
```

But then we never re-declare that on the global level (that would not be allowed). We only declare another variable inside of the function. But since variables in functions get their own scope, JavaScript does something which is called "shadowing".

It creates a new variable on a different scope, this variables does not overwrite or remove the global variable by the way, both co-exist.

When referring to `userName` inside of the `greetUser` function we now always refer to the local, shadowed variable. Only if no such local variable existed, JavaScript would fall back to the global variable.

### Indirect & Direct Function Execution

It can be confusing to see that there seem to be two ways of executing a function:

```javascript
function add() {
    something = someNum + someOtherNum;
}
```

`add()` vs `add`

It's important to understand why we have these "two ways"!

In general, you call a function that you defined by using its name (e.g. `add`) and *adding parentheses* (with any parameters the function might need, or empty parentheses if no parameters are required like in the above example).

```javascript
add()
```

This is how you execute a function from your code. Whenever JavaScript encounters this statement, it goes ahead and runs the code in the function. Period!

Sometimes however, you don't want to execute the function immediately. You rather want to "tell JavaScript" that it should execute a certain function at some point in the future (e.g. when some event occurs).

That's when you don't directly call the function but when you instead just provide JavaScript with the name of the function.

```javascript
someButton.addEventListener('click', add);
```

This snippet would tell JavaScript: "Hey, when the button is clicked, go ahead and execute add.".

```javascript
someButton.addEventListener('click', add());
```

Now, above would be wrong. Why?

Because JavaScript would encounter that line when it parses/executes your script and register the event listener and immediately execute add, because you added parentheses, that means (see above): "Please execute that function!".

Just writing add somewhere in your code would do nothing by the way:

```javascript
let someVar = 5;
add
alert('Do something else...');
```

Why?

Because you just throw the name of the function in there but you don't give any other information to JavaScript. It basically doesn't know what to do with that name ("Should I run that when a click occurs? After a certain amount of time? I don't know...") and hence JavaScript kind of ignores this statement.

## Arrays

In JavaScript, an array is a data structure that allows you to store and manipulate a collection of values, such as numbers, strings, objects, or other arrays. Arrays are an essential part of the language and are used extensively to represent lists, sets, queues, and other data structures.

In JavaScript, arrays are created using square brackets `[]` and can contain any number of elements, separated by commas. For example:

```javascript
const myArray = [1, 2, "three", { key: "value" }];
```

Arrays are 0-indexed, which means that the first element is at index 0, the second element is at index 1, and so on. You can access an element in an array using its index, like this:

```javascript
const myArray = [1, 2, 3];
console.log(myArray[0]); // Output: 1
console.log(myArray[1]); // Output: 2
console.log(myArray[2]); // Output: 3
```

You can also modify an element in an array by assigning a new value to its index:

```javascript
let myArray = [1, 2, 3];
myArray[1] = "two";
console.log(myArray); // Output: [1, "two", 3]
```

Arrays have a number of built-in methods that allow you to manipulate them in various ways. Here are some examples:

- `push` adds one or more elements to the end of an array:

    ```javascript
    let myArray = [1, 2, 3];
    myArray.push(4, 5);
    console.log(myArray); // Output: [1, 2, 3, 4, 5]

    ```
- `pop` removes and returns the last element of an array:

    ```javascript
    let myArray = [1, 2, 3];
    let lastElement = myArray.pop();
    console.log(lastElement); // Output: 3
    console.log(myArray); // Output: [1, 2]
    ```

- `concat` combines two or more arrays into a new array:

    ```javascript
    let array1 = [1, 2, 3];
    let array2 = ["four", "five"];
    let combinedArray = array1.concat(array2);
    console.log(combinedArray); // Output: [1, 2, 3, "four", "five"]
    ```

- `sort` sorts the elements of an array in place:

    ```javascript
    let myArray = [3, 1, 4, 2];
    myArray.sort();
    console.log(myArray); // Output: [1, 2, 3, 4]
    ```

- `map` creates a new array by applying a function to each element of an existing array:

    ```javascript
    let myArray = [1, 2, 3];
    let squaredArray = myArray.map(function (x) {
    return x * x;
    });
    console.log(squaredArray); // Output: [1, 4, 9]
    ```

These are just a few examples of the many array methods available in JavaScript. Arrays are a versatile and powerful data structure that can help you write clean and efficient code.

Readings:

- [JavaScript Arrays - Programiz](https://www.programiz.com/javascript/array)

- [JavaScript Arrays - W3Schools](https://www.w3schools.com/js/js_arrays.asp)

- [JavaScript Arrays - JavaScript.Info](https://javascript.info/array)

- [JavaScript Arrays - How to Create an Array in JavaScript](https://www.freecodecamp.org/news/how-to-create-an-array-in-javascript/)

## [Importing JavaScript with `defer` and `async`](https://drive.google.com/uc?export=view&id=1Ih8EM2pvZ5L7PSWH7vcTy2yJp2bJi9Co)

Readings:

- [Script Tag - async & defer - Stack Overflow](https://stackoverflow.com/questions/10808109/script-tag-async-defer/39711009#39711009)

- [Scripts: async, defer - JavaScript.Info](https://javascript.info/script-async-defer)

- [Async & Defer — How to Load JavaScript Properly](https://javascript.plainenglish.io/async-and-defer-the-complete-guide-to-loading-javascript-properly-ce6edce1e6b5)

- [Efficiently load JavaScript with defer and async](https://flaviocopes.com/javascript-async-defer/)

## Efficient Development & Debugging

| Write Code Efficiently | Find Help | Debug Your Code |
| :--- | :--- | :--- |
| Work in a productive environment (i.e. IDE, editor)| Use MDN | An error message! Don't panic instead read and utilize error messages |
| Auto-format code & use shortcuts | Learn how to google (seriously!) | Use console.log() to gain insights into your code (flow) |
| Use auto-completion and hints | Ask proper questions, help others | Use the (Chrome) debugging tools |
| Explore extensions & settings | Trial & Error | Use your IDEs debugging capabilities |

Readings:

- [Google Chrome DevTools Docs](https://developers.google.com/web/tools/chrome-devtools/)

- [Debugging in the browser](https://javascript.info/debugging-chrome)

- [The Beginner’s Guide to Chrome Developer Tools](https://nira.com/chrome-developer-tools/)

- [Debug in VSCode](https://code.visualstudio.com/docs/editor/debugging)

## [ES5 v ES6+](https://drive.google.com/uc?export=view&id=1WzbGASGJu2izPnRer54XkeEkMWrwroL9)

ES5 (ECMAScript 5) and ES6 (ECMAScript 2015) are two different versions of the ECMAScript specification that define the syntax and behavior of JavaScript. ES6 is a newer version that introduced several significant changes to the language compared to ES5.

Here are some of the key differences between ES5 and ES6:

1. **Syntax**: ES6 introduced new syntax features such as arrow functions, template literals, and the spread operator, which make it easier and more concise to write code.

2. **let and const**: In ES5, the only way to declare variables was with the var keyword. In ES6, the let and const keywords were introduced, which offer more fine-grained control over variable scoping and immutability.

3. **Classes**: ES6 introduced a new syntax for defining classes in JavaScript, which is similar to class definitions in other object-oriented programming languages.

4. **Modules**: ES6 introduced a standardized module system for JavaScript, which makes it easier to organize and reuse code across different files.

5. **Promises**: ES6 introduced the Promise object, which provides a standardized way of handling asynchronous operations in JavaScript.

6. **Default** function parameters: ES6 allows developers to define default values for function parameters, which makes it easier to write more robust and flexible functions.

7. **Destructuring**: ES6 introduced a new syntax for destructuring objects and arrays, which makes it easier to extract values from complex data structures.

Overall, ES6 introduced several significant changes to the language that make it more powerful and easier to use, especially for larger and more complex projects. However, because ES6 is a newer version, not all browsers and environments fully support its features, so it may be necessary to use tools like Babel to transpile ES6 code to ES5 for broader compatibility.

Readings:

- [ES5 vs. ES6 in JavaScript](https://medium.com/sliit-foss/es5-vs-es6-in-javascript-cb10f5fd600c)

- [ES5 vs ES6 (with example code)](https://medium.com/recraftrelic/es5-vs-es6-with-example-code-9901fa0136fc)

## [`var` vs `let` & `const`](https://drive.google.com/uc?export=view&id=1VgaUD6olnN1Rq9mk3pBwVrimD6TJVG0v)

In JavaScript, `var`, `let`, and `const` are used to declare variables, but they have some differences in their behavior.

`var` is the oldest way of declaring variables in JavaScript. It has function scope and hoisting, which means that a `var` variable declared inside a function is only accessible within that function, and it can be declared after it's used in the code.

`let` and `const` were introduced in ECMAScript 6 (ES6) and have block scope, which means that a `let` or `const` variable declared inside a block (a pair of curly braces) is only accessible within that block. They do not have hoisting, which means that they need to be declared before they are used in the code.

The main difference between `let` and `const` is that let can be reassigned a new value, while `const` cannot be reassigned. This means that `const` should be used when you want to declare a variable that will never be reassigned. However, note that for objects and arrays declared with `const`, you can still modify their properties or elements.

```javascript
// var example
function varExample() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
}

// let example
function letExample() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
}

// const example
function constExample() {
    const x = 10;
    // x = 20; // Error: Assignment to constant variable.
    const person = { name: 'John', age: 30 };
    person.age = 31; // This is allowed
    console.log(person); // Output: { name: 'John', age: 31 }
}
```

Readings:

- [Var, Let, and Const – What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

## Understanding Hoisting

Hoisting is a JavaScript mechanism that moves variable and function declarations to the top of their scope, before the code is executed. This means that regardless of where the declarations are in the code, they are processed first and become available to the rest of the code in that scope.

In the case of function declarations, the entire function is hoisted, including its body. This means that you can call the function before it is declared in the code, like this:

```javascript
myFunction(); // This works because myFunction is hoisted

function myFunction() {
    console.log("Hello world!");
}
```

In the case of variable declarations, only the variable name is hoisted, not its value. This means that if you try to access the variable before it is declared, it will have a value of `undefined`. For example:

```javascript
console.log(x); // Output: undefined
var x = 10;
```

In the above code, the variable `x` is declared with `var` after it is used in the `console.log` statement. However, because of hoisting, the variable name `x` is hoisted to the top of the scope, and its value is `undefined` until it is assigned the value `10`.

***It's important to note that only declarations are hoisted, not initializations. So, in the following code, only the variable declaration is hoisted, but the assignment is not:***

```javascript
console.log(x); // Output: undefined
var x; // Declaration is hoisted
x = 10; // Initialization is not hoisted
```

To avoid confusion and improve code readability, it's generally recommended to declare variables and functions at the beginning of the scope where they are used, instead of relying on hoisting.

Readings:

- [JavaScript Hoisting](https://www.programiz.com/javascript/hoisting)

## Strict Mode and Writing Good Code

Strict mode is a feature in JavaScript that allows you to opt in to a stricter, more secure version of the language. When you enable strict mode, the JavaScript interpreter enforces a set of rules that help prevent common errors and discourage bad coding practices.

To enable strict mode, you need to add the string `"use strict"` at the beginning of your JavaScript file or function. For example:

```javascript
"use strict";

function myFunction() {
    // Code in strict mode
}
```

Here are some of the key features of strict mode:

1. Strict mode eliminates some silent errors that can occur in normal JavaScript, such as accidental creation of global variables and duplicate function parameters.

2. Strict mode makes it easier to write "secure" JavaScript, by disallowing the use of certain dangerous features, such as `eval` and `with`.

3. Strict mode changes the behavior of some built-in features in JavaScript. For example, in strict mode, assigning a value to a non-writable property or a getter-only property will throw a TypeError.

4. Strict mode changes the behavior of `this` inside functions. In normal JavaScript, the value of `this` inside a function depends on how the function is called. In strict mode, if a function is called without an object context, `this` will be `undefined` instead of the global object.

Here's an example of how strict mode can help prevent errors:

```javascript
"use strict";

function myFunction() {
    x = 10; // Error: variable x is not declared
}

myFunction();
```

In the above code, `x` is assigned a value without being declared with `var`, `let`, or `const`. In normal JavaScript, this would create a global variable, which can be a source of bugs and security vulnerabilities. In strict mode, however, this code will throw an error, making the mistake more visible and preventing unintended side effects.

Overall, strict mode is a useful feature in JavaScript that can help you write more secure and reliable code.

Readings:

- [JavaScript "use strict"](https://www.programiz.com/javascript/use-strict)