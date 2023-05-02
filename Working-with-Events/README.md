# Working with Events

| Contents |
| :--- |
| [Introduction to Events in JavaScript](#introduction-to-events-in-javascript) |
| [Different Ways of Listening to Events](#different-ways-of-listening-to-events) |
| [Removing Event Listeners](#removing-event-listeners) |
| [The Event Object](#the-event-object) |

## [Introduction to Events in JavaScript](https://drive.google.com/uc?export=view&id=1tfi-wZ9BYL2wISnyZ2JCcutRPApHpyCV)

Events in JavaScript are actions or occurrences that happen in the browser, such as clicking a button, scrolling a web page, or pressing a key on the keyboard. JavaScript can detect and respond to these events by executing a specific block of code, allowing developers to create interactive and dynamic web applications.

JavaScript provides a set of built-in events that can be used to capture user input and interaction with a web page, such as:

- **Mouse events**: click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout
- **Keyboard events**: keydown, keyup, keypress
- **Form events**: submit, reset, change, focus, blur
- **Window events**: load, unload, resize, scroll

To respond to an event, you can use an event listener, which is a function that is triggered when the specified event occurs. In JavaScript, you can add event listeners to an element using the `addEventListener` method.

For example, the following code adds an event listener to a button element that logs a message to the console when the button is clicked:

```javascript
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Button clicked');
});
```

This is just a simple example, but event handling in JavaScript can become quite complex and powerful, allowing developers to create highly interactive and responsive web applications.

Readings:

- [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

- [Event API](https://developer.mozilla.org/en-US/docs/Web/API/Event)

- [Introduction to browser events](https://javascript.info/introduction-browser-events)

- [JavaScript Events](https://www.geeksforgeeks.org/javascript-events/)

## Different Ways of Listening to Events

In JavaScript, there are several ways to listen to browser events, depending on the context in which the events are being used. Here are some common ways to listen to browser events:

1. **Using the [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method** - This is the most common way of listening to events in the browser. It allows you to attach an event listener to a specific DOM element and specify the type of event you want to listen to. Here's an example:

    ```javascript
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
    console.log('Button clicked');
    });
    ```

2. **Using the `on` property** - Some DOM elements have an on property that can be used to attach an event listener. This method is less common than addEventListener, but it can be useful in certain situations. Here's an example:

    ```javascript
    const input = document.querySelector('input');

    input.onchange = () => {
    console.log('Input value changed');
    };
    ```

3. **Using inline event handlers** - This method involves adding event handlers directly to HTML elements using the `onclick`, `onchange`, or other similar attributes. This method is considered outdated and not recommended, but it is still supported in modern browsers. Here's an example:

    ```html
    <button onclick="console.log('Button clicked')">Click me</button>
    ```

4. **Using the [`event`](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event) object** - When an event is triggered, the browser creates an event object that contains information about the event. You can access this object and use it to perform additional operations or modify the default behavior of the event. Here's an example:

    ```javascript
    const link = document.querySelector('a');

    link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Link clicked');
    });
    ```

In this example, we prevent the default behavior of the `click` event (which is to navigate to the link URL) using the [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) method on the `event` object.

Overall, the [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method is the preferred way of listening to browser events in modern JavaScript, as it provides more flexibility and better separation of concerns. However, the other methods may still be useful in certain situations.

## Removing Event Listeners

The [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) method is used to remove an event listener that was previously added to a DOM element using the `addEventListener()` method. It takes two arguments: the type of the event to remove (as a string), and the callback function that was used to handle the event.

Here's an example that demonstrates how to use `removeEventListener()` to remove an event listener:

```javascript
// Get the button element
const button = document.querySelector('button');

// Define the callback function
function handleClick() {
  console.log('Button clicked');
}

// Add the event listener
button.addEventListener('click', handleClick);

// Remove the event listener after 3 seconds
setTimeout(() => {
  button.removeEventListener('click', handleClick);
}, 3000);
```

In this example, we start by getting a reference to a button element on the page using the `document.querySelector()` method. We then define a callback function called `handleClick()` that logs a message to the console when the button is clicked.

Next, we use the `addEventListener()` method to attach the `handleClick()` function to the button element as a click event listener.

Finally, we use the `setTimeout()` method to remove the event listener after 3 seconds using the `removeEventListener()` method. This ensures that the event listener will only be active for a limited period of time and will not continue to consume resources unnecessarily.

Note that the second argument of `removeEventListener()` must be the same function that was used to add the event listener. If you pass a different function, the event listener will not be removed.

While `removeEventListener()` is a powerful and useful method for removing event listeners from DOM elements, there are a few pitfalls that you should be aware of when using it:

1. **Event listeners must be added and removed with the same function reference**: As mentioned in the previous example, the `removeEventListener()` method requires the same function reference that was used to add the event listener. If you pass a different function reference, the event listener will not be removed.

2. **Event listeners should not be anonymous functions**: When you add an event listener to a DOM element using an anonymous function, there is no easy way to remove the listener later. This is because you cannot reference an anonymous function by name. To remove an anonymous function event listener, you must use a named function or a reference to the function.

    ```javascript
    const button = document.querySelector('button');

    // Adding anonymous function event listener
    button.addEventListener('click', function() {
    console.log('Button clicked');
    });

    // Attempting to remove the event listener - won't work!
    button.removeEventListener('click', function() {
    console.log('Button clicked');
    });
    ```
    In this example, an anonymous function is used to add an event listener to a button element. However, because the function is anonymous, it cannot be removed later using the `removeEventListener()` method. Therefore, the call to `button.removeEventListener()` has no effect. To avoid this pitfall, you should use named functions to add and remove event listeners, like this:

    ```javascript
    const button = document.querySelector('button');

    // Adding named function event listener
    function handleClick() {
    console.log('Button clicked');
    }
    button.addEventListener('click', handleClick);

    // Removing named function event listener
    button.removeEventListener('click', handleClick);
    ```

3. **Removing an event listener that wasn't added**:

    ```javascript
    const button = document.querySelector('button');

    // Adding event listener
    function handleClick() {
    console.log('Button clicked');
    }
    button.addEventListener('click', handleClick);

    // Removing the event listener using a different function reference - won't work!
    function handleOtherClick() {
    console.log('Other click event');
    }
    button.removeEventListener('click', handleOtherClick);
    ```

    In this example, a different function reference is used to attempt to remove an event listener that was added earlier. Because the function reference is different, the call to `button.removeEventListener()` has no effect.

    To avoid this pitfall, you should ensure that you are using the same function reference to add and remove event listeners.

4. **Removing event listeners can impact performance**: While removing event listeners can be a useful way to optimize your code, it can also impact performance if you do it too frequently. Removing and re-adding event listeners repeatedly can cause unnecessary memory allocation and deallocation, which can slow down your application. Therefore, it's important to only remove event listeners when they are no longer needed.

    ```javascript
    const button = document.querySelector('button');

    function handleClick() {
    console.log('Button clicked');
    }

    // Adding event listener
    button.addEventListener('click', handleClick);

    // Removing event listener after a delay
    setTimeout(() => {
    button.removeEventListener('click', handleClick);
    }, 1000);

    // Re-adding event listener after a delay
    setTimeout(() => {
    button.addEventListener('click', handleClick);
    }, 2000);
    ```

    In this example, the event listener is removed and then re-added after a delay. However, this is not an efficient way to handle events because it requires unnecessary memory allocation and deallocation. Instead, you should only remove event listeners when they are no longer needed.

    To avoid this pitfall, you should be mindful of how often you are adding and removing event listeners and ensure that you only remove them when they are no longer needed.

Readings:

- [Remove an Event Handler](https://www.javascripttutorial.net/dom/events/remove-an-event-handler/)

- [You’ve Got Options for Removing Event Listeners](https://www.macarthur.me/posts/options-for-removing-event-listeners)

- [How to remove an event Listener in JavaScript? ](https://linuxhint.com/remove-event-listener-javascript/)

## The [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event) Object

An `Event` object is created whenever an event is triggered, such as a button click or a form submission. The `Event` object contains information about the event, such as the type of event, the target element that triggered the event, and any additional data associated with the event.

Here's an example of using the `Event` object to log information about a button click event:

```javascript
// Get the button element
const button = document.querySelector('button');

// Add a click event listener to the button
button.addEventListener('click', function(event) {
  // Log information about the event
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
});
```

In this example, the `addEventListener()` method is used to add a click event listener to a button element. The second argument to the `addEventListener()` method is an anonymous function that takes an Event object as its argument.

Inside the anonymous function, information about the `Event` object is logged to the console. The `event.type` property is used to log the type of event (in this case, `'click'`), and the `event.target` property is used to log the target element that triggered the event (in this case, the button element).

By using the `Event` object, you can access a variety of properties and methods to help you handle events in JavaScript. For example, you can use the event.`preventDefault()` method to prevent the default behavior of an event (such as submitting a form), or you can use the `event.stopPropagation()` method to stop an event from propagating up the DOM tree.

Readings:

- [Javascript: let’s meet the event object](https://medium.com/launch-school/javascript-lets-talk-about-events-572ecce968d0)

- [JavaScript Event Objects Tutorial](https://www.nickmccullum.com/javascript/javascript-event-objects/)