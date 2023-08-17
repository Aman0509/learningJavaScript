# Async JavaScript: Promises and Callbacks

| Contents |
| :--- |
| [Understanding Synchronous Code Execution ("Sync Code")](#understanding-synchronous-code-execution-sync-code) |
| [Understanding Asynchronous Code Execution ("Async Code")](#understanding-asynchronous-code-execution-async-code) |
| [Blocking Code and The "Event Loop"](#blocking-code-and-the-event-loop) |
| [Sync + Async Code - The Execution Order](#sync--async-code---the-execution-order) |
| [Multiple Callbacks and setTimeout(0)](#multiple-callbacks-and-settimeout0) |

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

## Blocking Code and The "Event Loop"

Now that we have a fundamental understanding of how the browser handles lengthier tasks, let's delve into something intriguing.

Suppose, we have below code:

```javascript
const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}

button.addEventListener('click', trackUserHandler);

let result = 0;

// Blocking Code
for (let i = 0; i < 100000000; i++) {
    result += i;
}

console.log(result); // Output: 4999999950000000
```

When you run it, you'll get the output, but it might take a bit longer because of the big number used in the for loop.

Now, let's see what happens when we try clicking the button before the result appears. You'll notice that the "clicked" message only shows up after the result becomes visible. When I reload and click the button rapidly, nothing happens right away. Instead, all the clicks only take effect once the loop finishes its task.

***Now in this scenario, we can observe single threading in action.***

We've set up this event listener(`button.addEventListener('click', trackUserHandler);`) and passed control to the browser. As a result, this event listener doesn't obstruct JavaScript's flow. However, the `loop` here doesn't have the option to be handed over to the browser. It runs, causing JavaScript execution to halt until this operation is completed, as only one operation can be executed at a time.

This helps prove the point I mentioned earlier in the slide. Something interesting to note is that the task we handed over can only perform its function after the loop has completed.

Think of it like this: When the loop is running, JavaScript is focused on that task alone. If we click during the loop, the browser acknowledges the click and knows it should call a specific function. However, since that function is a JavaScript function, it waits until the loop finishes.

This behavior is important to understand—it's how JavaScript manages both async and sync code. It's made possible through something called the event loop.

| | |
| --- | --- |
| <img src="https://drive.google.com/uc?export=view&id=1_RVq8lE8nv59MNG11VesivUP_WQq3i4S" alt="academind slide"> | <img src="https://drive.google.com/uc?export=view&id=1JRSXQ2gDKNlefjNJXq6-z1fwUaiJnBe5" alt="academind slide"> |

So, what exactly is the event loop? Essentially, the event loop is a mechanism that assists us in managing asynchronous code. It's particularly useful for handling callback functions, which are commonly employed in scenarios involving asynchronous code.

Let's imagine this set up as shown in 2nd image.

We have our code and our stack. On the left side of this code, you'll notice two functions being defined. Then, a timer is set, and after the timer completes, we call the `showAlert()` function, which is the second function defined here. Additionally, we invoke the `greet()` function after the timer which executes `console.log()`.

As this code executes, the stack, which is a part of the JavaScript engine, carries out certain tasks. It's important to note that certain other tasks are offloaded to the browser. The browser provides a bridge, enabling communication between our JavaScript code and specific browser APIs to delegate some tasks.

Here's what unfolds:

1. The two functions, `greet()` and `showAlert()` are created.
2. The built-in `setTimeout()` function is called. It communicates with the browser API to set up a timer there, which the browser manages. JavaScript's execution completes this step and doesn't block other code execution.

The next step doesn't involve the immediate execution of the `showAlert()` function. Despite the 2-second timer, JavaScript doesn't wait for it. Instead, JavaScript moves on to the next line, executing the `greet()` function. The `greet()` function's execution begins right after the `setTimeout()` is done, and the timer's management is handed off to the browser. The `console.log()` within the `greet()` function is also executed, wrapping up the code on the left.

At some point, the timer completes. Let's assume this happens while the `console.log()` within `greet()` is being executed. Although this process occurs quickly, it still takes a few milliseconds. Let's say, as we're in the midst of executing `console.log()`, the timer concludes. Now, to alert our JavaScript engine that the `showAlert()` function registered as a callback for the timer, should be executed, a ***[Message Queue](https://stackoverflow.com/questions/22827311/what-does-it-mean-by-message-queue-in-this-link)*** comes into play. This queue, maintained by the browser and linked to JavaScript, holds code that's waiting to execute when time allows. The `showAlert()` function is registered as a to-do task in this queue.

It's important to note that the `showAlert()` function doesn't execute at this point; it's merely queued as a to-do task. Currently, the only executed functions in JavaScript are `greet()` and the `console.log()` within it.

With that in mind, let's fast-forward. The `console.log()` within `greet()` is executed, concluding the `greet()` function and leaving the call stack empty again.

Now comes the critical part: we need to bring the `showAlert()` task from the message queue into our call stack for execution. ***This is where the event loop steps in***. The event loop, along with the message queue, is inherent to browsers and most JavaScript environments, including **Node.js**. It's important to understand that the event loop isn't part of the JavaScript engine; rather, it's an element of the host environment where JavaScript is utilized.

The event loop's role is to synchronize the call stack in the engine with waiting messages. It continuously monitors whether the stack is empty and if there are pending tasks. When the stack is empty, the event loop triggers, pushing any waiting messages or to-do functions into the call stack.

The event loop remains in a waiting state until the call stack is empty. Once this condition is met, it activates, moving the callback function (or waiting message) into the call stack for active execution. As a result, the message queue becomes empty, and the function starts running in our JavaScript code.

In this case, the `showAlert()` function executes, which calls the built-in `alert()` function on the left side. Upon completion, the call stack is empty once again.

*This entire process, involving the event loop and the browser's handling of our code and callback functions, follows a pattern commonly used for asynchronous operations.*

Now, coming back to our previous code snippet, with the `addEventListener()` part, what we're doing is giving a task to the browser. We're saying, "Hey browser, when a click happens, run this function." Then, we continue working in JavaScript. Now, there's this lengthy task (loop one) which basically occupies our call stack (basically, here, message conveyed is that loop is not the part of any function but then also it is stacked), it's not part of a function here but it therefore is basically running in an anonymous function you could say, in a big anonymous function that wraps everything if you will.

While this task is going on, our JavaScript engine's task list isn't empty. If we click the button or reload the page while this task is still running, the browser notes that we want to do something in response to that click. It adds this task to our "to-do" list, which we can call the message queue.

Now, here's the interesting part. The event loop, which is like a watchful manager, notices that our task list (call stack) isn't clear yet – there's still work being done. So, the event loop patiently waits until our task list is completely empty.

Only when our lengthy task is finished and we log the result to the console, the call stack becomes empty. At this moment, the event loop says, "Alright, now that we're free, let's tackle that task from the message queue." That's why you see the "clicked" message appearing in the console only after the result has been logged.

This knowledge is quite valuable. Understanding what's happening behind the scenes helps you write your code in a way that makes sense. For instance, you might notice that even if you registered an event first, an async task (like handling a click) might not happen before other code because JavaScript doesn't wait around. Instead of blocking JavaScript while waiting, the browser takes on tasks like event listeners or other expectedly time-consuming operations, so your JavaScript code remains responsive and never gets stuck.

## Sync + Async Code - The Execution Order

Consider this scenario where we have the `trackUserHandler` function. Instead of merely logging that a click occurred, our goal is to retrieve the user's location.

```javascript
const button = document.querySelector('button');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(posData => {
    console.log(posData);
  }, error => {
    console.log(error);
  });
  console.log("Getting position...");
}

button.addEventListener('click', trackUserHandler);
```

We can achieve this by utilizing the [`navigator`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) object along with the [`geolocation API`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API). This built-in API enables us to interact with the browser to obtain the user's location through the getCurrentPosition method.

The [`getCurrentPosition`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) method takes three potential parameters: a success callback function, which executes when the position is successfully fetched; an error callback function, executed when the position retrieval encounters an issue; and an options object for configuration. In our case, we are employing an anonymous arrow function as the success callback, where the `posData` (position data) is logged.

As the second argument of `getCurrentPosition`, we specify the error callback. This callback logs the error encountered during position retrieval. We could also include a third argument, an options object to configure settings like a timeout.

When we reload the page and click "Track Me," we are prompted to grant access to our location. Upon allowing access, the API works to determine the location. Subsequently, we can expand the output to display the coordinates obtained.

To simulate an error scenario, we reload the page and click "Track Me" again. By blocking access, we encounter an error object.

This demonstrates how these callback functions operate. Similar to the behavior with `addEventListener`, `getCurrentPosition` delegates the task to the browser. Once completed, the browser adds the task to the event loop for execution within our code.

As before, if we have code following the `getCurrentPosition` call, such as logging to the console, it will execute prior to printing either success or error messages. This is because our code is executed immediately and sent to the browser, while the browser adds the `getCurrentPosition` callback tasks to the event loop. The event loop only processes these tasks when the call stack is empty.

Thus, even if `getCurrentPosition` executes instantly, any code following it will always run before the success or error callback functions. This behavior illustrates how asynchronous operations work, ensuring that code within the callback functions cannot execute before the code outside the callback, as the browser follows the event loop and message queue pattern.

Upon reloading the page, clicking "Track Me," and then blocking access, we observe that the "Getting position..." log is displayed instantly, showcasing the non-blocking nature of JavaScript.

## Multiple Callbacks and setTimeout(0)

For the purpose of learning, let's introduce a 2-second timer before displaying the response. To achieve this, an additional anonymous function is required within the existing callback. Inside this nested function, the `posData` can be accessed and logged. This is made possible due to the concept of closure, where the function is nested within another, allowing access to variables within the outer function.

```javascript
const button = document.querySelector('button');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimeout(
        () => {
          console.log(posData);
        }, 2000
      );
  }, error => {
    console.log(error);
  });
  setTimeout(
    () => {
      console.log("Timer done");
    }, 0);
  console.log("Getting position...");
}

button.addEventListener('click', trackUserHandler);
```

However, the logging of `posData` is delayed by 2 seconds due to the timer, introduced for illustrative purposes. This situation results in a callback within another callback, both of which are part of the broader `trackUserHandler` callback. As this nesting of callbacks becomes more complex, the code's readability and maintenance can become challenging over time.

To check the functionality, I save the changes, reload the page, click "Track Me," grant access, and observe the sequence. The location retrieval takes a moment, and after an additional 2 seconds, the position data is displayed.

This example serves to demonstrate the possibility of nesting asynchronous operations. The timer is initiated only after the location retrieval is completed, that is, once the outer callback function executes. Notably, when dealing with timers, it's essential to understand that setting a timer of zero doesn't guarantee immediate execution. The browser's execution route via the message queue and the event loop introduces a minimal time delay.

As an experiment, if I set a timer of zero immediately before the `console.log("Getting position...")` line, the result is intriguing. Reloading the page and clicking "Track Me," I observe that "Getting position..." logs first, followed by "Timer done," even though the timer is set to zero. This behavior occurs because the execution flow requires the browser to pass through the message queue and the event loop, ultimately leading to the sequence I described.

In essence, the minimum time for executing a callback is defined by the timer value, but it's not a guaranteed time. The browser and JavaScript attempt to execute the function at the specified minimum time, but it's subject to the state of the call stack. If the call stack is occupied, that task will be prioritized. As a result, the sequence is influenced by the passage through the message queue and event loop, with the call stack's status playing a pivotal role.
