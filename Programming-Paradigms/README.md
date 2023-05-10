# Programming Paradigms

| Contents |
| :--- |
| [What are Programming Paradigms?](#what-are-programming-paradigms) |
| [Procedural Programming in Practice](#procedural-programming-in-practice) |
| [Object Oriented Programming in Practice](#object-oriented-programming-in-practice) |

## What are Programming Paradigms?

<img src="https://drive.google.com/uc?export=view&id=1V3tNHOdDsriQoyvuAikk0uJWDDOo-juF" height="400" width="800" alt="academind slide">

Programming paradigms refer to a specific approach or style of programming that can be used to solve a particular class of problems. It defines the methodology or the way of thinking that a programmer uses while creating a computer program. A programming paradigm is a way of classifying programming languages based on their features and the way in which they support abstraction, modularity, control flow, and other programming constructs.

There are several programming paradigms, including procedural, object-oriented, functional, logic, and declarative programming. Each paradigm emphasizes a different way of thinking about a problem and a different set of programming constructs for representing and manipulating data and controlling program flow.

Choosing the right programming paradigm depends on the problem at hand and the programmer's preference and expertise. Different paradigms have different strengths and weaknesses, and they excel at solving different types of problems.

Readings:

- [Programming Paradigms – Paradigm Examples for Beginners](https://www.freecodecamp.org/news/an-introduction-to-programming-paradigms/)

## Procedural Programming in Practice

Procedural programming is a programming paradigm that involves writing procedures or functions that perform specific tasks or operations on data. It emphasizes on breaking down a program into smaller, reusable functions that can be called from anywhere in the program.

In procedural programming, a program is divided into modules or functions, each of which performs a specific task or set of tasks. The focus is on the sequence of steps or procedures that are performed to solve a problem.

Here is an example of procedural programming in JavaScript that calculates the area of a circle:

```javascript
function calculateArea(radius) {
  const PI = 3.14159;
  let area = PI * radius * radius;
  return area;
}

let circleArea = calculateArea(5);
console.log(`The area of the circle is ${circleArea}`);
```

In this example, the `calculateArea` function takes the radius of the circle as a parameter and returns the area of the circle. The `PI` constant is defined within the function and is used to calculate the area. Finally, the `circleArea` variable is assigned the return value of the `calculateArea` function, which is then printed to the console.

This example demonstrates how procedural programming focuses on breaking down a problem into smaller steps or procedures that can be performed in a sequence to solve the problem.

Checkout [here](summary-with-code/procedural.js) for another simple example.

## Object Oriented Programming in Practice

Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of objects. An object is a self-contained entity that consists of both data (attributes) and behavior (methods).

In OOP, everything is an object, and objects communicate with each other to perform a specific task. OOP also follows the principle of encapsulation, which means that the data and methods of an object are hidden from the outside world and can only be accessed through well-defined interfaces.

Here's an example of OOP paradigm in JavaScript:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let john = new Person("John", 30);
john.sayHello();
```

In this example, we have defined a `Person` class that has two attributes `name` and `age` and a method `sayHello()`. We then create an instance of the `Person` class using the `new` keyword and call the `sayHello()` method on it.

The OOP paradigm allows us to model real-world entities and their interactions in code, making it easier to understand and maintain complex systems. It also enables us to reuse code by creating and extending classes, making development more efficient.

Checkout [here](summary-with-code/oops.js) for another simple example.

## Functional Programming in Practice

Functional programming is a programming paradigm that emphasizes the use of functions to solve problems. In functional programming, the focus is on creating small, reusable functions that do one thing well and can be combined to solve complex problems.

One example of functional programming is the use of higher-order functions, which are functions that take other functions as arguments or return functions as their result. This allows for more abstract and reusable code.

Here is an example of functional programming in JavaScript:

```javascript
// A function that takes a list of numbers and returns the sum
function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// A function that takes a list of numbers and returns a new list
// where each number is doubled
function double(numbers) {
  return numbers.map(num => num * 2);
}

// A higher-order function that takes a function and a list of numbers,
// and applies the function to each number in the list
function apply(func, numbers) {
  return numbers.map(func);
}

const numbers = [1, 2, 3, 4, 5];

const result1 = sum(numbers); // returns 15
const result2 = double(numbers); // returns [2, 4, 6, 8, 10]

const result3 = apply(num => num ** 2, numbers); // returns [1, 4, 9, 16, 25]
```

In this example, the `sum` and `double` functions are simple, reusable functions that each do one thing well. The `apply` function is a higher-order function that takes a function and applies it to each item in a list. By using these small, reusable functions and higher-order functions, we can create more abstract and reusable code that can solve complex problems.