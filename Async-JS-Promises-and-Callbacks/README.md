# Async JavaScript: Promises and Callbacks

| Contents |
| :--- |
| [Understanding Synchronous Code Execution ("Sync Code")](#understanding-synchronous-code-execution-sync-code) |
| [Understanding Asynchronous Code Execution ("Async Code")](#understanding-asynchronous-code-execution-async-code) |
| [Blocking Code and The "Event Loop"](#blocking-code-and-the-event-loop) |
| [Sync + Async Code - The Execution Order](#sync--async-code---the-execution-order) |
| [Multiple Callbacks and setTimeout(0)](#multiple-callbacks-and-settimeout0) |
| [Getting Started with Promises](#getting-started-with-promises) |
| [Asynchronous Code Execution in Promises](#asynchronous-code-execution-in-promises) |
| [Chaining Multiple Promises](#chaining-multiple-promises) |
| [Promise Error Handling](#promise-error-handling) |
| [Promise States & "finally"](#promise-states--finally) |
| [Async/Await](#asyncawait) |
| [Async/Await & Error Handling](#asyncawait--error-handling) |
| [Async/Await vs Raw Promises](#asyncawait-vs-raw-promises) |

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

## Getting Started with Promises

We've covered a lot about working with asynchronous code, which is crucial knowledge for anyone diving into JavaScript web development. It's like a key tool you can't do without.

Now, let's shift our attention to something important: making our code easier to understand. In our previous code snippet, you may find the complexity and confusion in terms of reading.

When we end up with situations where callbacks are nested inside one another (like in our example), it's called "callback hell." This term captures the difficulty of reading and organizing such code. It's hard to keep track of what's happening inside what, and figuring out which parts can talk to each other becomes a puzzle.

This kind of complex code isn't fun to work with. But guess what? JavaScript comes to the rescue with a solution called "promises." It's like a cleaner and more organized way to handle these situations.

<img src="https://drive.google.com/uc?export=view&id=1Imx6Zn-yw0z82WJTY89vn_uKoqiAHvMA" width="600" height="390" alt="academind slide">

***A [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It's a way to handle asynchronous code in a more organized and readable manner. Promises provide a structured approach to managing callbacks, making it easier to work with complex asynchronous operations.***

*Syntax - [Promise() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)*

```
let promise = new Promise(function(resolve, reject){
     //do something
});
```

*Parameters*

- The promise constructor takes only one argument which is a callback function.

- The callback function takes two arguments, `resolve` and `reject`. Both, `resolve` and `reject` are actually functions.

  - Perform operations inside the callback function and if everything went well then call `resolve`.
  - If desired operations do not go well then call reject.

Here's how promises work:

1. **State**: A promise can be in one of three states:

  - **Pending**: The asynchronous operation is ongoing and the promise is waiting for its completion.
  - **Fulfilled**: The operation has completed successfully, and the promise has a result value.
  - **Rejected**: The operation encountered an error or failure, and the promise has a reason for the failure.

2. **Chaining**: Promises can be chained together, allowing you to perform a sequence of asynchronous operations in a more linear and readable way. This is particularly useful when you have multiple asynchronous tasks that depend on each other (a basic example is shown in image above).

3. **Error Handling**: Promises have built-in mechanisms for error handling. You can attach `.catch()` to handle errors that occur during the promise chain.

Coming back to our example used previously, let's update it to show the usage of `Promise`.

```javascript
const button = document.querySelector('button');

// Wrapping setTimeout() inside `setTimer()` function and it returns Promise object.
// This Promise object will now handle the success or failure outcomes.
// So, point here is, since these web API methods (setTimeout() and navigator.geolocation.getCurrentPosition())
// does not support Promise object but only callbacks, hence, for demonstration,
// they are wrap under Promise object.

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000).then(data => {
        console.log(data, posData);
      });
  }, error => {
    console.log(error);
  });
  setTimer(1000).then(() => {
    console.log('Timer Done!');
  });
  console.log("Getting position...");
}

button.addEventListener('click', trackUserHandler);
```

Let's break down what's happening here. Unfortunately, `setTimeout()` and `getCurrentPosition()` functions don't directly work with promises, which are a modern way of handling asynchronous operations. Promises make it easier to manage and write code that involves waiting for something to finish, like a timer or getting a user's location.

So, let's say we want to use promises with `setTimeout()` to make it more manageable. Here's how we do it step by step:

1. We create a new function called `setTimer()` that takes a duration argument.

2. Inside `setTimer()`, we create a new Promise. A promise is like a special container that holds the result of an asynchronous operation.

3. We use `setTimeout()` inside the promise. When the timer is done (after the given duration), we resolve the promise with a message like "Done!".

4. We return the promise. This way, when we use `setTimer()`, we can wait for the timer to finish and get the result using the promise's `then` method.

5. We have a function called `trackUserHandler()` that's triggered when a button is clicked.

6. Inside `trackUserHandler()`, we use `getCurrentPosition()` to get the user's location. However, we wrap this whole process inside a `setTimer(2000)` promise. This means we'll wait for both the timer and the location fetching to finish.

7. If the location is fetched successfully, we log the location data along with the "Done!" message.

8. Then, we use `setTimer(1000)` to wait for another timer before logging "Timer Done!".

9. Finally, we log "Getting position..." immediately.

In essence, we're making sure our code doesn't wait around for timers or location fetching. *Instead, we're using promises to manage these operations, making our code more efficient and easier to read.*

The concept of promises might seem a bit tricky at first, but it's a powerful tool that helps us write better asynchronous code. It's like telling JavaScript, "Hey, wait for this to finish, and then do something with the result."

Readings:

- [JavaScript Promises In 10 Minutes](https://www.youtube.com/watch?v=DHvZLI7Db8E)

- [JavaScript Promise Tutorial – How to Resolve or Reject Promises in JS](https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/)

- [JavaScript Promise and Promise Chaining](https://www.programiz.com/javascript/promise)

## Asynchronous Code Execution in Promises

Promises in JavaScript enable asynchronous behavior by leveraging the event loop and a concept called "callbacks." To understand how promises work asynchronously, let's break down the process:

1. **Creation of a Promise:** When you create a promise using the `new Promise()` constructor, you're defining a task that may take some time to complete. The promise has three possible states: pending, resolved, or rejected.

2. **Executor Function:** The Promise constructor takes an executor function as an argument. This function typically contains the code that performs the asynchronous task, like fetching data from a server. This function receives two parameters: `resolve` and `reject`. These are functions provided by JavaScript that allow you to signal that the task is completed (resolved) or encountered an error (rejected).

3. **Event Loop:** JavaScript uses an event loop to manage asynchronous operations. The event loop continuously checks the execution stack and the callback queue. When the execution stack is empty, the event loop picks tasks from the callback queue and executes them.

4. **Execution of Asynchronous Code:** When you perform an asynchronous operation, like making an HTTP request, the JavaScript engine doesn't wait for the result. Instead, it registers a callback function to be executed when the operation completes.

5. **Promise State Transition:** Inside the executor function, when the asynchronous task completes successfully, you call the `resolve` function, which transitions the promise's state from pending to resolved. If an error occurs, you call the `reject` function, transitioning the state to rejected.

6. **Consuming the Promise:** Outside the promise creation, you use the `.then()` method to attach a callback function. This callback function will be placed in the callback queue by the promise when the promise's state transitions to resolved. The event loop eventually picks up this callback and executes it, allowing you to work with the resolved value.

In summary, promises run code asynchronously by using the event loop and callbacks. When an asynchronous operation is encountered, the code continues to execute, and a promise is created to manage the outcome of that operation. The promise transitions between different states based on the outcome of the asynchronous task, and the callback registered with `.then()` is executed once the promise resolves.

## Chaining Multiple Promises

Let's now also wrap `navigator.geolocation.getCurrentPosition()` around promise object and [`then`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) demonstrate the promise chaining.

```javascript
const button = document.querySelector('button');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {
      // will implement later
    }, opts);
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {  // If we are returning anything inside a Promise then it will have the 'Pending' state. This is because the Promise is still waiting for the returned value to be resolved or rejected.
      positionData = posData;
      return setTimer(2000); // Return type can be any data type
    })
    .then(data => {
      console.log(data, positionData);
    });

  setTimer(1000).then(() => {
    console.log('Timer Done!');
  });
  console.log("Getting position...");
}

button.addEventListener('click', trackUserHandler);
```

Readings:

- [JavaScript Promise Chaining](https://www.geeksforgeeks.org/javascript-promise-chaining/)

- [JavaScript Promise Chain - The art of handling promises](https://blog.greenroots.info/javascript-promise-chain-the-art-of-handling-promises)

## Promise Error Handling

Previously, we observed promise chaining in action, and it's important to highlight that you're not limited to returning promises within the chaining sequence. You can return any data, and it will be automatically converted into a promise and wrapped accordingly.

The core concept of promise chaining allows you to execute steps sequentially. For instance, the second step will only trigger once the preceding one, represented by the promise, is resolved. This step is reached when the promise is fulfilled, and anything returned here – which is transformed into a promise if not already – will proceed to the next step. This framework of connecting steps is quite powerful.

Now, let's delve into handling errors, as issues can arise. Consider our previous example where we're obtaining position data and handling errors in our enhanced promise version. In cases such as permissions not being granted(in browser for giving your location), we'd like to elevate the error handling from our prior approach, as we've transitioned to using promises.

```javascript
const button = document.querySelector('button');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {
      reject(error);
    }, opts);
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData;
      return setTimer(2000);
    }, err => {
      console.log(err);
    })
    .then(data => {
      console.log(data, positionData);
    });

  setTimer(1000).then(() => {
    console.log('Timer Done!');
  });
  console.log("Getting position...");
}

button.addEventListener('click', trackUserHandler);
```

This is facilitated using the second argument of the promise constructor's configuration function, specifically the reject parameter. By invoking reject within the error callback, we can funnel our error object into the rejection process. This marks the promise as unsuccessful – not resolved or pending, but in a failed state. Errors are distinctively managed; they don't fit within the regular `then` functions. Rather, `then` accepts two arguments.

The first function handles success when the promise is resolved, while the second argument takes care of failures, situations where the promise doesn't resolve but rejects instead. In our example, the error object is expected as the second parameter of the then method. You're free to name it as needed, and this function can be used for logging the error or performing other operations, such as sending the error data to a server.

By implementing these principles, when you revisit your code and reload the page, you'll notice that if you choose to block geolocation, the corresponding error message appears. The error is captured and presented as part of your code execution.

When working with promises, you might think that adding a second function as an argument takes away some of the benefits promises offer. Even though this second function is not nested, having multiple functions in a row might seem a bit messy. But don't worry, there's a different way to handle this – it's called the [`catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) method.

You can use the `catch` method to manage errors in a promise chain. You can put it anywhere in the chain, right after a function that returns a promise, or after any `then` block. Where you place it doesn't really matter.

In our example, you can add the `catch` method after the first `then` block and then continue with another `then` block. Both of these blocks are part of the same promise chain. This is where you can handle errors.

When you use the `catch` method, it works similarly to putting a function as the second argument in a `then` block. It's just another way to handle errors that occur anywhere in the promise chain before the `catch` block.

In a more complex chain, if any promise fails, both approaches will catch the error. But if you have a series of `then` blocks, only the ones after the failed promise will be skipped until you reach a `catch` block or another second argument that handles errors.

Unlike `then` blocks, the `catch` method won't stop the whole chain. It only deals with errors that happened before it. When a promise fails before reaching the `catch` block, the error will be caught in the block and its code will run. However, the next `then` blocks will keep running as usual.

```javascript
const button = document.querySelector('button');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {
      reject(error);
    }, opts);
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData;
      return setTimer(2000);
    })
    .catch(err => {
      console.log(err);
    })
    .then(data => {
      console.log(data, positionData);
    });

  setTimer(1000).then(() => {
    console.log('Timer Done!');
  });
  console.log("Getting position...");
}

button.addEventListener('click', trackUserHandler);
```

Where you put the `catch` block determines how it works. To stop the entire promise chain when an error occurs, place the `catch` block at the end of all `then` blocks. This ensures that if a promise fails, the remaining 'then' blocks are skipped and the chain is caught by the `catch` block.

If you put the `catch` block in the middle of the chain, it will catch the error and then the following `then` blocks will run. It won't stop the whole chain, but it's a flexible way to handle errors without crashing your application.

Additionally, the `catch` block lets you return new data. This can be a promise or anything else that will be wrapped in a promise. This works similarly to the `then` method. Any `then` blocks after the `catch` block will run as the promise goes back to being pending after the `catch` block runs.

In short, the `catch` method is a useful way to handle errors in promise chains. Where you put it and how it works lets you manage errors in different ways while still keeping the promise's asynchronous behavior.

Readings:

- [Error handling with promises](https://javascript.info/promise-error-handling)

- [Promise Error Handling](https://www.javascripttutorial.net/es6/promise-error-handling/)

## Promise States & "finally"

You learned about the different promise states:

- **PENDING (Promise is doing work, neither `then()` nor `catch()` executes at this moment)** - This is the initial state of a Promise. It means that the asynchronous operation initiated by the Promise is still ongoing. The Promise is waiting for the result to be resolved or rejected.

- **RESOLVED (Promise is resolved => then() executes)** - A Promise transitions to the "Fulfilled" state when the asynchronous operation is successfully completed. This means that the promised value is available and can be accessed using the .then() method.

- **REJECTED (Promise was rejected => catch() executes)** - If an error occurs during the asynchronous operation, the Promise transitions to the "Rejected" state. This indicates that the promised value cannot be obtained due to an error. You can handle the error using the `.catch()` method or a second argument in the `.then()` method.

***When you have another `then()` block after a `catch()` or `then()` block, the promise re-enters PENDING mode (keep in mind: `then()` and `catch()` always return a new promise - either not resolving to anything or resolving to what you return inside of `then()`). Only if there are no more `then()` blocks left, it enters a new, final mode: SETTLED.***

Once SETTLED, you can use a special block - [`finally()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) - to do final cleanup work. `finally()` is reached no matter if you resolved or rejected before.

Here's an example:

```javascript
somePromiseCreatingCode()
    .then(firstResult => {
        return 'done with first promise';
    })
    .catch(err => {
        // would handle any errors thrown before
        // implicitly returns a new promise - just like then()
    })
    .finally(() => {
        // the promise is settled now - finally() will NOT return a new promise!
        // you can do final cleanup work here
    });
```

Readings:

- [JavaScript Promises – The promise.then, promise.catch and promise.finally Methods Explained](https://www.freecodecamp.org/news/javascript-promise-methods/)

## Async/Await

Promises are a crucial concept in JavaScript, especially in modern JavaScript which we're learning here. They're extensively used, even more so when dealing with async operations like HTTP requests. As you work on various projects involving async code, you'll frequently encounter promises.

Now, there's an alternative to this approach that modern JavaScript offers, which is quite important to grasp. This approach still involves promises but allows you to omit the `then` and `catch` methods. This makes the code resemble synchronous code more closely—similar to what you write without promises. This approach is known as [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).

What is `async`/`await` all about? It's used only with functions, and those functions must be marked as `async`. ***By adding the `async` keyword before the function declaration, the function transforms into one that automatically returns a promise.*** This wrapping into a promise is done internally, even though you don't explicitly use the `return` statement. This is a subtle but significant change.

Adding the `async` keyword transforms the function into a promise without changing the way JavaScript works. Any call to `then` will now operate on this promise. Inside this wrapped promise, we gain access to the `await` keyword. Adding `await` in front of a promise makes the execution wait for that promise to resolve or reject. The next line of code only executes once the promise is resolved.

In essence, `async`/`await` doesn't alter JavaScript's non-blocking nature. Instead, it transforms the code to work with promises in a way that appears synchronous. It doesn't block code execution; it's more like code transformation that preserves JavaScript's asynchronous nature. So, you're reaping the benefits of more readable code without changing the core behavior of JavaScript.

```javascript
const button = document.querySelector('button');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {
      reject(error);
    }, opts);
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  // let positionData;
  const posData = await getPosition();
  const timerData = await setTimer(2000);
  console.log(timerData, posData);
  //   .then(posData => {
  //     positionData = posData;
  //     return setTimer(2000);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  //   .then(data => {
  //     console.log(data, positionData);
  //   });

  // setTimer(1000).then(() => {
  //   console.log('Timer Done!');
  // });
  // console.log("Getting position...");
}

button.addEventListener('click', trackUserHandler);
```

Mentioning another example for more understanding.

Consider a scenario where you want to fetch user data from an API and then log the user's name. We'll first implement this using Promises and then refactor it using Async and Await.

**Using Promises:**

```javascript
function fetchUserData() {
  return new Promise((resolve, reject) => {
    // Simulate fetching user data from an API
    setTimeout(() => {
      const userData = { id: 1, name: "John Doe" };
      resolve(userData);
    }, 1000);
  });
}

fetchUserData()
  .then(user => {
    console.log(user.name);
  })
  .catch(error => {
    console.error("Error fetching user data:", error);
  });
```

**Using Async and Await:**

```javascript
async function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = { id: 1, name: "John Doe" };
      resolve(userData);
    }, 1000);
  });
}

async function logUserName() {
  try {
    const user = await fetchUserData();
    console.log(user.name);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

logUserName();
console.log("test");

// Output
// test
// John Doe
```

In the second example using Async and Await:

1. We declare the `fetchUserData` function as `async` to indicate that it contains asynchronous operations.

2. Inside `fetchUserData`, we use a `setTimeout` to simulate fetching user data from an API. We return a promise that resolves with the user data.

3. The `logUserName` function is also declared as `async`.

4. Inside `logUserName`, we use the `await` keyword before calling `fetchUserData()`. This tells JavaScript to pause the execution of the function until the promise from `fetchUserData` resolves. This makes the code appear more synchronous, as if you're waiting for the result of a regular function call.

5. If the promise is resolved, the value returned from the promise is assigned to the `user` variable, and we can then log the user's name.

6. If an error occurs during the `fetchUserData` promise, the catch block will catch the error and log an error message.

In summary, `async` and `await` provide a cleaner and more intuitive way to work with asynchronous operations compared to handling callbacks and chaining promises. The code structure resembles synchronous code, making it easier to understand and maintain asynchronous workflows.

Readings:

- [How Async Javascript works (Callback Hell, Promises, Async Await, Call Stack and more)](https://www.youtube.com/watch?v=1Z7FjG--F20)

- [JavaScript async/await](https://www.javascripttutorial.net/es-next/javascript-async-await/)

## Async/Await & Error Handling

Async await provides a concise way to write code, but it lacks error handling in our previous example. So, how can we address this issue using `async`/`await`?

Since `async`/`await` appears like regular synchronous code due to its underlying transformation, we can employ the familiar synchronous error handling technique we learned earlier: ***the try-catch block.***

Below is our updated example:

```javascript
const button = document.querySelector('button');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {
      reject(error);
    }, opts);
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  // let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch(error) {
    console.log(error);
  }
  console.log(timerData, posData);
  //   .then(posData => {
  //     positionData = posData;
  //     return setTimer(2000);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  //   .then(data => {
  //     console.log(data, positionData);
  //   });

  // setTimer(1000).then(() => {
  //   console.log('Timer Done!');
  // });
  // console.log("Getting position...");
}

button.addEventListener('click', trackUserHandler);
```

If an error arises, we catch it in the `catch` block. Here, we can choose to print the error or handle it in any desired manner.

Everything inside the `try` block will execute only if the initial step succeeds. If the first promise rejects, the subsequent line won't be executed; instead, we'll move to the `catch` block. If the first promise resolves but the following one rejects, the `catch` block is invoked.

Remember, the line following the try-catch block always runs, irrespective of whether we're in the `try` or `catch` block. For instance, in this code, two variables are utilized within the try block, and their values are logged afterward.

This is how errors are appropriately managed in an async await setup, substituting the catch approach with the try-catch construct. It's important to understand that if one operation fails, subsequent steps are skipped, much like the behavior of catch. Conversely, if both operations succeed, we bypass the catch and consistently execute the subsequent line.

## Async/Await vs Raw Promises

Async/await provides a different way to handle code compared to using the `then` and `catch` blocks. Which one you use depends on what you find more comfortable.

*One thing to notice in async await is that `async` and `await` can make you think that the steps are happening one after the other, like regular JavaScript code. But actually, asynchronous operations, including async code, are handled by the browser separately. The browser takes care of them in the background and gives control back when they're done. Async/await doesn't change this; it just changes how things are written.*

Understanding this difference is important. Async await can make your code shorter, but it might seem like things happen in a certain order when they don't.

When it comes to performance, async await might be a bit better in modern browsers. But the difference is usually not big and might not matter for all cases.

***One real downside you can have with async/await though is that you can't run tasks simultaneously inside of the same function.***

In our example, when we used `then` and `catch` with `getPosition`, then code after it which is, `setTimer` and `console.log` will be executed right away.

```javascript
function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData;
      return setTimer(2000);
    })
    .catch(err => {
      console.log(err);
    })
    .then(data => {
      console.log(data, positionData);
    });

  // From here, code will be executed right away in sync manner
  setTimer(1000).then(() => {
    console.log('Timer Done!');
  });
  console.log("Getting position...");
}
```

However, with `async`/`await`, if you run below code, you will see that `Timer Done!` and `Getting position...` will be logged after JS done with logging `timerData` and `posData`.

But why does this occur?

It's due to the use of `await`. Rather than halting the code's execution, what happens is that all these actions are essentially enclosed within their individual `then` blocks behind the scenes. As a result, this part also has its own associated `then` block, meaning it only runs once the preceding action is complete.

```javascript
async function trackUserHandler() {
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch(error) {
    console.log(error);
  }
  console.log(timerData, posData);
  // from here, code will be executed in async manner
  setTimer(1000).then(() => {
    console.log('Timer Done!');
  });
  console.log("Getting position...");
}
```

So, if you have a function where you want to initiate multiple tasks at the same time without waiting for each one to finish before starting the next, this approach might not be the best. Currently, we're observing a distinct behavior from what we had before.

***Another drawback or important point to consider is that the usage of `async`/`await` is restricted to functions.***

This means that you can't use the `await` keyword outside of a function or in the global scope. In other words, you can't use `await` directly in the main body of your script; it must be inside a function. This is because `async`/`await` is designed to work with asynchronous operations, and those operations are typically performed within functions.

For example, you can create an `async` function like this:

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
```

In this case, the `await` keyword can be used within the `fetchData` function to pause its execution until asynchronous operations, like fetching data from an API, are completed.

However, if you try to use `await` outside of a function, it will result in a syntax error. For instance, the following code will not work:

```javascript
// This will result in a syntax error
// const response = await fetch('https://api.example.com/data');
```

So, to leverage the benefits of async/await, you need to structure your code within functions.
