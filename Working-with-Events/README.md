# Working with Events

| Contents |
| :--- |
| [Introduction to Events in JavaScript](#introduction-to-events-in-javascript) |

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
