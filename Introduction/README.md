# Introduction

| Contents |
| :--- |
| [What is JavaScript?](#what-is-javascript) |
| [How JavaScript is Executed?](#how-javascript-is-executed) |
| [Dynamic vs Weakly Typed Languages](#dynamic-vs-weakly-typed-languages) |
| [JavaScript Executes in a Hosted Environment](#javascript-executes-in-a-hosted-environment) |
| [JavaScript vs Java](#javascript-vs-java) |
| [A Brief History of JavaScript](#a-brief-history-of-javascript) |
| [Difference between ECMAScript & JavaScript](#difference-between-ecmascript--javascript) |

## [What is JavaScript?](https://drive.google.com/uc?export=view&id=1MQLuUqPvDlRUjpgq-CrUFVO96I2HVTGt)

JS stands for JavaScript, which is a high-level, interpreted programming language that is commonly used to create interactive web pages and user interfaces. It is a client-side scripting language, which means that it is executed on the user's web browser, rather than on a web server. JavaScript is often used in combination with HTML and CSS to create dynamic web pages that can respond to user input and update themselves without requiring a page reload.

JavaScript was first created in the mid-1990s by Brendan Eich at Netscape Communications, and it has since become one of the most popular programming languages in the world. It is supported by all major web browsers and is also used in server-side programming (with Node.js), desktop application development, and game development.

JavaScript is a versatile language that supports a wide range of programming paradigms, including procedural programming, functional programming, and object-oriented programming. It has a number of features that make it well-suited to web development, including support for DOM manipulation, event handling, and AJAX (asynchronous JavaScript and XML) calls. It also has a number of built-in data types and data structures, such as arrays and objects, and supports dynamic typing and automatic memory management.

## [How JavaScript is Executed?](https://drive.google.com/uc?export=view&id=1j1sLA_ukgj50woECXSB7MsB55Dzztcza)

JavaScript is typically executed by a web browser or a JavaScript engine, which is a program that interprets and executes JavaScript code. When a web page is loaded that includes JavaScript code, the browser's JavaScript engine reads the code and converts it into machine-executable instructions that can be executed by the computer's CPU.

The JavaScript engine uses a number of steps to execute JavaScript code:

1. **Tokenization/Lexing**: The JavaScript engine first breaks up the source code into a series of tokens or lexemes, which are the basic building blocks of the language. These tokens include keywords, operators, identifiers, and literals.

2. **Parsing**: The engine then takes the stream of tokens and parses them into a tree-like structure called the Abstract Syntax Tree (AST). The AST represents the syntactic structure of the program and is used to determine the meaning of the code.

3. **Compilation**: The engine then compiles the AST into an executable program. This involves translating the high-level JavaScript code into a lower-level machine code that can be executed by the CPU.

4. **Execution**: Finally, the compiled program is executed by the CPU. This involves executing the code one instruction at a time, as determined by the program's control flow.

The JavaScript engine may also perform various optimizations to improve the performance of the code, such as function inlining, loop unrolling, and dead code elimination.

It's worth noting that some JavaScript engines, such as V8 (used by Google Chrome and Node.js), use a Just-In-Time (JIT) compiler, which compiles the code at runtime and can improve performance even further. In a JIT compiler, the engine compiles the code on-the-fly, caching the compiled code for future use. This allows the engine to optimize the code for the specific hardware and runtime environment, leading to significant performance gains.

## [Dynamic vs Weakly Typed Languages](https://drive.google.com/uc?export=view&id=1QWlY7oP1Lsr5J2XX1qFRh2IB6CAzyBtu)

JavaScript is a dynamically typed language, which means that the data type of a variable is determined at runtime, rather than at compile time. This means that a variable can be assigned a value of any data type, and its type can be changed dynamically throughout the course of the program. For example, you could declare a variable `x` and assign it the value 10. Later on in the program, you could reassign `x` the value `"Hello, world!"`, which is a string data type. JavaScript is able to do this because it determines the type of `x` at runtime based on the value that is assigned to it.

In addition, JavaScript is also a weakly typed language, which means that the language is able to perform implicit type coercion. This means that JavaScript will automatically try to convert a value of one data type into another data type if it needs to. For example, if you try to add a number and a string together in JavaScript using the `+` operator, the language will automatically convert the number to a string and concatenate the two values. So, if you had `x = 10` and `y = "Hello"`, and you wrote `console.log(x + y)`, JavaScript would output `"10Hello"`. This is an example of implicit type coercion, because JavaScript automatically converted the number `10` to a string so that it could be concatenated with the string `"Hello"`.

The combination of dynamic typing and weak typing in JavaScript can make the language more flexible and easier to work with, but it can also lead to errors if you are not careful. It's important to understand how JavaScript handles type coercion and to be aware of the potential pitfalls of using dynamic and weak typing.

## [JavaScript Executes in a Hosted Environment](https://drive.google.com/uc?export=view&id=12kwewamUE6n0xU9B7j0wmVFykdyr3AdD)

JavaScript is a programming language that executes in a hosted environment, which means that it runs within a larger application or system that provides access to certain features and resources.

Typically, the environment in which JavaScript runs is a web browser, which provides a set of APIs and resources that JavaScript can use to manipulate the DOM, handle user events, and communicate with servers. The web browser also provides a JavaScript engine, which is responsible for parsing and executing JavaScript code.

JavaScript can also run in other hosted environments, such as server-side environments like Node.js, which allows JavaScript to be executed on a server rather than a client's browser. Node.js provides a set of APIs and resources that allow JavaScript to access the file system, network resources, and other system-level features.

In both cases, the hosted environment provides a set of functionality that JavaScript can use to perform various tasks. This includes things like input/output operations, network communication, and user interface manipulation.

It's worth noting that the JavaScript engine is a critical part of the hosted environment, as it is responsible for parsing and executing the JavaScript code. Different JavaScript engines have different performance characteristics and features, which can affect how JavaScript code is executed and how quickly it runs. This is one reason why the performance of JavaScript code can vary between different browsers and environments.

## [JavaScript vs Java](https://drive.google.com/uc?export=view&id=1NcWJnc0q_qGGghMdWJRsSpFndWJkdVQO)

JavaScript and Java are two distinct programming languages that are often confused with one another due to their similar names. Here are some of the key differences between the two:

**Syntax**:

The syntax of JavaScript and Java are quite different. While Java is a statically typed language with a syntax that is similar to C++, JavaScript is a dynamically typed language with a syntax that is more similar to C or Perl. This means that the two languages have different syntax for declaring variables, defining functions, and performing other common programming tasks.

**Purpose**:

JavaScript is primarily used for creating interactive web applications, while Java is used for a variety of applications, including server-side web applications, Android mobile app development, and enterprise software development. JavaScript is most commonly used to create client-side applications that run in a web browser, while Java is often used for server-side applications that run on a web server.

**Runtime Environment**:
JavaScript runs in a web browser, which provides a JavaScript engine for executing JavaScript code, as well as a set of APIs and resources for manipulating the DOM and handling user events. Java, on the other hand, requires a Java Virtual Machine (JVM) to execute the code, and can run on a variety of platforms, including desktops, servers, and mobile devices.

**Object-Oriented Programming**:
Both JavaScript and Java are object-oriented programming languages, but they have different approaches to implementing object-oriented features. Java is a fully object-oriented language that requires all code to be defined within classes, while JavaScript uses prototypes to define objects and inheritance.

In summary, while JavaScript and Java share some similarities, they are distinct programming languages with different syntax, purposes, and runtime environments. Understanding these differences is important when choosing which language to use for a particular project.

## [A Brief History of JavaScript](https://drive.google.com/uc?export=view&id=1KXRJiUfZM8EsGMev2XxvvX5Rk_Qeb58x)

JavaScript was created by Brendan Eich while he was working at Netscape Communications Corporation in 1995. The language was originally called Mocha, then later changed to LiveScript, before finally settling on JavaScript.

The initial idea behind JavaScript was to create a scripting language for web developers that could be used to create dynamic and interactive web pages. At the time, web pages were static and could only be updated by reloading the entire page. JavaScript enabled web developers to update specific parts of a web page in real-time without needing to reload the entire page.

In 1996, Microsoft released their own version of JavaScript called JScript, which was included in Internet Explorer. This helped to popularize JavaScript and make it a standard part of web development.

In 1997, the World Wide Web Consortium (W3C) released the first version of the ECMAScript specification, which defined the standard for JavaScript. This helped to standardize the language and ensure that it could be used consistently across different web browsers.

Over the years, JavaScript has continued to evolve and improve, with new features and functionality being added to the language with each new version of the ECMAScript specification. Today, JavaScript is used by web developers all over the world to create a wide variety of web applications, from simple web pages to complex single-page applications and server-side applications using platforms like Node.js.

## Difference between ECMAScript & JavaScript

ECMAScript and JavaScript (JS) are often used interchangeably, but they are not exactly the same thing.

ECMAScript is a standardized specification for a scripting language that was created by ECMA International, a standards organization. The specification defines the syntax and semantics of the language, and how it should be implemented. ECMAScript defines the core features of the language, such as data types, control structures, functions, and objects.

JavaScript, on the other hand, is a high-level, interpreted programming language that is used to create dynamic, interactive web pages. It was created by Netscape in the mid-1990s and was originally called "LiveScript." Later, Netscape changed the name to "JavaScript" to leverage the popularity of Java at the time. JavaScript is essentially an implementation of the ECMAScript specification, with additional features that are specific to the browser environment.

In other words, ECMAScript is the standardized specification that defines the language, while JavaScript is the most widely used implementation of that specification. Other programming languages, such as ActionScript and JScript, are also based on the ECMAScript specification.

It's worth noting that the ECMAScript specification is regularly updated with new features and improvements. For example, ECMAScript 2015 (also known as ES6) introduced significant changes to the language, such as new syntax for declaring variables, arrow functions, and classes. Subsequent versions of the specification have continued to add new features, such as async/await, optional chaining, and nullish coalescing.

Readings:

- [What is the difference between JavaScript and ECMAScript?](https://stackoverflow.com/questions/912479/what-is-the-difference-between-javascript-and-ecmascript)

- [What is ECMAScript? - Stack Overflow](https://stackoverflow.com/questions/4269150/what-is-ecmascript)

- [What is ECMAScript?](https://codedamn.com/news/javascript/what-is-ecmascript)

* * *

[<img align="center" src="../images/home.png" height="20" width="20"/> Index](../README.md)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[Basics <img align="center" src="../images/right_arrow.png" height="20" width="20"/>](../Basics/README.md)