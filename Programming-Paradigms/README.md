# Programming Paradigms

| Contents |
| :--- |
| [What are Programming Paradigms?](#what-are-programming-paradigms) |
| [Procedural Programming in Practice](#procedural-programming-in-practice) |

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
