# Working with Events

| Contents |
| :--- |
| [Introduction to Events in JavaScript](#introduction-to-events-in-javascript) |
| [Different Ways of Listening to Events](#different-ways-of-listening-to-events) |

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
