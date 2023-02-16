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

&nbsp;

:abacus: [Understand with Code](summary-with-code/script.js)

:notebook_with_decorative_cover: [Projects](projects/)

## Adding/Importing JS to the Website

1. The ***script*** tag

The `<script>` tag is what we use to includes our JavaScript. It's a lot like the `<link>` tag you've already been using to include your CSS files.

Here's a very basic snippet of JavaScript using the script tag. This JavaScript is written directly into our HTML page. It will call and alert box as soon as the page loads.

```
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

- [Var, Let, and Const – What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

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

    ```
    'ab' > 'aa' // true
    'a' > 'B' // true
    'a' > 'b' // false
    ```

2. [Beware When Comparing Objects & Arrays for Equality.](https://drive.google.com/uc?export=view&id=1jpVtZ8AAdzrOmghqubDAJ4-Tyy4j8Q1Y)

    ```
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

```
function greetUser {
    alert('Hi there!');
}
```

What's the problem?

This function has no parameter list `(the ())`, it should be:

```
function greetUser() {
    alert('Hi there!');
}
```

Writing readable code along with correct syntax is equally important. Take this as an example:

```
function greetUser() {alert('Hi there!');}
```

This would be a valid code snippet!

*Whitespace, line breaks and indentation are all totally optional!* Not required!

But of course this version of the code is more readable:

```
function greetUser() {
    alert('Hi there!');
}
```

The same goes for variable definitions:

```
let userName='Max';
```

would be valid. And of course you can also read it. But,

```
let userName = 'Max';
```

is simply a bit more readable. It makes it easier to see where the variable name ends and the value starts.

So in general, *whitespace, adding a line break and indentation is optional* as long as you don't create syntax errors by omitting it - e.g. `functiongreet(){}` would be wrong since the function keyword can now no longer be identified.

You can also *structure longer expressions across multiple lines* to make them more readable, for example:

```
let someResult = 5 + 10 - 3 + 22 - 10000 + 5.344 * 1200;
```

could be written as:

```
let someResult = 5 + 10 - 3 + 
                 22 - 10000 + 5.344 * 
                 1200;
```

The same goes for long string concatenations:

```
let someLongString = 'Hi, this is going to be a bit longer, ' +
                     'so maybe split it across multiple lines by ' +
                     'concatenating multiple strings!';
```

This would not be valid, it would be a syntax error:

```
let someLongString = 'Hi, this is going to be a bit longer, 
                      so maybe split it across multiple lines by 
                      concatenating multiple strings!';
```

Why? Because *JavaScript can't find the end of the string in the first line* - and it doesn't look in the other lines. *Strings always have to be in one line* (or split into multiple strings, concatenated `via +`).

**What about semi-colons?**

Generally, you should place them after every expression you wrote. The exception are functions and similar code snippets where you use `{}` (exception from that rule: objects!).

Adding a semi-colon after a function wouldn't be a problem, you wouldn't get an error. But it's a common practice to NOT add semi-colons there.

## [Functions in JavaScript](https://drive.google.com/uc?export=view&id=1eV4tQnw2DLxAAZ_KN6WDTZtIC9UkSZGW)

Readings:

- [JavaScript Function and Function Expressions](https://www.programiz.com/javascript/function)

- [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)

- [JavaScript Variable Scope](https://www.programiz.com/javascript/variable-scope)

- [JavaScript Hoisting](https://www.programiz.com/javascript/hoisting)

### Shadowed Variables

You learned about local ("function-internal") variables and global variables. What happens if you have this code?

```
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

```
let userName = 'Max';
let userName = 'Manu';
```

Why does it work in the first code snippet though?

Because we first create a global variable `userName` via

```
let userName = 'Max';
```

But then we never re-declare that on the global level (that would not be allowed). We only declare another variable inside of the function. But since variables in functions get their own scope, JavaScript does something which is called "shadowing".

It creates a new variable on a different scope, this variables does not overwrite or remove the global variable by the way, both co-exist.

When referring to `userName` inside of the `greetUser` function we now always refer to the local, shadowed variable. Only if no such local variable existed, JavaScript would fall back to the global variable.

### Indirect & Direct Function Execution

It can be confusing to see that there seem to be two ways of executing a function:

```
function add() {
    something = someNum + someOtherNum;
}
```

`add()` vs `add`

It's important to understand why we have these "two ways"!

In general, you call a function that you defined by using its name (e.g. `add`) and *adding parentheses* (with any parameters the function might need, or empty parentheses if no parameters are required like in the above example).

```
add()
```

This is how you execute a function from your code. Whenever JavaScript encounters this statement, it goes ahead and runs the code in the function. Period!

Sometimes however, you don't want to execute the function immediately. You rather want to "tell JavaScript" that it should execute a certain function at some point in the future (e.g. when some event occurs).

That's when you don't directly call the function but when you instead just provide JavaScript with the name of the function.

```
someButton.addEventListener('click', add);
```

This snippet would tell JavaScript: "Hey, when the button is clicked, go ahead and execute add.".

```
someButton.addEventListener('click', add());
```

Now, above would be wrong. Why?

Because JavaScript would encounter that line when it parses/executes your script and register the event listener and immediately execute add, because you added parentheses, that means (see above): "Please execute that function!".

Just writing add somewhere in your code would do nothing by the way:

```
let someVar = 5;
add
alert('Do something else...');
```

Why?

Because you just throw the name of the function in there but you don't give any other information to JavaScript. It basically doesn't know what to do with that name ("Should I run that when a click occurs? After a certain amount of time? I don't know...") and hence JavaScript kind of ignores this statement.

## Arrays

An array is an object that can store multiple values at once. For example,

```
const words = ['hello', 'world', 'welcome'];
```

Here, words is an array. The array is storing 3 values.

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