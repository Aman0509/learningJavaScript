# Back to DOM & More Browser APIs (Advanced DOM Interactions - Beyond Querying and Inserting)

| Contents |
| :--- |
| [Using "dataset" (data-* Attribute)](#using-dataset-data--attribute) |
| [Getting Element Box Dimension](#getting-element-box-dimension) |
| [Working with Element Sizes and Positions](#working-with-element-sizes-and-positions) |
| [Handling Scrolling](#handling-scrolling) |
| [Working with `<template>` tag](#working-with-template-tag) |
| [Loading Script Dynamically](#loading-script-dynamically) |
| [Setting Timers and Intervals](#setting-timers-and-intervals) |
| [The `location` and `history` Objects](#the-location-and-history-objects) |
| [The `navigator` Object](#the-navigator-object) |
| [Working with Dates](#working-with-dates) |
| [The Error Object](#the-error-object) |

Below topics will be covered and for its practical application, [Planner Project](project_planner/) will be used as reference where concept of classes and functions are demonstrated:

- Attaching Data to Elements
- Working with Element Coordinates and Sizes
- Working with Templates & Dynamic Scripts
- navigator, location and window.history

## Using "dataset" (data-* Attribute)

The `data-` attribute is a way to store custom data attributes on HTML elements, and it can be used to attach additional data to an HTML element without using a non-standard attribute or extending the HTML specification.

JavaScript can access these attributes using the `dataset` property of the element. The `dataset` property is an object that contains all the `data-*` attributes of the element, where each attribute is converted into a camelCase property name.

For example, consider the following HTML element:

```HTML
<div id="example" data-name="John" data-age="30"></div>
```

To access the `data-name` attribute of this element using JavaScript, you can use the `dataset` property like this:

```javascript
const element = document.getElementById('example');
const name = element.dataset.name;
console.log(name); // Output: "John"
```

You can also set the value of a `data-*` attribute using the `dataset` property. For example:

```javascript
element.dataset.name = 'Jane';
```

This will update the `data-name` attribute of the element to "Jane".

## Getting Element Box Dimension

In the context of the Document Object Model (DOM), an element's box dimension refers to its size and position on a web page. The box dimension of an element is determined by a combination of its content, padding, border, and margin properties.

The box model is a concept in CSS that describes how these properties work together to determine the size and position of an element. The box model specifies that an element's box dimension is made up of the following four parts:

1. **Content**: This is the actual content of the element, such as text, images, or other HTML elements.

2. **Padding**: This is the space between the content and the element's border. Padding can be set on all four sides of an element or on specific sides.

3. **Border**: This is the border around the element, which separates the element from its surrounding elements. The border can be set on all four sides of an element or on specific sides.

4. **Margin**: This is the space between the element's border and the next element on the page. Margin can be set on all four sides of an element or on specific sides.

Each of these four parts contributes to an element's box dimension. For example, if an element has a content width of 100 pixels, a left and right padding of 10 pixels each, a left and right border of 1 pixel each, and no margin, its total width will be 122 pixels (100px content width + 10px left padding + 10px right padding + 1px left border + 1px right border = 122px).

In JavaScript, you can use DOM methods like `clientWidth`, `clientHeight`, `offsetWidth`, `offsetHeight`, `scrollWidth`, `scrollHeight`, `getBoundingClientRect()`, etc. to get various box dimension properties of an element. These methods return values that represent the element's box dimension based on different criteria, such as the size of the element's content, the size of the element including its padding and border, the size of the element including its scrollable area, etc.

### [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

It is a DOM function that returns a DOMRect object containing the size and position of an element relative to the viewport.

The `DOMRect` object returned by `getBoundingClientRect()` contains the following properties:

- `x`: the left position of the element relative to the viewport
- `y`: the top position of the element relative to the viewport
- `width`: the width of the element
- `height`: the height of the element
- `top`: the distance from the top of the viewport to the top of the element
- `right`: the distance from the left of the viewport to the right of the element
- `bottom`: the distance from the top of the viewport to the bottom of the element
- `left`: the distance from the left of the viewport to the left of the element

Here's an example of how to use `getBoundingClientRect()` in JavaScript:

```javascript
const element = document.getElementById('example-element');
const rect = element.getBoundingClientRect();

console.log(rect.x);        // left position
console.log(rect.y);        // top position
console.log(rect.width);    // width
console.log(rect.height);   // height
console.log(rect.top);      // distance to top of viewport
console.log(rect.right);    // distance to right of viewport
console.log(rect.bottom);   // distance to bottom of viewport
console.log(rect.left);     // distance to left of viewport
```

Note that the getBoundingClientRect() method returns the position and size of an element relative to the viewport, so if the element is scrolled out of view or positioned outside of the viewport, the returned values will reflect this.

## [Working with Element Sizes and Positions](https://drive.google.com/uc?export=view&id=1NsAmICEKt8beOxtV9FG91Tha-qnVwLPU)

<img src="https://drive.google.com/uc?export=view&id=13s5m9Qn8SiMYlFJOXU_r_f2e75dt5mHi" height="350" width="800" alt="advanced-dom-apis">

In the DOM (Document Object Model), you can get the dimensions of an element's box using its properties: `clientWidth`, `clientHeight`, `offsetWidth`, `offsetHeight`, `scrollWidth`, and `scrollHeight`.

1. `clientWidth` and `clientHeight`: These properties give you the dimensions of an element's content box (including padding) but excluding the scrollbar and border.

2. `offsetWidth` and `offsetHeight`: These properties give you the dimensions of an element's content box (including padding), scrollbar, and border.

3. `scrollWidth` and `scrollHeight`: These properties give you the dimensions of an element's content, including any overflow that's hidden and not visible in the viewport.

Here's an example of how to get the dimensions of an element's box in JavaScript:

```javascript
const element = document.getElementById('example-element');

// Content box dimensions (including padding)
const clientWidth = element.clientWidth;
const clientHeight = element.clientHeight;

// Box dimensions (including padding, border, and scrollbar)
const offsetWidth = element.offsetWidth;
const offsetHeight = element.offsetHeight;

// Content dimensions (including overflow)
const scrollWidth = element.scrollWidth;
const scrollHeight = element.scrollHeight;
```

Note that the dimensions returned by these properties may be in different units (e.g., pixels, inches, etc.) depending on the context and the element's styling. You may need to convert the units if you want to compare or use the dimensions in a specific way.

## Handling Scrolling

There are several scrolling methods available in the Document Object Model (DOM) that can be used to programmatically scroll an HTML document or an element within the document. Some of the most commonly used methods are:

1. [`scrollBy(x-coordinates, y-coordinates)`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy) - This method scrolls the document by the specified amount of pixels along the horizontal and vertical axis. For example, window.scrollBy(0, 100) will scroll the document down by 100 pixels.

2. [`scrollTo(x-coordinates, y-coordinates)`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo) - This method scrolls the document to the specified coordinates. For example, window.scrollTo(0, 100) will scroll the document to the top and down by 100 pixels.

3. [`scrollIntoView()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) - This method scrolls the element into view. For example, element.scrollIntoView() will scroll the element into view if it's not already visible on the screen.

4. [`scrollTop`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop) and [`scrollLeft`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft) - These are properties of an element that can be used to get or set the current scroll position of the element. For example, element.scrollTop = 100 will set the vertical scroll position of the element to 100 pixels.

5. [`window.innerHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight) - This property returns the height of the browser window's viewport in pixels. It can be used to determine how much of the document is currently visible on the screen.

These are some of the most commonly used scrolling methods in the DOM, but there are other methods available as well, depending on the specific use case.

## Working with [`<template>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) tag

The `<template>` tag is an HTML5 tag that allows developers to declare content that can be reused in different parts of the document without being displayed on the page. It can be used to create a template of HTML content that can be cloned and inserted into the DOM using JavaScript.

Here's an example of how to use the `<template>` tag:

```HTML
<!-- Declare a template for a list item -->
<template id="list-item-template">
  <li class="list-item">
    <span class="item-name"></span>
    <span class="item-price"></span>
  </li>
</template>

<!-- Create a list and insert some items using the template -->
<ul id="shopping-list"></ul>

<script>
  // Get a reference to the template
  const template = document.querySelector('#list-item-template');

  // Clone the template and update its content
  const item1 = template.content.cloneNode(true);
  item1.querySelector('.item-name').textContent = 'Apples';
  item1.querySelector('.item-price').textContent = '$2.99';

  // Append the item to the shopping list
  const shoppingList = document.querySelector('#shopping-list');
  shoppingList.appendChild(item1);

  // Clone the template again for another item
  const item2 = template.content.cloneNode(true);
  item2.querySelector('.item-name').textContent = 'Oranges';
  item2.querySelector('.item-price').textContent = '$3.99';

  // Append the second item to the shopping list
  shoppingList.appendChild(item2);
</script>
```

In this example, we first declare a template for a list item using the `<template>` tag. The template contains HTML markup for a list item with two spans for the item name and price.

We then use JavaScript to get a reference to the template using its ID, and clone the template to create a new list item. We update the content of the cloned item by setting the text content of the name and price spans.

Finally, we append the cloned item to a shopping list by selecting the list element using its ID and calling the appendChild() method to add the item to the end of the list. We repeat this process to add a second item to the list.

Using the `<template>` tag allows us to create reusable templates for HTML content that can be cloned and inserted into the DOM as needed. This can be useful for creating dynamic content or for separating content from presentation.

Readings:

- [HTML template Tag](https://www.geeksforgeeks.org/html-template-tag/)

- [Document: importNode() method](https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode)

## Loading Script Dynamically

Loading JavaScript dynamically in a web page can be useful for a variety of reasons, such as improving performance by only loading the necessary code when it's needed, or adding functionality to the page without requiring a full page reload.

It can be accomplished by creating a new `script` element, setting its `src` attribute to the URL of the JavaScript file, and then adding the element to the `head` section of the current HTML document. Here's an example:

```javascript
const script = document.createElement('script');
script.src = 'path/to/script.js';
document.head.appendChild(script);
```

In this example, `document.createElement('script')` creates a new `script` element. Then, we set the `src` attribute of the script element to the URL of the JavaScript file we want to load. Finally, we append the `script` element to the `head` section of the current document using `document.head.appendChild(script)`.

It's important to note that when you dynamically load a script, it's not guaranteed to execute immediately, and any code that depends on the loaded script should be executed only after the script has been fully loaded and is ready to use (it can also be handled with [`defer`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) attribute). To handle this, you can listen for the `load` event on the `script` element before executing any dependent code:

```javascript
const script = document.createElement('script');
script.src = 'path/to/script.js';
script.addEventListener('load', () => {
  // Code that depends on the loaded script goes here
});
document.head.appendChild(script);
```

In this example, we add an event listener for the `load` event on the `script` element. Once the script has loaded, the listener function will be executed, and any dependent code can be executed inside it.


> **Note**
>
> Adding scripts dynamically can be a powerful feature, but it's important to use it carefully. If you're dynamically rendering user-created scripts, you need to be especially cautious, as this could make your website vulnerable to attacks like cross-site scripting. This type of attack involves injecting malicious code into your website's code, and we'll be discussing it in more detail in the security section later in the course. To avoid these kinds of attacks, it's crucial that you don't dynamically add a script based on user-entered content, or if you must do so, be sure to validate and sanitize the content thoroughly before executing it.

## Setting Timers and Intervals

You can use timers and intervals to execute code after a set amount of time has elapsed. Here's how you can set a timer and an interval using the DOM:

### Setting a timer using [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

```javascript
// Set a timer to execute some code after 3 seconds
const timer = setTimeout(() => {
  // Code to be executed after 3 seconds
}, 3000);
```

In this example, `setTimeout` is used to set a timer that will execute the function after 3 seconds (3000 milliseconds) have elapsed. The function can contain any code you want to execute after the specified time.

### Setting an interval using [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

```javascript
// Set an interval to execute some code every 2 seconds
const interval = setInterval(() => {
  // Code to be executed every 2 seconds
}, 2000);
```

In this example, `setInterval` is used to set an interval that will execute the function every 2 seconds (2000 milliseconds). Again, the function can contain any code you want to execute at regular intervals.

To clear a timer or interval, you can use the `clearTimeout` or `clearInterval` methods respectively. For example:

```javascript
// Clear the timer
clearTimeout(timer);

// Clear the interval
clearInterval(interval);
```

In this example, `clearTimeout` is used to cancel the timer and prevent the code from executing after the specified time. `clearInterval` works similarly for intervals.

## The [`location`](https://developer.mozilla.org/en-US/docs/Web/API/Location) and [`history`](https://developer.mozilla.org/en-US/docs/Web/API/History_API) Objects

In the Document Object Model (DOM), the `location` and `history` objects are used to interact with the browser's location and history.

### The `location` object

The `location` object represents the current location of the document, including the URL and any query parameters. You can use this object to get information about the current location or to navigate to a new location. Here are some examples:

```javascript
// Get the current URL
const currentUrl = location.href;

// Navigate to a new URL
location.href = "https://www.example.com";

// Get the query parameters
const queryParams = location.search;
```

Readings:

- [What is the DOM Location object?](https://www.educative.io/answers/what-is-the-dom-location-object)

- [JavaScript Location](https://www.javascripttutorial.net/javascript-bom/javascript-location/)

### The `history` object

The `history` object represents the user's navigation history, including the pages they have visited and any back/forward navigation. You can use this object to navigate back or forward in the user's history or to get information about the history. Here are some examples:

```javascript
// Go back one page in the history
history.back();

// Go forward one page in the history
history.forward();

// Get the length of the history
const historyLength = history.length;
```

Both the `location` and `history` objects are part of the `window` object in the browser's global scope, so you can access them directly without needing to declare them first.

Readings:

- [Working with history object of HTML DOM](https://iq.opengenus.org/history-object-of-html-dom/)

- [JavaScript History](https://www.javascripttutorial.net/javascript-bom/javascript-history/)

- [JavaScript History Object](https://www.studytonight.com/javascript/javascript-history-object)

## The [`navigator`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) Object

In the Document Object Model (DOM), the `navigator` object is used to get information about the user's browser and operating system. This object provides a lot of useful information that can be used to create better user experiences or to handle browser-specific issues.

Here are some common properties of the navigator object:

- `appName`: Returns the name of the browser.
- `appVersion`: Returns the version number of the browser.
- `userAgent`: Returns the user agent string that identifies the browser.
- `language`: Returns the user's preferred language.
- `platform`: Returns the user's operating system.
- `plugins`: Returns a list of the plugins installed in the browser.
- `cookieEnabled`: Returns true if cookies are enabled in the browser.

You can access these properties of the navigator object using dot notation, like this:

```javascript
// Get the user agent string
const userAgent = navigator.userAgent;

// Get the name of the browser
const browserName = navigator.appName;
```

Note that the `navigator` object is not standardized and different browsers may implement it differently. As a result, you may need to test your code in multiple browsers to ensure compatibility.

Readings:

- [Browser detection using the user agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)

- [Window: navigator property](https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator#example_1_browser_detect_and_return_a_string)

- [JavaScript Navigator](https://www.javascripttutorial.net/javascript-bom/javascript-navigator/)

## Working with [Dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

In JavaScript, the `Date()` function is used to create a new Date object, which represents a specific date and time.

Here are some common methods of the `Date` object:

- [`getDate()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate): Returns the day of the month (from 1-31).
- [`getMonth()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth): Returns the month (from 0-11).
- [`getFullYear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear): Returns the year (four digits).
- [`getHours()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours): Returns the hour (from 0-23).
- [`getMinutes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes): Returns the minutes (from 0-59).
- [`getSeconds()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds): Returns the seconds (from 0-59).
- [`getTime()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime): Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

Here's an example of how to create a new `Date` object and get the current date and time:

```javascript
// Create a new Date object
const currentDate = new Date();

// Get the current year
const currentYear = currentDate.getFullYear();

// Get the current month
const currentMonth = currentDate.getMonth();

// Get the current day
const currentDay = currentDate.getDate();

// Get the current hour
const currentHour = currentDate.getHours();

// Get the current minute
const currentMinute = currentDate.getMinutes();

// Get the current second
const currentSecond = currentDate.getSeconds();
```

Note that the `Date()` function uses the local time zone of the user's computer. If you need to work with a specific time zone or date format, you may need to use a library like `moment.js` or perform manual calculations.

## The [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) Object

In JavaScript, the `Error` object is a built-in object that represents an error that occurs during the execution of a program. When an error occurs, an `Error` object is created and thrown, which can be caught and handled by the program.

The `Error` object has several properties and methods that provide information about the error:

- [`name`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name): A string that specifies the name of the error.
- [`message`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message): A string that specifies a human-readable description of the error.
- [`stack`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack): A string that specifies a stack trace of the error.
- [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toString): A method that returns a string representation of the error.

Here's an example of how to create and throw an `Error` object:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (e) {
  console.error(e.name + ': ' + e.message);
}
```

In this example, the `divide()` function checks if the second argument is zero and throws an `Error` object if it is. The program then catches the error using a `try...catch` statement and logs the error message to the console.

You can also create custom `Error` objects by extending the `Error` class:

```javascript
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

try {
  throw new CustomError('Something went wrong');
} catch (e) {
  console.error(e.name + ': ' + e.message);
}
```

In this example, a custom `Error` object is created by extending the `Error` class and adding a custom name. The error is then thrown and caught using a `try...catch` statement, just like before.