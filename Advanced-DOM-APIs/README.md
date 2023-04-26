# Back to DOM & More Browser APIs (Advanced DOM Interactions - Beyond Querying and Inserting)

| Contents |
| :--- |
| [Using "dataset" (data-* Attribute)](#using-dataset-data--attribute) |
| [Getting Element Box Dimension](#getting-element-box-dimension) |
| [Working with Element Sizes and Positions](#working-with-element-sizes-and-positions) |
| [Handling Scrolling](#handling-scrolling) |

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