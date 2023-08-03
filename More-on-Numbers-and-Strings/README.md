# More on Numbers & Strings

| Contents |
| :--- |
| [How `Numbers` Work and Behave in JS](#how-numbers-work-and-behave-in-js) |
| [Floating Point (Im)Precision](#floating-point-imprecision) |
| [The BigInt Type](#the-bigint-type) |
| [The Global "Number" & "Math" Objects](#the-global-number--math-objects) |
| [Tagged Templates](#tagged-templates) |

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

## The BigInt Type

In JavaScript, `BigInt` is a built-in data type introduced in ECMAScript 2020 (ES11) to represent integers of arbitrary precision. Prior to `BigInt`, JavaScript natively supported only 64-bit floating-point numbers, which have a maximum safe integer value of 2^53 - 1. Any integer larger than this limit would lose precision and could lead to incorrect results.

`BigInt` is designed to address this limitation by allowing you to work with integers of any size, limited only by the available memory of the system. It can represent integers with an arbitrary number of digits, and it does not suffer from the same precision issues as regular numbers (often referred to as `Number` type).

Here's how you can create a `BigInt`:

```javascript
const bigIntNumber = 1234567890123456789012345678901234567890n;
```

Note the "n" suffix at the end of the number, which tells JavaScript that this is a `BigInt` literal. If you try to assign a value directly to a variable without the "n" suffix, it will be treated as a regular `Number`, and you might lose precision:

```javascript
const wrongBigInt = 1234567890123456789012345678901234567890; // This will be treated as a regular Number.
```

You can perform various mathematical operations with `BigInt` in the same way you would with regular numbers:

```javascript
const a = 1234567890n;
const b = 9876543210n;

const sum = a + b; // 11111111100n
const difference = b - a; // 8641975320n
const product = a * b; // 12193263111263526900n
const quotient = b / a; // 8n (integer division, fractional part is discarded)
const remainder = b % a; // 690123430n
```

However, it's important to note that `BigInt` and regular `Number` cannot be mixed in arithmetic operations. When using `BigInt`, the operands should be `BigInt` as well:

```javascript
const c = 42;
const sumOfMixedTypes = a + c; // Error: Cannot mix BigInt and other types, conversion not allowed.
```

`BigInt` cannot be used with certain built-in methods like `Math.sqrt`, `Math.sin`, etc., as those methods expect regular `Number` types. For these cases, you might need to convert the `BigInt` to a regular `Number` before performing the operation.

Readings:

- [BigInt - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

- [BigInt - JavaScript.Info](https://javascript.info/bigint)

## The Global "Number" & "Math" Objects

Some commonly used `Number's` attributes:

- [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE): This attribute represents the maximum positive value that can be represented in JavaScript.

    ```javascript
    console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
    ```

- [`Number.MIN_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE): This attribute represents the smallest positive value greater than 0 that can be represented in JavaScript.

    ```javascript
    console.log(Number.MIN_VALUE); // Output: 5e-324
    ```

- [`Number.POSITIVE_INFINITY`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY): his attribute represents positive infinity, which is a special value representing a number that is too large to be represented in JavaScript.

    ```javascript
    console.log(Number.POSITIVE_INFINITY); // Output: Infinity
    ```

- [`Number.NEGATIVE_INFINITY`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY): This attribute represents negative infinity, which is a special value representing a number that is too small (negative) to be represented in JavaScript.

    ```javascript
    console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity
    ```

- [`Number.EPSILON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON): This attribute represents the smallest positive value that can be added to 1 to get a value different from 1. It is useful for performing approximate comparisons.

    ```javascript
    console.log(Number.EPSILON); // Output: 2.220446049250313e-16
    ```

- [`Number.NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN): This attribute represents the "Not-a-Number" value, which is the result of an operation that cannot produce a meaningful numeric value.

    ```javascript
    console.log(Number.NaN); // Output: NaN
    ```

- [`Number.MIN_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) and [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER): These attributes represent the minimum and maximum safe integer values that can be represented in JavaScript without losing precision. Safe integers are within the range [-2^53, 2^53].

    ```javascript
    console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991
    console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
    ```

Some commonly used `Number's` methods:

- [`Number.parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) and [`Number.parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat): These methods parse a string and convert it into an integer or floating-point number, respectively.

    ```javascript
    const numString = "42";
    const parsedInt = Number.parseInt(numString); // Output: 42 (as a number, not a string)
    const parsedFloat = Number.parseFloat("3.14"); // Output: 3.14 (as a number, not a string)
    ```

    > Note: Also, checkout the difference between `Number()` and `parseInt()` [here](https://dev.to/darkmavis1980/you-should-stop-using-parseint-nbf)

- [`Number.toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed): This method formats a number to a fixed number of decimal places and returns a string representation.

    ```javascript
    const num = 3.14159;
    const formatted = num.toFixed(2); // Output: "3.14"
    ```

- [`Number.toPrecision()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision): This method formats a number to a specified length and returns a string representation, including the necessary precision.

    ```javascript
    const num = 1234.56789;
    const formatted = num.toPrecision(5); // Output: "1234.6"
    ```

- [`Number.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString): This method converts a number to a string representation.

    ```javascript
    const num = 42;
    const strNum = num.toString(); // Output: "42"
    ```

- [`Number.isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN): This method determines if a value is `NaN` (Not-a-Number).

    ```javascript
    const value1 = 5 / "hello"; // NaN
    const value2 = "123"; // Not NaN
    console.log(Number.isNaN(value1)); // Output: true
    console.log(Number.isNaN(value2)); // Output: false
    ```

- [`Number.isFinite()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite): This method determines if a value is a finite number.

    ```javascript
    const finiteNum = 42;
    const infiniteNum = Infinity;
    console.log(Number.isFinite(finiteNum)); // Output: true
    console.log(Number.isFinite(infiniteNum)); // Output: false
    ```

- [`Number.isInteger()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger): This method checks if a value is an integer (whole number).

    ```javascript
    const integerNum = 42;
    const floatNum = 3.14;
    console.log(Number.isInteger(integerNum)); // Output: true
    console.log(Number.isInteger(floatNum)); // Output: false
    ```

Some commonly used `Math's` methods:

- [`Math.abs()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs): This method returns the absolute value of a number.

    ```javascript
    console.log(Math.abs(-5)); // Output: 5
    ```

- [`Math.ceil()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil): This method rounds a number up to the nearest integer.

    ```javascript
    console.log(Math.ceil(3.14)); // Output: 4
    ```

- [`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor): This method rounds a number down to the nearest integer.

    ```javascript
    console.log(Math.floor(3.14)); // Output: 3
    ```

- [`Math.round()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round): This method rounds a number to the nearest integer.

    ```javascript
    console.log(Math.round(3.5)); // Output: 4
    console.log(Math.round(3.4)); // Output: 3
    ```

- [`Math.max()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max) and [`Math.min()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min): These methods return the maximum and minimum values, respectively, from a list of arguments.

    ```javascript
    console.log(Math.max(10, 20, 5, 30)); // Output: 30
    console.log(Math.min(10, 20, 5, 30)); // Output: 5
    ```

- [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random): This method generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

    ```javascript
    console.log(Math.random()); // Output: Random value between 0 (inclusive) and 1 (exclusive)
    ```

- [`Math.pow()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow): This method raises a number to a specified power.

    ```javascript
    console.log(Math.pow(2, 3)); // Output: 8 (2^3)
    ```

- [`Math.sqrt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt): This method calculates the square root of a number.

    ```javascript
    console.log(Math.sqrt(16)); // Output: 4 (sqrt(16) = 4)
    ```

- [`Math.sin()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin), [`Math.cos()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos) and [`Math.tan()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan): These methods calculate the trigonometric sine, cosine, and tangent of an angle (in radians).

    ```javascript
    console.log(Math.sin(Math.PI / 6)); // Output: 0.5 (sin(π/6) = 0.5)
    console.log(Math.cos(Math.PI / 3)); // Output: 0.5 (cos(π/3) = 0.5)
    console.log(Math.tan(Math.PI / 4)); // Output: 1 (tan(π/4) = 1)
    ```

- [`Math.PI`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI) and [`Math.E`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E): These properties hold the values of π (pi) and Euler's number (e).

    ```javascript
    console.log(Math.PI); // Output: 3.141592653589793
    console.log(Math.E); // Output: 2.718281828459045
    ```

## [Tagged Templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

A Tagged Template is a feature that allows you to customize how template literals (strings with embedded expressions) are processed. When you use a tagged template, you can apply a function (the tag) to the template literal, and this function has the ability to modify the resulting string based on the interpolated values and the template itself.

***To create a tagged template, you place the function name (the tag) immediately before the template literal using backticks (``).***

Here's the syntax:

```javascript
function tagFunction(strings, ...values) {
  // Custom logic to process the strings and values
  // Return the modified string
}

const result = tagFunction`template literal with embedded ${values}`;
```

The `tagFunction` takes two arguments:

1. `strings`: An array containing the template literal's static parts (text without interpolated values).

2. `...values`: The values of the interpolated expressions.

Let's see an example to illustrate how tagged templates work:

```javascript
function upperCaseTag(strings, ...values) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += String(values[i]).toUpperCase();
    }
  }
  return result;
}

const name = "Alice";
const age = 30;

const output = upperCaseTag`Hello, my name is ${name} and I am ${age} years old.`;

console.log(output); // Hello, my name is ALICE and I am 30 years old.
```

In the above example, we defined a `upperCaseTag` function as the tag for the template literal. This function iterates over the `strings` array and appends each static part to the `result` string. If there is a corresponding value at that index, it converts the value to uppercase and appends it to the `result` string.

When we use the `upperCaseTag` function with the template literal, it modifies the interpolated values (name and age) to be in uppercase.

Tagged templates are powerful because they allow you to customize how template literals are processed and can be used for various purposes like internationalization, escaping HTML, or other custom formatting requirements.

Readings:

- [Tagged templates - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)

- [Tagged Template Literals](https://wesbos.com/tagged-template-literals)

- [Magic of Tagged Templates Literals in JavaScript?](https://patelhemil.medium.com/magic-of-tagged-templates-literals-in-javascript-e0e2379b1ffc)