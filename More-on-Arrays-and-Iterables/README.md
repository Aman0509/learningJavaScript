# More on Arrays & Iterables

| Contents |
| :--- |
| [What are 'Iterables' and 'Array-like Objects'?](#what-are-iterables-and-array-like-objects) |
| [Creating Arrays](#creating-arrays) |
| [Adding or Removing Elements in an Array](#adding-or-removing-elements-in-an-array) |
| [Selecting Ranges & Creating Copies with `slice()`](#selecting-ranges--creating-copies-with-slice) |
| [Adding Arrays to Arrays with `concat()`](#adding-arrays-to-arrays-with-concat) |
| [Retrieving Indexes with `indexOf()` & `lastIndexOf()'](#retrieving-indexes-with-indexof--lastindexof) |
| [Finding Stuff - `find()` & `findIndex()`](#finding-stuff---find--findindex) |
| [`include()` method](#include-method) |
| [`forEach()` and `map()`](#foreach-and-map) |
| [`sort()` and `reverse()`](#sort-and-reverse) |
| [Filtering Array with `filter()`](#filtering-array-with-filter) |
| [`reduce()` method](#reduce-method) |
| [Chaining Methods in JavaScript](#chaining-methods-in-javascript) |
| [Array & Strings - `split()` and `join()`](#array--strings---split-and-join) |
| [The Spread Operator (`...`)](#the-spread-operator) |
| [Understanding Array Destructuring](#understanding-array-destructuring) |
| [Maps & Sets](#maps--sets) |

&nbsp;

:abacus: [Understand with Code](summary-with-code/app.js)


## [What are 'Iterables' and 'Array-like Objects'?](https://drive.google.com/uc?export=view&id=1QvaoUZHhaidX0yJezqB8Jyy9eZ3ac5LS)

In JavaScript, an iterable is an object that implements the iterable protocol, which means it defines a method `Symbol.iterator` that returns an iterator object. An iterator is an object that provides a `next()` method, which returns the next value in the sequence. Examples of iterables in JavaScript include arrays, strings, maps, and sets.

An array-like object is an object that has numeric indices and a length property, but does not necessarily implement the iterable protocol. Examples of array-like objects in JavaScript include the `arguments` object and DOM NodeList objects.

Array-like objects can be treated like arrays in some cases, but they may not have all the methods and properties of a true array. For example, they may not have the `forEach()` method, or they may not respond correctly to array methods like `slice()` or `map()`. However, you can often convert an array-like object to a true array using the `Array.from()` method or the spread operator `...`.

## Creating [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

In JavaScript, you can create arrays in several ways:

1. **Using Array Literals**

    You can create an array using array literals, which is the most common way. You just need to enclose the comma-separated values inside square brackets. For example:

    ```javascript
    let myArray = [1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]
    ```

2. **Using the [`Array()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) Constructor**

    You can create an array using the `Array()` constructor, which allows you to specify the length of the array. For example:

    ```javascript
    let myArray = new Array(5); // empty array (with undefined value) of length 5 will be created
    let myArray = new Array(1,2,3,4,5); // [1, 2, 3, 4, 5]
    ```

3. **Using [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) Method**

    You can also create an array using the `Array.from()` method, which allows you to create an array from an iterable object or an array-like object. For example:

    ```javascript
    let myArray = Array.from("Hello"); // ['H', 'e', 'l', 'l', 'o']
    ```

4. **Using [`Array.of()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of) Method**

    The `Array.of()` method creates a new array instance with a variable number of arguments. For example:

    ```javascript
    let myArray = Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
    ```

> Note that arrays in JavaScript are dynamic, which means that you can add or remove elements at any time, and you don't need to specify the length of the array when you create it.

Arrays can store any kind of data, including, `Numbers`, `Strings`, `Booleans`, `Objects`, `Arrays`, `Functions`, `null`, `undefined` and `Symbols`.

Arrays in JavaScript:

- Can also be heterogeneous, which means that they can store a mixture of data types. For example, you can create an array that contains numbers, strings, and objects:

    ```javascript
    let myArray = [1, "hello", {name: "John", age: 25}];
    ```

- Are also dynamically sized, which means that you can add or remove elements at any time without having to resize the array manually.

## Adding or Removing Elements in an Array

In JavaScript, you can add and remove elements from an array using several methods. Here are some of the most commonly used methods:

- **Adding Elements to an Array**

    1. [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - This method adds one or more elements to the end of an array and returns the new length of the array. For example:

    ```javascript
    let myArray = [1, 2, 3];
    myArray.push(4, 5);
    console.log(myArray); // Output: [1, 2, 3, 4, 5]
    ```

    2. [`unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) - This method adds one or more elements to the beginning of an array and returns the new length of the array. For example:

    ```javascript
    let myArray = [1, 2, 3];
    myArray.unshift(-1, 0);
    console.log(myArray); // Output: [-1, 0, 1, 2, 3]
    ```

    3. [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) -  This method can add or remove elements from an array at any position. It takes three parameters: the index at which to start changing the array, the number of elements to remove (if any), and the elements to add (if any). This methods returns an array containing the deleted elements. For example:

    ```javascript
    let myArray = [1, 2, 3];
    console.log(myArray.splice(1, 0, 4, 5)); // []
    console.log(myArray); // Output: [1, 4, 5, 2, 3]
    ```

    4. Inserting at specific index: You can also insert an element at a specific index in an array by simply assigning a value to that index. If the index you are assigning a value to is greater than or equal to the length of the array, then the array will be automatically resized to accommodate the new value.

    ```javascript
    let myArray = [1, 2, 3, 4, 5];
    myArray[7] = 7;
    console.log(myArray); // Output: [1, 2, 3, 4, 5, undefined, undefined, 7]
    ```

    This is not a favorable method of insert operation. However, this is possible.

- **Removing Elements to an Array**

    1. [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) - This method removes the last element from an array and returns the removed element. For example:

    ```javascript
    let myArray = [1, 2, 3];
    let lastElement = myArray.pop();
    console.log(myArray); // Output: [1, 2]
    console.log(lastElement); // Output: 3
    ```

    2. [`shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) - This method removes the first element from an array and returns the removed element. For example:

    ```javascript
    let myArray = [1, 2, 3];
    let firstElement = myArray.shift();
    console.log(myArray); // Output: [2, 3]
    console.log(firstElement); // Output: 1
    ```

    3. [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) - This method can also be used to remove elements from an array. To remove elements, you just need to specify the index at which to start removing elements and the number of elements to remove. For example:

    ```javascript
    let myArray = [1, 2, 3, 4, 5];
    myArray.splice(2, 2);
    console.log(myArray); // Output: [1, 2, 5]
    ```

## Selecting Ranges & Creating Copies with [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

The `slice()` method is a built-in JavaScript function that allows you to extract a section of an array, string, or other iterable object without modifying the original data.

Syntax

```javascript
arr.slice(startIndex, endIndex);
```

Here, `arr` is the array to be sliced, `startIndex` is the index at which to start the slice (inclusive), and `endIndex` is the index at which to end the slice (exclusive).

For example, let's say we have an array of numbers:

```javascript
const numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(1, 4); // [2, 3, 4] (copy of 'numbers' array. Changes done to this will not affect 'numbers' array)
```

In this example, the `slice()` method will return a new array containing the elements at indexes 1, 2, and 3 of the original `numbers` array. The resulting `slicedNumbers` array will be `[2, 3, 4]`.

```javascript
console.log(numbers.slice(2, -1)); // [3, 4]
console.log(numbers.slice(3)); // [4, 5]
console.log(numbers.slice(3,1)); // []
```

> Note that the slice() method does not modify the original numbers array. Instead, it returns a new array containing the sliced elements.

## Adding Arrays to Arrays with [`concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

The `concat()` method is a built-in JavaScript function that allows you to combine two or more arrays into a single array. ***It does not modify the original arrays; instead, it creates a new array that contains the elements from all the arrays that are concatenated together.***

Syntax

```javascript
const newArray = array1.concat(array2, array3, ..., arrayN);
```

Here, `array1` is the first array to be concatenated, and `array2` through `arrayN` are additional arrays to be concatenated, if any.

For example, let's say we have two arrays of numbers:

```javascript
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedNumbers = numbers1.concat(numbers2);
```

In this example, the `concat()` method will create a new array that contains all the elements from `numbers1` followed by all the elements from `numbers2`. The resulting combinedNumbers array will be `[1, 2, 3, 4, 5, 6]`.

> Note that the `concat()` method does not modify the original arrays. Instead, it creates a new array that contains the concatenated elements. If you want to add new elements to an array, you can also use the `push()` method, which adds one or more elements to the end of an array.

## Retrieving Indexes with [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) & [`lastIndexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

**`indexOf()`**

This method is a built-in JavaScript function that allows you to search for a specific element in an array and returns the index of the first occurrence of that element. If the element is not found, the method returns -1.

Syntax

```javascript
array.indexOf(searchElement, fromIndex);
```

Here, `array` is the array to be searched, `searchElement` is the element to search for, and `fromIndex` is the optional index from which to start the search.

For example, let's say we have an array of numbers:

```javascript
const numbers = [1, 2, 3, 4, 5, 2];
console.log(numbers.indexOf(3)); // 2
console.log(numbers.indexOf(3, 2)); // 2
console.log(numbers.indexOf(3, 3)); // -1
console.log(numbers.indexOf(2)); // 1
console.log(numbers.indexOf(2, 3)); // 5
```

> Note that the `indexOf()` method only returns the index of the first occurrence of the element. If you want to find the index of the last occurrence of an element, you can use the `lastIndexOf()` method.

**`lastIndexOf()`**

This method is a built-in JavaScript function that allows you to search for a specific element in an array and returns the index of the last occurrence of that element. If the element is not found, the method returns -1.

Syntax

```javascript
array.lastIndexOf(searchElement, fromIndex);
```

Here, `array` is the array to be searched, `searchElement` is the element to search for, and `fromIndex` is the optional index from which to start the search in reverse.

For example, let's say we have an array of numbers:

```javascript
const numbers = [1, 2, 3, 4, 3, 5];
console.log(numbers.lastIndexOf(3)); // 4
console.log(numbers.lastIndexOf(3, 3)); // 2
console.log(numbers.lastIndexOf(6)); // -1
```

**Limitation of `indexOf()` & `lastIndexOf()` with Reference variable in array**

The `indexOf()` and `lastIndexOf()` methods compare elements in an array using the strict equality operator (`===`). When searching for a reference variable inside an array, these methods search for the same reference, not for objects with the same properties.

For example, consider the following code:

```javascript
const obj = {name: 'John'};
const arr = [obj, {name: 'Jane'}, {name: 'John'}];

const index1 = arr.indexOf(obj);
const index2 = arr.lastIndexOf(obj);
console.log(index1); // 0
console.log(index2); // 0
```

In this example, we define an object `obj` and an array `arr` that contains three objects, including `obj` itself. We then use the `indexOf()` and `lastIndexOf()` methods to find the index of `obj` in the arr array.

Since `obj` is a reference variable, the `indexOf()` and `lastIndexOf()` methods will search for the same reference in the array, not for objects with the same properties. In this case, both `index1` and `index2` will be `0`, which is the index of `obj` in the `arr` array.

If we define a new object with the same properties as `obj` and search for it in the `arr` array, we won't find it:

```javascript
const obj2 = {name: 'John'};
const index3 = arr.indexOf(obj2);
const index4 = arr.lastIndexOf(obj2); 
console.log(index3); // -1
console.log(index4); // -1
```

In summary, when searching for reference variables inside an array using `indexOf()` and `lastIndexOf()`, the methods compare the reference of the search element with the references of the elements in the array.

## Finding Stuff - [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) & [`findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

**`find()`**

This method is a built-in function in JavaScript that is used to search for the first element in an array that satisfies a given condition. It returns the value of the first element that satisfies the condition, or undefined if no such element is found.

Syntax

```javascript
array.find(callback(element[, index[, array]])[, thisArg])
```

Here, `array` is the array to be searched, `callback` is the function that defines the condition to be tested against each element of the array, `element` is the current element being processed in the array, `index` is the index of the current element being processed, and `array` is the array being processed. `thisArg` is an optional object that represents the `this` value to be used in the callback function.

The `callback` function takes three arguments:

- `element`: The current element being processed in the array.
- `index` (optional): The index of the current element being processed.
- `array` (optional): The array being processed.

The `callback` function should return a boolean value. If it returns `true`, the `find()` method will return the value of the current element.

For example, let's say we have an array of objects that represent people:

```javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 }
];
const person = people.find((element) => {
  return element.age > 30;
}); // {name: 'Charlie', age: 35}
```

In this example, the `find()` method will iterate over each element of the `people` array and call the callback function for each element. The callback function checks if the current element's `age` property is greater than 30. When it finds the first element that satisfies this condition, which is the object `{ name: 'Charlie', age: 35 }`, it returns that element.

***`find()` returns the exact object as present in array and not it's copy. So, if you make any changes to it, it will be reflected in that array as well.***

```javascript
person.name = "John"
console.log(people); // [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'John', age: 35}, {name: 'David', age: 40}]
```

The `find()` method returns only the first element that satisfies the condition. If you want to find all elements that satisfy the condition, you can use the `filter()` method instead.

**`findIndex()`**

This method in JavaScript is similar to the `find()` method, but it returns the index of the first element in an array that satisfies a given condition. It returns `-1` if no such element is found.

For example, let's say we have an array of numbers:

```javascript
const numbers = [1, 2, 3, 4, 5];
const index = numbers.findIndex((element) => {
  return element % 2 === 0;
});
console.log(index); // 1
```

In this example, the `findIndex()` method will iterate over each element of the `numbers` array and call the callback function for each element. The callback function checks if the current element is even. When it finds the first element that satisfies this condition, which is the number `2`, it returns the index of that element, which is `1`.

If no element in the array satisfies the condition, the `findIndex()` method will return `-1`.

## [`includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method

This method in JavaScript is an array method used to determine whether an array contains a specific element. The method returns a boolean value of `true` if the element is found in the array, and `false` if it is not found.

Syntax

```javascript
array.includes(element)
```

- `array`: This is the array that you want to search for the specified element.
- `element`: This is the element that you want to search for in the array.

Here is an example of using the `include()` method:

```javascript
const fruits = ['apple', 'banana', 'orange'];
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // Output: true
```
`

> Note - If you have an array with objects then check the existence of any object with `includes()` will not work.

## [`forEach()`]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)) and [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

**`forEach()`**

This method is a built-in method in JavaScript that allows you to loop over the elements of an array and execute a provided function once for each element. It is commonly used for performing an action on each element of an array, such as printing the elements, modifying the elements, or performing a calculation on the elements.

Syntax

```javascript
array.forEach(function(currentValue, index, array) {
  // code to execute for each element
});
```

The `forEach()` method takes a function as an argument, which will be called once for each element of the array. The function takes three arguments:

- `currentValue`: The value of the current element being processed.
- `index`: The index of the current element being processed.
- `array`: The array on which `forEach()` was called.

Let's see some examples:

```javascript
// Example 1
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number, index, array) {
  array[index] = number * 2;
});
console.log(numbers); // [2, 4, 6, 8, 10]

// Example 2
const prices = [10.99, 5.99, 3.99, 6.59, 3.32];
const tax = 0.25;
const taxAdjustedPrices = [];
prices.forEach((price, index, prices) => {
  const priceObj = {
    index: index,
    taxAdjPrice: price * (1 + tax)
  };
  taxAdjustedPrices.push(priceObj);
});
console.log(taxAdjustedPrices); // [{index: 0, taxAdjPrice: 13.7375}, {index: 1, taxAdjPrice: 7.487500000000001}, {index: 2, taxAdjPrice: 4.987500000000001}, {index: 3, taxAdjPrice: 8.2375}, {index: 4, taxAdjPrice: 4.1499999999999995}]
```

**`map()`**

This method is a built-in function in JavaScript that is used to create a new array with the results of calling a provided function on every element in the original array. It returns a new array with the same length as the original array, but with each element transformed based on the return value of the provided function.

Syntax

```javascript
array.map(function(currentValue, index, array) {
  // code to execute for each element
  return transformedValue;
});
```

The `map()` method takes a function as an argument, which will be called once for each element of the array. The function takes three arguments:

- `currentValue`: The value of the current element being processed.
- `index`: The index of the current element being processed.
- `array`: The array on which `map()` was called.

Here are some examples:

```javascript
// Example 1
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6]

// Example 2
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
const peopleWithFullName = people.map(function(person) {
  return { fullName: person.name + ' Smith', age: person.age };
});
console.log(peopleWithFullName); // Output: [{ fullName: 'Alice Smith', age: 25 }, { fullName: 'Bob Smith', age: 30 }, { fullName: 'Charlie Smith', age: 35 }]
```

**Differences**

1. Return Value
  The `forEach()` method does not return anything, whereas the `map()` method returns a new array with the results of calling a provided function on every element in the original array.

2. Purpose
  The `forEach()` method is typically used when you want to perform some operation on each element of the array, but you do not need to create a new array. For example, you might use `forEach()` to print out each element of an array, or to modify each element of an array in place.

  The `map()` method, on the other hand, is typically used when you want to create a new array based on the values in the original array. For example, you might use `map()` to create a new array that contains the square of each number in the original array.

3. Callback Function
  Both methods take a callback function as an argument. The callback function is executed for each element in the array, but the arguments passed to the callback function and the way the return value is used are different:

  - For `forEach()`, the callback function takes the current element, its index, and the original array as arguments. ***The return value of the callback function is ignored.***

  - For `map()`, the callback function takes the current element, its index, and the original array as arguments. ***The return value of the callback function is used to create a new array.***

## [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) and [`reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

**`sort()`**

This method is a built-in function in JavaScript that is used to sort the elements of an array. It arranges the elements of an array in ascending or descending order, depending on the comparison function provided as an argument. ***If no function is provided, it sorts the array elements in lexicographical order.***

Syntax

```javascript
array.sort(compareFunction);
```

The `sort()` method takes a single argument, which is the compare function. This function is optional, but it is recommended to use it to ensure the correct sorting order.

The compare function takes two arguments, which are the two elements being compared. *The function should return a negative value if the first argument should be sorted before the second argument, a positive value if the second argument should be sorted before the first argument, or zero if the two arguments are equal and their order doesn't matter.*

Let's see some examples:

```javascript
// Example 1
const numbers = [3, 1, 4, 2, 5];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Example 2
const fruits = ['apple', 'banana', 'orange', 'pear'];
fruits.sort(function(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(fruits); // Output: ['pear', 'orange', 'banana', 'apple']

// Example 3
const people = [{name: 'Alice', age: 25},  {name: 'Bob', age: 30},  {name: 'Charlie', age: 35}];
people.sort(function(a, b) {
  return a.age - b.age;
});
console.log(people); // Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]
```

In summary, the `sort()` method is a useful tool for sorting the elements of an array in JavaScript. It can be customized to sort the elements in any order based on a comparison function that you provide.

**`reverse()`**

This method is a built-in function in JavaScript that is used to reverse the order of the elements in an array. It does not create a new array; instead, it modifies the original array in place.

Syntax

```javascript
array.reverse();
```

The `reverse()` method does not take any arguments. It simply reverses the order of the elements in the array.

Let's understand it with some examples:

```javascript
// Example 1
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// Example 2
const fruits = ['apple', 'banana', 'orange'];
fruits.reverse();
console.log(fruits); // Output: ['orange', 'banana', 'apple']

// Example 3
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
people.reverse();
console.log(people); // Output: [{ name: 'Charlie', age: 35 }, { name: 'Bob', age: 30 }, { name: 'Alice', age: 25 }]
```

## Filtering Array with [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

This method is a built-in function in JavaScript that is used to create a new array with all the elements that pass a certain condition. It does not modify the original array, but instead creates a new one with the filtered elements.

Syntax

```javascript
array.filter(callback(element[, index[, array]])[, thisArg])
```

The `filter()` method takes one required argument, which is a callback function that defines the condition for filtering. The callback function should return a boolean value indicating whether the element should be included in the new array or not. If it returns true, the element is included in the new array; otherwise, it is excluded.

The callback function can also take up to three optional arguments:

- `element`: The current element being processed in the array.
- `index`: The index of the current element being processed in the array.
- `array`: The array on which the `filter()` method was called.

Let's understand it with some examples:

```javascript
// Example 1
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(function(number) {
  return number > 2;
});
console.log(filteredNumbers); // Output: [3, 4, 5]

// Example 2
const fruits = ['apple', 'banana', 'orange'];
const filteredFruits = fruits.filter(function(fruit) {
  return fruit.length > 5;
});
console.log(filteredFruits); // Output: ['banana', 'orange']

// Example 3
const people = [
  {name: 'Alice', age: 25},
  {name: 'Bob', age: 30},
  {name: 'Charlie', age: 35}
];

const filteredPeople = people.filter(function(person) {
  return person.age > 30;
});
console.log(filteredPeople); // Output: [{ name: 'Charlie', age: 35 }]
```

In summary, the `filter()` method is a useful tool for creating a new array with elements that pass a certain condition. It can be used to filter out unwanted elements from an array without modifying the original array.

## [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method

This method is a built-in function in JavaScript that is used to reduce an array to a single value. It iterates over each element of an array and applies a function that reduces the array to a single value. The result of the function is then used as the accumulator for the next iteration.

Syntax

```javascript
array.reduce(callback[, initialValue])
```

The `reduce()` method takes two arguments:

- `callback`: The function that is used to reduce the array to a single value. ***This function takes 4 arguments: the accumulator(previous value), the current value of the array, index value of current value and the array `reduce()` was called upon.***
- `initialValue` (optional): The initial value of the accumulator. If this argument is not provided, the first element of the array is used as the initial value.

Let's understand it with some examples:

```javascript
// Example 1
let numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Example 2
numbers = [3, 6, 2, 8, 1];
const max = numbers.reduce(function(accumulator, currentValue) {
  if (currentValue > accumulator) {
    return currentValue;
  } else {
    return accumulator;
  }
});
console.log(max); // Output: 8
```

## Chaining Methods in JavaScript

With all these useful array methods we've learned, it's important to understand how you can combine them.

Let's take `map()` and `reduce()` as an example:

```javascript
const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const transformedArray = originalArray.map(obj => obj.price); // produces [10.99, 5.99, 29.99]
const sum = transformedArray.reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97
```

Of course, you could skip the map step and just add the extraction logic to `reduce()`:

```javascript
const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const sum = originalArray.reduce((sumVal, curVal) => sumVal + curVal.price, 0); // => 46.97
```

But let's say you have a more complex extraction logic and hence want to split this into multiple method calls. Or you have a re-usable map function which you want to be able to use in different places of your app. Then you can still write the initial example in a more concise way if you **leverage method chaining**:

```javascript
const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const sum = originalArray.map(obj => obj.price).reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97
```

We call `.reduce()` directly on the result of `map()`(which produces an array, that's why this is possible). Hence we can avoid storing the mapped array in a separate constant or variable that we might not need in any other place.

## Array & Strings - [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and [`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

**`split()`**

This method is a built-in function in JavaScript that allows you to split a string into an array of substrings based on a specified separator.

Syntax

```javascript
string.split(separator, limit);
```

Where:

- `string` is the string that you want to split.
- `separator` is the string that you want to use as a separator. This can be a string, a regular expression, or a special value, such as an empty string or a space.
- `limit` is an optional parameter that specifies the maximum number of splits to be performed. If this parameter is not specified, all possible splits are performed.

Let's understand with an example:

```javascript
const fruits = "apple,banana,orange";
const fruitArray = fruits.split(",");
console.log(fruitArray); // Output: ["apple", "banana", "orange"]
```

**`join()`**

This method is a built-in function in JavaScript that allows you to join the elements of an array into a string, using a specified separator between each element.

Syntax

```javascript
array.join(separator);
```

Where:

- `array` is the array whose elements you want to join into a string.
- `separator` is the string that you want to use as a separator between the elements. This is an optional parameter, and if it is not provided, a comma will be used as the default separator.

Let's understand with an example:

```javascript
const numbers = [1, 2, 3, 4, 5];
const numberString = numbers.join("-");
console.log(numberString); // Output: "1-2-3-4-5"
```

The `join()` method is useful when you want to convert an array into a string, such as when constructing a URL query string or when generating a comma-separated value (CSV) file. It allows you to customize the separator used between the elements, making it a very flexible method for joining arrays into strings in JavaScript.

## The Spread Operator ([`...`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax))

The spread operator (`...`) is a new feature in JavaScript that allows you to spread the contents of an iterable object, such as an array or an object, into a new array or object. It provides an easy way to concatenate or copy elements from one array or object to another, and can also be used to pass multiple arguments to a function.

The syntax for using the spread operator with an array is as follows:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]
```

In this example, we have two arrays `arr1` and `arr2`. We use the spread operator `...` to concatenate the elements of these arrays into a new array newArr. The result is a new array that contains all the elements from both arrays.

The syntax for using the spread operator with an object is as follows:

```javascript
// Example 1
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const newObj = { ...obj1, ...obj2 };
console.log(newObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Example 2
const arr3 = [
    {
      name: "John",
      age: 29
    },
    {
      name: "James",
      age: 35
    }
  ]
const arr4 = [...arr3];
console.log(arr4); // Output: [{name: "John", age: 29}, {name: "James", age: 35}]
arr3[0].age = 30;
console.log(arr4); // Output: [{name: "John", age: 30}, {name: "James", age: 35}]
```

In 1st example, we have two objects `obj1` and `obj2`. We use the spread operator `...` to copy the properties of these objects into a new object `newObj`. The result is a new object that contains all the properties from both objects.

In 2nd example, we have an array of obj, `arr3` and copy of it created using spread operator `...` and stored in `arr4`. In this case, note that, copied array `arr4` with objects has same reference value to `arr3`. Hence, changes to `arr3`'s objects will be reflected in `arr4` and vice versa.

The spread operator can also be used to pass multiple arguments to a function. For example:

```javascript
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
```

In this example, we have a function `sum` that takes three arguments. We use the spread operator `...` to pass an array of numbers to the function. The result is the sum of the numbers in the array.

## Understanding [Array Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Array destructuring is a feature in JavaScript that allows you to extract individual elements or multiple elements from an array and assign them to variables in a single statement. It provides a simple and concise way to unpack values from arrays and can help to make your code more readable and maintainable.

The syntax for array destructuring is as follows:

```javascript
const [variable1, variable2, ...rest] = array;
```

In this syntax, `variable1` and `variable2` are the variables that you want to assign values from the array to, and rest is an optional variable that will be assigned an array of the remaining elements in the array.

Here's an example that demonstrates how array destructuring works:

```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

In this example, we have an array `numbers` that contains five numbers. We use array destructuring to assign the first two numbers to variables `first` and `second`, and the remaining numbers to the `rest` array.

You can also use array destructuring with nested arrays, like this:

```javascript
const matrix = [[1, 2], [3, 4]];
const [[a, b], [c, d]] = matrix;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
console.log(d); // Output: 4
```

In this example, we have a nested array matrix that contains two sub-arrays. We use array destructuring to assign the values of the sub-arrays to variables `a`, `b`, `c`, and `d`.

## Maps & Sets

### Overview

<img src="https://drive.google.com/uc?export=view&id=1J05xB_-VCFifh9sGtHoW6ltd4a5wo-J6" height="350" width="700" alt="academind slide">

### Working with [Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#instance_methods)

A Set is a built-in data structure that allows you to store unique values of any type, including primitive types such as strings, numbers, and booleans, as well as more complex types like objects and arrays.

You can create a new Set object by calling the Set constructor function without any arguments, or by passing an iterable object like an array to the Set constructor function.

Here's an example of creating a new Set object with some values:

```javascript
const mySet = new Set(['apple', 'banana', 'orange']);
```

This creates a new Set object with three elements: 'apple', 'banana', and 'orange'. Note that any duplicate elements are automatically removed, so if you try to add a value that already exists in the Set, it will be ignored.

Once you have a Set object, there are several methods and properties you can use to interact with it:

1. **[add(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add)**: Adds a new element to the Set.

```javascript
mySet.add('pear'); // adds 'pear' to the Set
```

2. **[delete(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete)**: Removes an element from the Set.

```javascript
mySet.delete('banana'); // removes 'banana' from the Set
```

3. **[has(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has)**: Checks if an element is in the Set.

```javascript
console.log(mySet.has('apple')); // returns true
console.log(mySet.has('banana')); // returns false (since it was removed)
```

4. **[size](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size)**: Returns the number of elements in the Set.

```javascript
console.log(mySet.size); // 3
```

5. **[forEach(callbackFn, thisArg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)**: Executes a provided function once for each element in the Set.

```javascript
mySet.forEach(function(value) {
  console.log(value);
}); // apple orange pear
```

Note that the forEach method takes a callback function as its first argument, which is called once for each element in the Set. You can also pass a second argument to specify the value of this inside the callback function.

6. **[keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/keys)**: Returns a new Iterator object that contains the keys for each element in the Set.

```javascript
const mySet = new Set(['apple', 'banana', 'orange']);
const keysIterator = mySet.keys();

console.log(keysIterator.next()); // { value: 'apple', done: false }
console.log(keysIterator.next()); // { value: 'banana', done: false }
console.log(keysIterator.next()); // { value: 'orange', done: false }
console.log(keysIterator.next()); // { value: undefined, done: true }
```

7. **[values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values)**: Returns a new Iterator object that contains the values for each element in the Set.

```javascript
const mySet = new Set(['apple', 'banana', 'orange']);
const valuesIterator = mySet.values();

console.log(valuesIterator.next()); // { value: 'apple', done: false }
console.log(valuesIterator.next()); // { value: 'banana', done: false }
console.log(valuesIterator.next()); // { value: 'orange', done: false }
console.log(valuesIterator.next()); // { value: undefined, done: true }
```

8. **[entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries)**: Returns a new Iterator object that contains an array of [value, value] for each element in the Set (since a Set doesn't have keys).

```javascript
const mySet = new Set(['apple', 'banana', 'orange']);
const entriesIterator = mySet.entries();

console.log(entriesIterator.next()); // { value: ['apple', 'apple'], done: false }
console.log(entriesIterator.next()); // { value: ['banana', 'banana'], done: false }
console.log(entriesIterator.next()); // { value: ['orange', 'orange'], done: false }
console.log(entriesIterator.next()); // { value: undefined, done: true }
```

9. **[clear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear)**: Removes all elements from the Set.

```javascript
mySet.clear(); // removes all elements from the Set
```

**Other operations in Set**

**Union**

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const unionSet = new Set([...set1, ...set2]);

console.log(unionSet); // Set { 1, 2, 3, 4 }
```

**Intersection**

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const intersectionSet = new Set([...set1].filter(x => set2.has(x)));

console.log(intersectionSet); // Set { 2, 3 }
```

**Difference**

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const differenceSet = new Set([...set1].filter(x => !set2.has(x)));

console.log(differenceSet); // Set { 1 }
```

Readings:

- [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

- [Sets in JavaScript](https://www.geeksforgeeks.org/sets-in-javascript/)

### Working with [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

A Map is a built-in data structure that allows you to store key-value pairs. The key can be of any type, including primitive types and objects, and the value can be of any type as well.

You can create a new Map object by calling the Map constructor function without any arguments, or by passing an iterable object like an array of key-value pairs to the Map constructor function.

Here's an example of creating a new Map object with some key-value pairs:

```javascript
const myMap = new Map([
  ['apple', 1],
  ['banana', 2],
  ['orange', 3]
]);
```

This creates a new Map object with three key-value pairs: 'apple' maps to 1, 'banana' maps to 2, and 'orange' maps to 3.

Once you have a Map object, there are several methods and properties you can use to interact with it:

1. **[set(key, value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)**: Adds a new key-value pair to the Map.

```javascript
myMap.set('pear', 4); // adds a new key-value pair 'pear' maps to 4
```

2. **[get(key)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)**: Returns the value associated with the given key, or undefined if the key does not exist in the Map.

```javascript
myMap.get('apple'); // returns 1
myMap.get('banana'); // returns 2
myMap.get('pear'); // returns 4 (since it was added)
myMap.get('grape'); // returns undefined
```

3. **[has(key)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)**: Checks if a key exists in the Map.

```javascript
myMap.has('apple'); // returns true
myMap.has('grape'); // returns false
```

4. **[delete(key)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)**: Removes a key-value pair from the Map.

```javascript
myMap.delete('banana'); // removes the 'banana' key-value pair from the Map
```

5. **[size](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size)**: Returns the number of key-value pairs in the Map.

```javascript
myMap.size; // returns 3 (since 'banana' was removed and 'pear' was added)
```

6. **[forEach(callbackFn, thisArg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)**: Executes a provided function once for each key-value pair in the Map.

```javascript
myMap.forEach(function(value, key) {
  console.log(key, value);
}); // 'apple 1' 'orange 3' 'pear 4'
```

Note that the `forEach` method takes a callback function as its first argument, which is called once for each key-value pair in the Map. You can also pass a second argument to specify the value of this inside the callback function.

7. **[keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys)**: Returns a new Iterator object that contains the keys for each key-value pair in the Map.

```javascript
const keysIterator = myMap.keys();

console.log(keysIterator.next()); // { value: 'apple', done: false }
console.log(keysIterator.next()); // { value: 'orange', done: false }
console.log(keysIterator.next()); // { value: 'pear', done: false }
console.log(keysIterator.next()); // { value: undefined, done: true }
```

8. **[values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values)**: Returns a new Iterator object that contains the values for each key-value pair in the Map.

```javascript
const valuesIterator = myMap.values();

console.log(valuesIterator.next()); // { value: 1, done: false }
console.log(valuesIterator.next()); // { value: 3, done: false }
console.log(valuesIterator.next()); // { value: 4, done: false }
console.log(valuesIterator.next()); // { value: undefined, done: true }
```

9. **[entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries)**: Returns a new Iterator object that contains an array of [key, value] for each key-value pair in the Map.

```javascript
const entriesIterator = myMap.entries();

console.log(entriesIterator.next()); // { value: ['apple', 1], done: false }
console.log(entriesIterator.next()); // { value: ['orange', 3], done: false }
console.log(entriesIterator.next()); // { value: ['pear', 4], done: false }
console.log(entriesIterator.next()); // { value: undefined, done: true }
```

10. **[clear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear)**: Removes all key-value pairs from the Map.

```javascript
myMap.clear(); // removes all key-value pairs from the Map
```

### Maps vs Objects

<img src="https://drive.google.com/uc?export=view&id=1duFt-jLCCgfLpvQEnblBMKACamyRpRia" height="350" width="700" alt="academind slide">

Readings:

- [7 Differences between Objects and Maps in JavaScript](https://medium.com/dailyjs/7-differences-between-objects-and-maps-in-javascript-bc901dfa9350)

- [Differences between JavaScript Map and Object](https://dev.to/hebashakeel/differences-between-javascript-map-and-object-821)

- [JavaScript Map vs Object](https://www.scaler.com/topics/javascript-map-vs-object/)

### Understanding [`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

`WeakSet` is a built-in data type that is similar to a Set but only stores weak references to its elements. This means that objects stored in a `WeakSet` can be garbage collected even if there is a reference to them in the `WeakSet`. Here are some examples of how to create and use a `WeakSet`, as well as some of its methods:

```javascript
// Create a WeakSet
const myWeakSet = new WeakSet();

// Create some objects to store in the WeakSet
const obj1 = { name: "John" };
const obj2 = { name: "Mary" };
const obj3 = { name: "Bob" };

// Add the objects to the WeakSet
myWeakSet.add(obj1);
myWeakSet.add(obj2);
myWeakSet.add(obj3);

// Check if the WeakSet contains an object
console.log(myWeakSet.has(obj1)); // true

// Remove an object from the WeakSet
myWeakSet.delete(obj2);

// Check if the WeakSet contains the removed object
console.log(myWeakSet.has(obj2)); // false
```

In this example, we created a `WeakSet` called `myWeakSet` and added three objects to it using the `add` method. We then checked if the `WeakSet` contained the first object using the `has` method, which returned `true`. Next, we removed the second object from the `WeakSet` using the `delete` method and checked if it was still in the `WeakSet`, which returned `false`.

Here are some other methods that can be used with WeakSet:

```javascript
// Create a WeakSet
const myWeakSet = new WeakSet();

// Create some objects to store in the WeakSet
const obj1 = { name: "John" };
const obj2 = { name: "Mary" };
const obj3 = { name: "Bob" };

// Add the objects to the WeakSet
myWeakSet.add(obj1);
myWeakSet.add(obj2);
myWeakSet.add(obj3);

// Get the number of objects in the WeakSet
console.log(myWeakSet.size); // undefined

// Iterate over the objects in the WeakSet
myWeakSet.forEach((obj) => {
  console.log(obj.name);
});
// "John"
// "Bob"
```

Note that unlike Set, WeakSet does not have a `size` property or a `keys` method since it does not support iteration over its elements. Additionally, the `forEach` method can be used to iterate over the elements of the WeakSet, but it is not guaranteed to execute in any particular order since the garbage collector may remove objects from the `WeakSet` at any time.

### Understanding [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

`WeakMap` is a built-in object that provides a collection of key-value pairs where the keys are weakly referenced objects. Similar to `WeakSet`, the objects in a `WeakMap` can be garbage collected if there are no other strong references to them, which makes `WeakMap` useful in cases where you want to associate metadata with objects but you don't want to prevent them from being garbage collected.

Here are the methods available in `WeakMap`:

1. `get(key)`: Returns the value associated with the specified key in the `WeakMap` object, or undefined if the key does not exist.

```javascript
const myWeakMap = new WeakMap();
const obj1 = {};
const obj2 = {};

myWeakMap.set(obj1, "value1");
myWeakMap.set(obj2, "value2");

console.log(myWeakMap.get(obj1)); // "value1"
console.log(myWeakMap.get(obj2)); // "value2"
console.log(myWeakMap.get({})); // undefined
```

2. `set(key, value)`: Sets the value for the specified key in the `WeakMap` object.

```javascript
const myWeakMap = new WeakMap();
const obj1 = {};
const obj2 = {};

myWeakMap.set(obj1, "value1");
myWeakMap.set(obj2, "value2");

console.log(myWeakMap.get(obj1)); // "value1"
console.log(myWeakMap.get(obj2)); // "value2"

myWeakMap.set(obj1, "new value");
console.log(myWeakMap.get(obj1)); // "new value"
```

3. `has(key)`: Returns a boolean indicating whether the specified key exists in the `WeakMap` object.

```javascript
const myWeakMap = new WeakMap();
const obj1 = {};
const obj2 = {};

myWeakMap.set(obj1, "value1");

console.log(myWeakMap.has(obj1)); // true
console.log(myWeakMap.has(obj2)); // false
```

4. `delete(key)`: Removes the key-value pair associated with the specified key from the `WeakMap` object.

```javascript
const myWeakMap = new WeakMap();
const obj1 = {};
const obj2 = {};

myWeakMap.set(obj1, "value1");
myWeakMap.set(obj2, "value2");

console.log(myWeakMap.has(obj1)); // true
myWeakMap.delete(obj1);
console.log(myWeakMap.has(obj1)); // false
```

> Note that `WeakMap` only accepts objects as keys, and attempts to use non-object keys will result in a `TypeError`.

Readings:

- [WeakMap and WeakSet](https://javascript.info/weakmap-weakset#:~:text=WeakMap%20is%20Map%20%2Dlike%20collection,become%20inaccessible%20by%20other%20means.)

- [WeakMap and WeakSet: Understanding JavaScript weak references](https://blog.logrocket.com/weakmap-weakset-understanding-javascript-weak-references/)

- [Map, Set, WeakMap and WeakSet in Javascript](https://medium.com/yemeksepeti-teknoloji/map-set-weakmap-and-weakset-in-javascript-c47e3b120a01)