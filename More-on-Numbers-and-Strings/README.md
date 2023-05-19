# More on Numbers & Strings

| Contents |
| :--- |
| [How `Numbers` Work and Behave in JS](#how-numbers-work-and-behave-in-js) |

## How [`Numbers`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) Work and Behave in JS

<img src="https://drive.google.com/uc?export=view&id=1ayZWoY0a4Q6t9mZAXZqF3VJBcaF3XISx" height="350" width="700" alt="academind slide">

Numbers play a crucial role in JavaScript, and it's important to note that every number in JavaScript is a floating-point number. In other words, it consists of an integer part and decimal places. Unlike certain programming languages, JavaScript does not have a specific integer type for numbers without decimal places. Instead, all numbers are represented as floats.

Internally, JavaScript stores numbers as 64-bit floating-point values, which means there are 64 bits available to represent a number. Each bit can be either 0 or 1. One bit is reserved for the sign, indicating whether the number is positive or negative. The remaining bits are used to represent the digits and the position of the decimal separator. By combining these bits, JavaScript can represent numbers within certain boundaries.

While it's possible to dive into the intricacies of floating-point arithmetic and how numbers are represented as bits in various programming languages, including JavaScript, it's not the central focus of JavaScript itself. However, if you're interested, you can refer to resources like Wikipedia articles or discussions on Stack Overflow to explore this topic in more detail.

The key takeaway is that JavaScript has certain limits due to the 64-bit representation of numbers. There are maximum and minimum values, as well as limitations on the precision of decimal places. Not every possible number can be accurately represented in JavaScript. However, for most day-to-day programming tasks, you won't encounter these limitations unless you're working with extremely large numbers or require high precision.

In JavaScript, you can determine the maximum and minimum representable numbers using the global [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) object. By accessing its properties and methods, such as [`MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER), you can obtain the largest number that can be reliably represented in JavaScript, which is approximately 9 quadrillion. It is equivalent to 2 raised to the power of 53 - 1. You can calculate this value using the `Math.pow()` function. However, although JavaScript can display this number, calculations with numbers beyond this limit may yield unexpected results or cause inaccuracies.

JavaScript also provides [`MIN_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER), which represents the negative counterpart of [`MAX_SAFE_INTEGER`]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)), and [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE), which represents the largest representable value regardless of it being an integer or a decimal number. The latter is approximately 1.79 multiplied by 10 to the power of 308.

```javascript
// Largest number JS can reliably produce
// Way 1
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// Way 2
console.log(Math.pow(2, 53)-1); // 9007199254740991

// Smallest number JS can reliably produce
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Largest Value(Decimal not Integer) you can work with JS
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
```

It's worth noting that when performing operations that exceed the representable range or precision, JavaScript doesn't throw an error. Instead, it provides an imprecise result. For example, if you subtract an integer from the smallest representable number, the result may be imprecise due to exceeding the bit range available for numbers. JavaScript will truncate the bits and convert the result back to a decimal number, which may lead to unexpected outcomes. The conversion between the binary system (used internally by JavaScript) and the decimal system (used for output) can be perplexing, but understanding the limitations and potential inaccuracies is essential.

While working with such large numbers or numbers with numerous decimal places is infrequent in everyday programming, it's crucial to be aware of these limitations to avoid unexpected behaviors.
