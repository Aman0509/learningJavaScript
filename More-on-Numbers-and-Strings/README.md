# More on Numbers & Strings

| Contents |
| :--- |
| [How `Numbers` Work and Behave in JS](#how-numbers-work-and-behave-in-js) |
| [Floating Point (Im)Precision](#floating-point-imprecision) |

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

## Floating Point (Im)Precision

In JavaScript, floating-point imprecision refers to the inherent limitations of representing real numbers with floating-point numbers. JavaScript uses the IEEE 754 standard to represent floating-point numbers, which uses a fixed number of bits to represent a decimal number. While this representation is very efficient and suitable for most cases, it comes with some limitations.

One significant limitation is that certain decimal numbers cannot be precisely represented in binary format. As a result, when performing arithmetic operations or comparisons with floating-point numbers in JavaScript, you may encounter unexpected imprecisions, especially when dealing with decimal numbers that have repeating fractions or cannot be represented exactly in binary.

So, in simple terms, floating-point imprecision in JavaScript is a result of the fundamental differences between the binary system used internally by JavaScript and the decimal system in which programmers work. When performing calculations involving decimal numbers with fractions (e.g., 0.1, 0.2, 0.4), the binary representation may lead to slight inaccuracies due to the limitations of representing certain decimal numbers in binary format.

The issue arises because certain fractions, which have repeating fractions in the decimal system, cannot be precisely represented in the binary system. For example, 0.2 in the decimal system is equivalent to 1/5, and 0.4 is equivalent to 2/5. In the binary system, there are certain fractions, like 1/5, for which there is no finite representation (just as there is no perfect representation for 1/3 in the decimal system).

When JavaScript converts these decimal numbers to the binary system for calculations, it may lead to imprecise results. For example, when adding 0.2 and 0.4, the expected result would be 0.6, but due to the binary representation, JavaScript gives a slightly imprecise result (e.g., 0.6000000000000001). As a result, direct equality comparisons between floating-point numbers can lead to unexpected outcomes:

```javascript
console.log(0.2 + 0.4 === 0.6); // Output: false
```

To mitigate this issue, developers can use techniques like using an epsilon value for approximate comparisons. It is recommended to avoid direct equality comparisons between floating-point numbers. Instead, you can use a small tolerance or epsilon value to check if two numbers are approximately equal

```javascript
function areAlmostEqual(num1, num2, epsilon = 0.0001) {
  return Math.abs(num1 - num2) < epsilon;
}

console.log(areAlmostEqual(0.1 + 0.2, 0.3)); // Output: true

```

Or rounding methods like [`toFixed`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) to control the number of decimal places displayed to the user.

```javascript
// Demonstrating Imprecision
console.log(0.2.toFixed(20))
// Output - '0.20000000000000001110'

console.log(0.2.toFixed(2))
// Output - '0.20'
```

Alternatively, when absolute precision is required, developers may work with integers by multiplying decimal numbers by a fixed factor (e.g., multiplying by 100 to work with cents) to avoid floating-point imprecision.

Readings:

- [Floating-point arithmetic](https://en.wikipedia.org/wiki/Floating-point_arithmetic)

- [2ality – JavaScript and more](https://2ality.com/2012/04/number-encoding.html)

- [Dealing with float precision in Javascript](https://stackoverflow.com/questions/11695618/dealing-with-float-precision-in-javascript)
