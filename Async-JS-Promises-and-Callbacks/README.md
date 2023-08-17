# Async JavaScript: Promises and Callbacks

| Contents |
| :--- |
| [Understanding Synchronous Code Execution ("Sync Code")](#understanding-synchronous-code-execution-sync-code) |

## Understanding Synchronous Code Execution ("Sync Code")

To delve into the concept of synchronous code execution and how JavaScript operates, let's start by understanding the fundamental nature of JavaScript as a single-threaded language.

In the early stages of this course, we touched upon the fact that JavaScript is single-threaded. This notion might not have had significant implications until now, but it's essential to grasp its significance. Being single-threaded means that JavaScript is capable of executing only one task at any given time. This is in contrast to multi-threaded languages, which can execute multiple tasks simultaneously.

<img src="https://drive.google.com/uc?export=view&id=1YV3n6ASkAcrBaso24dj-SsacNSFTvz8R" alt="academind slide">

Consider a scenario where we have a sequence of code operations. We log something to the console, call a function, modify an element (like disabling a button), and then invoke another function. In the realm of JavaScript's single-threaded nature, these steps occur sequentially. They are executed one after the other in a linear manner. JavaScript will log to the console, call the function, carry out the required actions within that function, disable the button, and then proceed to call the subsequent function. It's essential to emphasize that these actions unfold sequentially, not concurrently.

The B block (representing a function call) will take place after A, but it will delay the execution of C until it's completed. The code in C won't be executed until some function (possibly D) triggers it.

In our journey through this course, we've encountered this behavior. Take the provided code snippet as an example. In this code, which serves as the starting point for a module, the execution order follows JavaScript's top-to-bottom parsing and execution. First, the code selects a button element and stores it in a constant. Only once this step is finished does the subsequent line execute, performing its intended task. Furthermore, the way function declarations work means that they are processed at the beginning of execution but might execute later in the sequence.

```javascript
const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}

button.addEventListener('click', trackUserHandler);
```

This ordering is crucial, especially when dealing with event listeners. We depend on this sequence to ensure that the button is selected and available before we add an event listener to it. This reliance on order is upheld by JavaScript's single-threaded nature. In a hypothetical multi-threaded scenario, tasks could potentially occur simultaneously, creating uncertainty about the availability of elements for further operations. However, JavaScript's single-threaded architecture guarantees this order.

Understanding synchronous code execution and the single-threaded nature of JavaScript provides insight into how the language processes tasks sequentially and maintains a predictable flow of execution.