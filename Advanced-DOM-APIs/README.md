# Back to DOM & More Browser APIs (Advanced DOM Interactions - Beyond Querying and Inserting)

| Contents |
| :--- |
| [Using "dataset" (data-* Attribute)](#using-dataset-data--attribute) |

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
