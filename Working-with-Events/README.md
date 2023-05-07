# Working with Events

| Contents |
| :--- |
| [Introduction to Events in JavaScript](#introduction-to-events-in-javascript) |
| [Different Ways of Listening to Events](#different-ways-of-listening-to-events) |
| [Removing Event Listeners](#removing-event-listeners) |
| [The Event Object](#the-event-object) |
| [Supported Event Types](#supported-event-types) |

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

## Supported Event Types

There are many other event types exists other than `click` event. For example,

- [`mouseenter` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event)

  The `mouseenter` event is a type of mouse event that is triggered when the mouse cursor enters a specific element. This event is similar to the [`mouseover`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event) event, but with a few key differences. Specifically, the `mouseenter` event does not bubble up the DOM tree like the [`mouseover`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event) event does, and it only triggers when the mouse cursor enters the element itself, not any of its child elements.

  Here's an example of using the `mouseenter` event in JavaScript:

  ```HTML
  <div id="box">Mouse over me!</div>
  ```

  ```javascript
  const box = document.getElementById('box');

  box.addEventListener('mouseenter', function(event) {
    box.style.backgroundColor = 'blue';
  });

  box.addEventListener('mouseleave', function(event) {
    box.style.backgroundColor = 'white';
  });
  ```

  In this example, we first get a reference to a `div` element with the ID of `box`. We then add two event listeners to this element using the `addEventListener()` method. The first event listener listens for the `mouseenter` event and changes the background color of the `div` element to blue when triggered. The second event listener listens for the [`mouseleave`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event) event and changes the background color back to white when triggered.

  When the mouse cursor enters the `div` element, the `mouseenter` event is triggered, and the background color of the `div` element is changed to blue. When the mouse cursor leaves the `div` element, the `mouseleave` event is triggered, and the background color is changed back to white.

  Note that the `mouseenter` event is only triggered when the mouse cursor enters the `div` element itself, and not any of its child elements. This can be useful in cases where you want to trigger an event only when the mouse cursor enters a specific area of an element, and not when it enters any of its child elements.

- [`scroll` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll)

  The `scroll` event is triggered when an element's scrollbar is scrolled, either by using the mouse wheel, trackpad, arrow keys, or other methods.

  Here's an example of using the `scroll` event in JavaScript:

  ```HTML
  <div id="container" style="height: 300px; overflow-y: scroll;">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula ipsum ac eros varius, sit amet bibendum arcu venenatis. Sed sollicitudin, purus vitae placerat ullamcorper, nisi tortor semper mauris, quis tempor lectus est et metus. Nullam ut orci quis velit ullamcorper pretium. Nam tristique placerat leo, ac aliquam dolor pretium quis.
    </p>
    <p>
      Nullam sed nulla euismod, laoreet metus sed, luctus mi. Vestibulum sed feugiat libero, quis varius ex. Vivamus eleifend justo ut turpis pellentesque, vitae ullamcorper dolor scelerisque. Sed non eros vel velit consectetur posuere. In hac habitasse platea dictumst. Fusce porttitor finibus turpis vel rutrum.
    </p>
    <p>
      Donec in massa justo. Integer a aliquet nisl. Nam ultrices lacus et leo maximus, at semper turpis fringilla. Ut sed elit quam. Pellentesque accumsan auctor ipsum, nec molestie nibh. Nullam ac nulla nunc. Proin lacinia justo et ligula congue, eget consequat ex varius.
    </p>
  </div>
  ```

  ```javascript
  const container = document.getElementById('container');

  container.addEventListener('scroll', function(event) {
    console.log('Scroll position:', container.scrollTop);
  });
  ```

  ### Example: Basic Infinite Scrolling

  Let's have fun with the `scroll` event and create a list which you can `scroll` infinitely (explanations below)!

  You can run this code snippet on any page, just make sure that you can scroll vertically (either by adding enough dummy content, by adding some styles that add a lot of height to some elements or by shrinking the browser window vertically).

  ```javascript
  let curElementNumber = 0;
 
  function scrollHandler() {
      const distanceToBottom = document.body.getBoundingClientRect().bottom;
  
      if (distanceToBottom < document.documentElement.clientHeight + 150) {
          const newDataElement = document.createElement('div');
          curElementNumber++;
          newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
          document.body.append(newDataElement);
      }
  }
  
  window.addEventListener('scroll', scrollHandler);
  ```

  So what's happening here?

  At the very bottom, we register the `scrollHandler` function as a handler for the `scroll` event on our window object.

  Inside that function, we first of all measure the total distance between our viewport (top left corner of what we currently see) and the end of the page (not just the end of our currently visible area) => Stored in `distanceToBottom`.

  For example, if our browser window has a height of `500px`, then distanceToBottom could be `684px`, assuming that we got some content we can scroll to.

  Next, we compare the distance to the bottom of our overall content (`distanceToBottom`) to the window height + a certain threshold (in this example `150px`). `document.documentElement.clientHeight` is preferable to `window.innerHeight` because it respects potential scroll bars.

  If we have less than `150px` to the end of our page content, we make it into the if-block (where we append new data).

  Inside of the if-statement, we then create a new `<div>` element and populate it with a `<p>` element which in turn outputs an incrementing counter value.

### How to know which event type is applicable to a specific DOM element?

To know which event types are applicable to a specific DOM element, you can check the official documentation or use the [`getEventListeners()`](https://developer.chrome.com/docs/devtools/console/utilities/#getEventListeners-function) method in the browser console.

Here are the steps to use [`getEventListeners()`](https://developer.chrome.com/docs/devtools/console/utilities/#getEventListeners-function) method in the browser console:

- Open the browser console by pressing F12 or right-clicking on the webpage and selecting "Inspect" or "Inspect Element".
- Select the "Elements" or "Inspector" tab.
- Click on the element that you want to check the events for.
- In the right-hand panel, select the "Event Listeners" tab.
- The list of event types and their corresponding event listeners will be displayed.

Alternatively, you can refer to the official documentation of the DOM element to check the event types it supports. For example, the official documentation of the `input` element lists the following events: `input`, `change`, `focus`, `blur`, `select`, `keydown`, `keyup`, `keypress`.

> ***Checkout all other events types [here](https://developer.mozilla.org/en-US/docs/Web/Events)***