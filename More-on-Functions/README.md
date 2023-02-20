# More on Functions

| Contents |
| :--- |
| [Parameters & Arguments](#parameters--arguments) |
| [Functions vs Methods](#functions-vs-methods) |
| [Functions are Objects!](#functions-are-objects) |
| [Function Expressions: Storing Functions in Variables](#function-expressions-storing-functions-in-variables) |
| [Anonymous Functions](#anonymous-functions) |
| [Arrow Functions](#arrow-functions) |
| [Default parameter in JavaScript](#default-parameter-in-javascript) |
| [Introducing Rest Parameters ("Rest Operator")](#introducing-rest-parameters-rest-operator) |
| [Creating Functions Inside of Function](#creating-functions-inside-of-function) |
| [Understanding Callback Functions](#understanding-callback-functions) |
| [Working with `bind()`](#working-with-bind) |

&nbsp;

:notebook_with_decorative_cover: [Projects](projects/)

## Parameters & Arguments

Both parameters and arguments are used in functions, but they refer to different concepts.

A **parameter** is a variable in the function definition that represents a value passed to the function. It defines what data type and name the function is expecting as input. In other words, a parameter is a placeholder for a value that will be provided to the function when it is called.

An **argument** is the actual value that is passed to the function when it is called. It is the value that is substituted for the corresponding parameter in the function definition. In other words, an argument is the actual data that is provided to the function when it is called.

To summarize, a parameter is a variable in the function definition that represents a value that will be provided to the function, while an argument is the actual value that is passed to the function. Parameters are used to define the function, while arguments are used to call the function with specific values.

Example,

```javascript
function addNumbers(num1, num2) {
    return num1 + num2;
}
```

In this example, `num1` and `num2` are the parameters of the `addNumbers()` function. They define what input the function expects and what data types those inputs should be. When the function is called, the actual values that are passed in are called *arguments*.

```javascript
let sum = addNumbers(5, 10);
```

In this example, `5` and `10` are the arguments that are passed to the `addNumbers()` function. These values are substituted for the corresponding parameters `num1` and `num2` in the function definition. The `addNumbers()` function returns the sum of the two numbers, which is then assigned to the `sum` variable.

So, to summarize, in this example, `num1` and `num2` are the parameters of the `addNumbers()` function, and `5` and `10` are the arguments that are passed to the function.

## Functions vs Methods

Both functions and methods are used to group a set of related code statements that perform a specific task. However, there are some differences between the two concepts.

A **function** is a block of code that performs a specific task and can be called from anywhere in the program. It is a standalone entity that can be reused multiple times within the program. Functions are typically defined outside of a class or object and can be passed values and return values as necessary.

A **method** is a function that is defined within a class or object. It is a member function of an object that performs a specific task and can be called on an instance of that object. A method can access and modify the state of the object it belongs to, and can also access other methods and properties of that object.

To summarize, functions are standalone entities that can be called from anywhere in the program, while methods are functions that are defined within a class or object and operate on the state of that object.

Example:

```javascript
// Defining a function
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Calling the function
let sum = addNumbers(5, 10);

// an object with function defined in it
let person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

let fullName = person.getFullName();
```

In this example, `addNumbers()` is a function that can be called from anywhere in the program using the function name. In other case, `person` is an object with two properties (`firstName` and `lastName`) and a method (`getFullName`). The `getFullName` method is defined as a function that is assigned to the `getFullName` property of the person object. This function returns the concatenation of the `firstName` and `lastName` properties of the object, using the this keyword to refer to the object itself.

To call the `getFullName` method, we simply use the dot notation to access the method property of the `person` object.

## Functions are Objects!

In JavaScript, functions are called **Function Objects** because they are objects. Just like objects, functions have properties and methods, they can be stored in a variable or an array, and be passed as arguments to other functions.

Let's run a small test and confirm that a function is indeed an object instance:

```javascript
function message() {
    console.log("Hello World!");
}
console.log(typeof message);               // => function
console.log(message instanceof Object);    // => true
```

Readings:

- [JavaScript Function Objects](https://www.dofactory.com/javascript/function-objects)

- [JS Functions Are Objects](https://academind.com/tutorials/javascript-functions-are-objects)

## Function Expressions: Storing Functions in Variables

A function expression is a way to create a function and assign it to a variable. This can be useful when you need to create a function on the fly or pass it as an argument to another function.

Here is an example of a function expression:

```javascript
const add = function (a, b) {
    return a + b;
};
```

In this example, we are creating a function that takes two parameters `a` and `b`, adds them together, and returns the `result`. We are then assigning this function to a variable called `add` using the `const` keyword.

```javascript
const result = add(2, 3); // result will be 5
```

We can also pass the `add` function as an argument to another function:

```javascript
function operateOnNumbers(a, b, operation) {
    return operation(a, b);
}
const result = operateOnNumbers(2, 3, add); // result will be 5
```

In this example, we have created a function called `operateOnNumbers` that takes two numbers and a function as arguments. The `operation` argument is expected to be a function that takes two numbers and returns a `result`. We pass the `add` function as the `operation` argument to `operateOnNumbers`, which then calls the add function with the `a` and `b` arguments. The result of the `add` function is then returned by `operateOnNumbers`.

click [here](https://drive.google.com/uc?export=view&id=15Mq9D-7gtIsWSJ2JFvcmK3sVd7h2VugO) to know the differences between *Function Expression vs Function Declaration*.

## Anonymous Functions

An anonymous function is a function that is defined without a name. Anonymous functions can be useful in situations where you need to create a function on the fly, such as passing a function as an argument to another function.

Here is an example of an anonymous function:

```javascript
const result = (function (a, b) {
    return a + b;
})(2, 3);
```

In this example, we are defining an anonymous function that takes two parameters `a` and `b`, adds them together, and returns the `result`. We are then immediately calling this function with the values `2` and `3` as arguments. The result of the function is then assigned to a variable called `result`.

We could also pass this anonymous function as an argument to another function:

```javascript
function operateOnNumbers(a, b, operation) {
    return operation(a, b);
}

const result = operateOnNumbers(2, 3, function (a, b) {
    return a + b;
}); // result will be 5
```

In this example, we are defining an anonymous function as the `operation` argument to the `operateOnNumbers` function. The anonymous function takes two parameters `a` and `b`, adds them together, and returns the `result`. The `operateOnNumbers` function then calls the anonymous function with the `a` and `b` arguments, and returns the `result`.

If you see, Function Expression is also using Anonymous Function for its implementation. You may define Function Expression with a name like below but it will not matter much since function's reference is passed to the variable and to execute this function, variable will be used.

```javascript
const printTest = function testFunc(){
    console.log("This is a test statement");
}

printTest(); // Output - This is a test statement
```

However, you can name a Function Expression for debugging function.

```javascript
const printTest = function (){
    console.log("This is a test statement");
    console.log(a);
}

printTest(); // Output - Uncaught ReferenceError: a is not defined at printTest (<anonymous>:3:17) at <anonymous>:6:1

const printTest = function testFunc (){
    console.log("This is a test statement");
    console.log(a);
}

printTest(); // Output - Uncaught ReferenceError: a is not defined at testFunc (<anonymous>:3:17) at <anonymous>:6:1
```

## [Arrow Functions](https://drive.google.com/uc?export=view&id=1T_7dAQvrICnfs-utEnuiYFy6niVILYuM)

An Arrow function is a concise way to write a function using the `=>` arrow syntax. Arrow functions were introduced in ES6 as a way to simplify function syntax and make it more concise.

For arrow functions, you got a couple of different syntaxes which you can use, here's a summary.

1. **Default syntax:**

```javascript
const add = (a, b) => {
    const result = a + b;
    return result; // like in "normal" functions, parameters and return statement are OPTIONAL!
};
```

> Note: Semi-colon at end, no function keyword, parentheses around parameters/arguments.

2. **Shorter parameter syntax, if exactly one parameter is received:**

```javascript
const log = message => {
    console.log(message); // could also return something of course - this example just doesn't
};
```

> Note: Parentheses around parameter list can be omitted (for exactly one argument).

3. **Empty parameter parentheses if NO arguments are received:**

```javascript
const greet = () => {
    console.log('Hi there!');
};
```

> Note: Parentheses have to be added (can't be omitted)

4. **Shorter function body, if exactly one expression is used:**

```javascript
const add = (a, b) => a + b;
```

> Note: Curly braces and return statement can be omitted, expression result is always returned automatically

5. **Function returns an object (with shortened syntax as shown in 4):**

```javascript
const loadPerson = pName => ({name: pName});
```

> Note: Extra parentheses are required around the object, since the curly braces would otherwise be interpreted as the function body delimiters (and hence a syntax error would be thrown here).

The last case can be confusing. Normally, in JavaScript, curly braces always can have exactly one meaning.

```javascript
const person = { name: 'Max' }; // Clearly creates an object
if (something) { ... } // Clearly used to mark the if statement block
```

But when using arrow functions, curly braces can have two meanings:

- Mark the function body (in default form)

- Create an object which you want to return (in shorter function body form)

To "tell" JavaScript what you want to do, wrap the expression (e.g. object creation) in parentheses like shown above.

Readings:

- [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- [Arrow functions, the basics](https://javascript.info/arrow-functions-basics)

- [JavaScript Arrow Function](https://www.programiz.com/javascript/arrow-function)

## Default parameter in JavaScript

The default parameter is a way to set default values for function parameters a value is no passed in (ie. it is undefined).

- In a function, If an argument is not provided, then its value becomes undefined. In this case, the default value that we specify is applied by the compiler.

    Example:

    ```javascript
    function greet(name = "XYZ") {
        console.log("Welcome mr. " + name);
    }
    
    greet("John"); // Welcome mr. John
    greet(); // Welcome mr. XYZ
    greet(""); // Welcome mr. 
    ```

- If we don’t use a default parameter (not available pre-ES6), then we would need to check for the existence of the variable and set it ourselves.

    ```javascript
    function greet(name) {
        if(typeof name == undefined) {
            name = "XYZ";
        }
    
    // second way is 
        name = name || "XYZ";
        console.log("Welcome mr." + name);
    }
    ```

- Below is another example of using a default parameter. Notice that it only applies when the value is undefined.

    ```javascript
    function test(num = 1) {
        console.log(num); 
    }

    test(); // 1
    test(undefined); // 1
    test(null); // null
    test(""); // ""
    test(false); // false
    test(NaN); // NaN
    ```

- We can also use another function parameter when declaring a default value.

    ```javascript
    function test(num1, num2 = num1 * 2) {
        console.log(num1 * num2);
    }
    test(2); // 8
    test(2,3); // 6
    ```

    In the above code, `num1` is accessed in default value assignment to `num2`.

- We can also use a function as a default value. Functions are first-class citizens in JavaScript and can be treated like any other variable.

    ```javascript
    function greet(name, greetMethod = defaultGreet) {
        greetMethod(name);
    }
    function defaultGreet(name) {
        console.log("default Good morning mr." + name );
    }
    function customGreet(name) {
        console.log("Custom Good morning mr" + name);
    }
    greet("John")  //default Good morning mr.John
    greet("John", customGreet); //Custom Good morning mr.John
    ```

- We can set a default value by evaluating a function and using the value returned.

    ```javascript
    function getDefaultNum() {
        return 5;    
    }
  
    function square(num = getDefaultNum() ) {
        return num * num;
    }
  
    square(10); // 100
    square(); //25
    ```

- We can have default parameters in any order, and this means we can have non-default parameters after default parameters.

    ```javascript
    function test(a = 10, b, c=100, d) {
        console.table(a, b, c, d);
    }
    test(undefined, 10); // 10, 10, 100, undefined
    test(100); // 100, undefined, 100 , undefined
    test(); // 10, undefined, 100, undefined
    ```

Readings:

- [Default Parameters in Javascript](https://levelup.gitconnected.com/default-parameter-in-javascript-4217aeba2ae1)

- [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/default_parameters)

- [What are Default Parameters in JavaScript?](https://www.scaler.com/topics/default-parameters-javascript/)

- [JavaScript Default Parameters](https://www.programiz.com/javascript/default-parameters)

## Introducing Rest Parameters ("Rest Operator")

The rest operator in javaScript allows a function to take an indefinite number of arguments and bundle them in an array, thus allowing us to write functions that can accept a variable number of arguments, irrespective of the number of parameters defined. These types of functions in JavaScript are called `variadic functions` (i.e functions of indefinite arity). *The rest operator in javaScript was introduced in ES6 (or ES2015) to handle function parameters efficiently and easily.*

The rest parameters hold all those leftover arguments that are not given a separate parameter name (i.e formally defined in function expression) By using the rest operator user can call a function with any number of arguments, no matter how it was defined.

The rest parameter always returns an array so we can use any array methods that the javascript provides us on it.

***Syntax***

The rest operator is denoted by three dots (...) as a prefix followed by the name of the parameter. Let us see the syntax of the rest operator in javaScript to understand it in a better way:

```javascript
function fname(a,b,...myRest) {
   //statements
}
```

Here, `a` and `b` are normal parameters which will map to first and second argument respectively. Whereas `myRest` is the rest parameter, that will contain contains the third, fourth, and fifth ... nth arguments i.e all the remaining arguments other than the values of `a` and `b`.

**The rest operator is always given as the last parameter and a function definition can have only one rest operator else the code throws a SyntaxError error in both cases.**

```javascript
/* error */
function fname(a,...myRest, b) {
   //statements
}

/* error */
function fname(...firstRest , a ,...secondRest) {
   //statements
}

// Uncaught SyntaxError: Rest parameter must be the last formal parameter
```

Example:

```javascript
function sumAll(...args) { // args is the name for the array
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6
```

### The `arguments` variable

There is also a special array-like object named `arguments` that contains all arguments by their index.

For instance:

```javascript
function showName() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments);

    // it's iterable
    // for(let arg of arguments) console.log(arg);
}

// 2, Julius, Caesar, Arguments(2) ['Julius', 'Caesar', callee: ƒ, Symbol(Symbol.iterator): ƒ]
showName("Julius", "Caesar");

// 1, Ilya, undefined (no second argument), Arguments ['Ilya', callee: ƒ, Symbol(Symbol.iterator): ƒ]
showName("Ilya");
```

The arguments object is not a real array but, an array-like object (i.e. it does not have any array properties except length) that contains the arguments in the form of an array that are passed to a function.

Following are some differences between the rest parameters in JavaScript and the arguments object:

- The arguments object is not an actual array, but an array-like object whereas the rest parameters are instances of the array.

- Array methods like push, pop, forEach, etc can be applied to rest parameters directly as arguments are stored in the rest parameter in an array but it throws an error in the case of the arguments object as the arguments object is an array-like object, not an actual array thus, we cannot directly use array properties on it (except length).

- The rest parameter includes only the parameters which are not given a separate name and bundles them into an array, while the arguments object includes all the arguments which are passed to a function and bundled in an array-like object.

- The argument object has an extra property precise to itself i.e. `callee property`. This property refers to the function which is currently executing. This is useful in functions with unknown names or no names (i.e. anonymous functions) and recursive functions.

Readings:

- [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

- [What is the Rest Operator in Javascript?](https://www.scaler.com/topics/rest-operator-in-javascript/)

- [Rest parameters and spread syntax](https://javascript.info/rest-parameters-spread)

- [JavaScript Rest Parameters](https://www.javascripttutorial.net/es6/javascript-rest-parameters/)

## Creating Functions Inside of Function

In JavaScript, you can define a function inside another function, which is known as a nested or inner function.

Here is an example of defining a function inside another function:

```javascript
function outerFunction(...numbers) {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    }

    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber(num)
    }

    return sum;
}
```

## Understanding Callback Functions

A callback function in javascript is a function that is passed as an argument in another function. Which is then called inside the parent function to complete a routine or an action. To put it more simply, it is a function that will be called(executed) later after its parent function(the function in which it is passed as an argument) is done executing.

Example:

```javascript
function sum(a, b) {
  console.log(a + b)
}

function operation(val1, val2, callback) {
  callback(val1, val2)
}

operation(6, 5, sum) // 11
```

In the above code, we can see in the function operation the third parameter is a callback function. We are first passing the "callback" as an argument and then calling it inside the parent function i.e., operation. Here, we have taken the "sum" as the callback function, we can create any function and pass it as the callback in the operation function.

### Need for Callback functions

Javascript is a *single-threaded* language, which means, it executes the code sequentially one line after another. However, there are some cases in which a part of the code will only run after some lines of code, i.e. it is dependent on another function. This is called *asynchronous programming*.

- We need callback functions to make sure that a function is only going to get executed after a specific task is completed and not before its completion.

    - For instance, in the case of an event listener, we first listen for a specific event, and if the function detects it, then only the callback function is executed. It's just like when you go into a restaurant, the function(action) to make a pizza will only run after you order a pizza. And in the meantime, the restaurant staff(browser or nodeJS) will do some other work.

- Callback functions are also needed to prevent running into errors because of the non-availability of some data that are needed by some other function.

    - For example, when a function fetches some data from an API that takes some time to get downloaded. We use the callback function here so that the function that needs the data will only get executed when all the required data is downloaded.

Readings:

- [Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

- [What is a Callback Function in Javascript?](https://www.scaler.com/topics/callback-function-in-javascript/)

- [JavaScript CallBack Function](https://www.programiz.com/javascript/callback)

- [JavaScript Callbacks](https://www.javascripttutorial.net/javascript-callback/)

## Working with `bind()`

In JavaScript, the `bind()` function is used to create a new function that has the same behavior as an existing function, but with a fixed value for its `this` keyword. The `bind()` function is a higher-order function that returns a new function based on the original function.

The syntax for using the `bind()` function is as follows:

```javascript
let newFunc = func.bind(thisArg[, arg1[, arg2[, ...]]])
```

Here, `func` is the original function, `thisArg` is the object that will be bound to the `this` keyword inside the new function, and `arg1`, `arg2`, and so on are additional arguments that will be passed to the new function when it is called.

Example:

```javascript
const combine = (resultHandler, operation, ...numbers) => {
    const validateNumber = number => {
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers) {
        if (operation == 'ADD') {
            sum += validateNumber(num)
        } else {
            sum -= validateNumber(num)
        }
    }
    resultHandler(sum);
};

const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
};

combine(
    showResult.bind(this, 'The result after adding all numbers - '),
    'ADD',
    1, 2, 3, 'random_text', 5, 6, 7, 8, 9, 10
)

combine(
    showResult.bind(this, 'The result after subtracting all numbers - '),
    'SUBTRACT',
    39, 2, 3, 4, 5, 8
)
```

In this example, `combine` function is taking a callback function `resultHandler`, `operation` and variable length arguments, `numbers`. Task is to:
- Validate `numbers` with nested function `validateNumber` such that to identify non-numbers and return `0` if found any else just return the number. 
- Based on `operation`, perform addition and subtraction.
- Pass result store in `sum` to the callback function, `resultHandler`.
- Now to handle the representation of correct message info based on operation, `bind()` function is used.

Readings:

- [bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

- [JavaScript Function bind()](https://www.programiz.com/javascript/library/function/bind)

- [JavaScript bind()](https://www.javascripttutorial.net/javascript-bind/)

- [Function binding](https://javascript.info/bind)
