# Async JavaScript: Promises and Callbacks

| Contents |
| :--- |
| [Understanding Synchronous Code Execution ("Sync Code")](#understanding-synchronous-code-execution-sync-code) |
| [Understanding Asynchronous Code Execution ("Async Code")](#understanding-asynchronous-code-execution-async-code) |

## Understanding Synchronous Code Execution ("Sync Code")

To delve into the concept of synchronous code execution and how JavaScript operates, let's start by understanding the fundamental nature of JavaScript as a single-threaded language.

In the early stages of this course, we touched upon the fact that JavaScript is single-threaded. This notion might not have had significant implications until now, but it's essential to grasp its significance. Being single-threaded means that JavaScript is capable of executing only one task at any given time. This is in contrast to multi-threaded languages, which can execute multiple tasks simultaneously.

<img src="https://drive.google.com/uc?export=view&id=1YV3n6ASkAcrBaso24dj-SsacNSFTvz8R" width="600" height="390" alt="academind slide">

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

## Understanding Asynchronous Code Execution ("Async Code")

In the previous lecture, we explored the concept of synchronous code execution, where each operation is executed sequentially. Now, let's delve into a potential downside of this approach and how asynchronous code execution addresses these challenges.

Asynchronous code execution is a fundamental concept in JavaScript that allows tasks to be executed independently, without blocking the main execution flow. This is crucial for tasks that may take longer to complete, such as fetching data from a server or waiting for user input, without causing the entire program to become unresponsive. Let's dive into this concept with a practical example.

Consider a scenario where you want to simulate fetching data from a server and updating the UI once the data is received. Here's how you might approach this using asynchronous code:

```javascript
console.log("Start");

// Simulate fetching data from a server
setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    console.log("Data Received:", data);

    // Update the UI with the received data
    updateUI(data);
}, 2000); // Simulating a 2-second delay

console.log("End");

function updateUI(data) {
    console.log("Updating UI with:", data.name);
}
```

**Output**

```
Start
End
Data Received: { id: 1, name: "John Doe" }
Updating UI with: John Doe
```

In this example, the code follows these steps:

1. The initial "Start" and "End" logs are synchronous and executed immediately.

2. The [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) function simulates fetching data from a server by using a callback function. The callback is scheduled to execute after a delay of 2000 milliseconds (2 seconds). However, JavaScript doesn't wait for this delay to complete; it continues executing the next line of code immediately.

3. The "End" log is printed while the timer is still running. This demonstrates the non-blocking nature of asynchronous code execution. JavaScript doesn't pause the execution flow and wait for the `setTimeout` to finish.

4. After approximately 2 seconds, the timer expires, and the callback function is executed. The data is logged, and the `updateUI` function is called to update the UI with the received data.

5. The "Updating UI with: John Doe" log demonstrates that the UI update occurred after the data was received.

**Key Takeaways:**

- Asynchronous code execution allows tasks to run independently, preventing the main thread from blocking and ensuring the application remains responsive.

- With the `setTimeout` example, it schedules a task to be executed after a specified delay but JavaScript continues executing subsequent code lines without waiting for the timer to finish. Note that, the browser handles the timer independently from the JavaScript code execution. This means that the browser sets up the timer and manages its countdown without blocking the rest of the script. Once the timer is done, the browser notifies JavaScript, which then executes the specified callback function.

- Callback functions are often used in asynchronous operations to define what should happen once the task is completed.

- In the example, the UI update occurs after the data is received, showcasing the efficient handling of asynchronous tasks without blocking the main program flow.

Asynchronous code execution is essential for creating smooth and responsive web applications that can handle time-consuming tasks without compromising user experience.

Readings:

- [Understanding Asynchronous JavaScript](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff)

- [How does asynchronous JavaScript work behind the scenes?](https://dev.to/vinaykishore/how-does-asynchronous-javascript-work-behind-the-scenes-4bjl#:~:text=Asynchronous%20code%3A&text=I.e.%2C%20the%20code%20is%20executed,task%20to%20finish%20its%20work.)

- [How JavaScript works: Event loop and the rise of Async programming + 5 ways to better coding with async/await](https://medium.com/sessionstack-blog/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)