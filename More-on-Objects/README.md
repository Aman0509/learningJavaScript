# More on Objects

| Contents |
| :--- |
| [What's an Object?](#whats-an-object)|
| [Objects & Primitive Values](#objects--primitive-values) |
| [Adding, Modifying & Deleting Properties](#adding-modifying--deleting-properties) |
| [Special Key Names and Square Bracket Property Access](#special-key-names-and-square-bracket-property-access) |
| [Property Types & Property Order](#property-types--property-order) |
| [Dynamic Property Access & Setting Properties Dynamically](#dynamic-property-access--setting-properties-dynamically) |
| [Understanding Chaining (Property & Method Chaining)](#understanding-chaining-property--method-chaining) |
| [The Object Spread Operator (...)](#the-object-spread-operator) |
| [Understanding Object.assign()](#understanding-objectassign) |
| [Object Destructuring](#object-destructuring) |
| [Checking for Property Existence](#checking-for-property-existence) |
| [Introducing `this` keyword](#introducing-this-keyword) |
| [The Shorthand Syntax to define a Method](#the-shorthand-syntax-to-define-a-method) |
| [Using `bind()` with Methods](#using-bind-with-methods) |
| [`call()` & `apply()`](#call--apply) |
| [What Browser(Sometimes) does to `this`?](#what-browsersometimes-does-to-this) |
| [`this` and Arrow Functions](#this-and-arrow-functions) |
| [Getters and Setters](#getters-and-setters) |

&nbsp;

:abacus: [Understand with Code](summary-with-code/app.js)

:notebook_with_decorative_cover: [Projects](projects/)

## [What's an Object?](https://drive.google.com/uc?export=view&id=1YEh70JlCORd8i7PSuuDV9xK4s_mTqFcZ)

An object is a collection of properties, where each property is a key-value pair. There are several ways to create an object in JavaScript:

1. **Object literal notation**: This is the most common way to create an object in JavaScript. You simply define the object using curly braces and specify the properties and their values using a colon between the property name and value, separated by commas.

```javascript
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  }
};
```

2. **Using the Object() constructor**: You can also create an object using the Object() constructor, which creates an empty object that you can add properties to later.

```javascript
const person = new Object();
person.name = "John";
person.age = 30;
person.address = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345"
};
```

3. **Using a constructor function**: You can create an object using a constructor function, which is a special function that creates objects.

```javascript
function Person(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

const person = new Person("John", 30, {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345"
});
```

JavaScript objects can also have methods, which are functions that are associated with an object. You can define a method as a property of an object, just like any other property. For example:

```javascript
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  },
  sayHello: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.sayHello(); // "Hello, my name is John"
```

## Objects & Primitive Values

Objects are *reference values* - you learned that.

It might not have been obvious yet but it's also important to recognize that, in the end, *objects are of course made up of primitive values*.

Here's an example:

```javascript
const complexPerson = {
  name: 'Max',
  hobbies: ['Sports', 'Cooking'],
  address: {
    street: 'Some Street 5',
    stateId: 5,
    country: 'Germany',
    phone: {
        number: 12 345 678 9,
        isMobile: true
    }
  },
};
```

Event though `complexPerson` has multiple nested reference values (nested arrays and objects), you end up with primitive values if you drill into the object.

`name` holds a string (`Max`) => **Primitive value**

`hobbies` holds an array (i.e. a reference value) which is full of strings (`Sports`, `Cooking`) => **Primitive values**

`address` holds an object which in turn holds a mixture of primitive values like `Some Street 5` and nested objects (phone), but if you dive into phone, you find only numbers and booleans in there => **Primitive values**

So you could say that Primitive values are the core building blocks that hold your data, objects (and arrays) are helpful for organizing and working with that data.

## Adding, Modifying & Deleting Properties

You can access properties of an object in JavaScript using either dot notation or bracket notation.

```javascript
const person = {
  name: 'John',
  age: 25,
  city: 'New York'
}

// Dot Notation
console.log(person.name) // Output: John
console.log(person.age) // Output: 25
console.log(person.city) // Output: New York

// Bracket notation
console.log(person['name']) // Output: John
console.log(person['age']) // Output: 25
console.log(person['city']) // Output: New York
```

You can modify properties of an object in JavaScript using either dot notation or bracket notation.

```javascript
person.age = 30;
console.log(person.age) // Output: 30
person['age'] = 35;
console.log(person['age']) // Output: 35
```

You can delete properties of an object in JavaScript using the `delete` keyword.

```javascript
delete person.age;
console.log(person) // Output: { name: 'John', city: 'New York' }
```

## Special Key Names and Square Bracket Property Access

Object properties can have any string as their name, including special characters and spaces. However, accessing these properties using dot notation may not always work, especially if the property name includes spaces or special characters. In such cases, you can use square bracket notation to access the property.

For example, let's say we have an object with a property name that includes a space:

```javascript
const myObj = {
  'property with space': 42
};
```

To access this property using dot notation, we would get a syntax error:

```javascript
console.log(myObj.property with space); // SyntaxError: Unexpected identifier
```

To access the property using square bracket notation, we would use quotes around the property name:

```javascript
console.log(myObj['property with space']); // Output: 42
```

The same applies to property names that include special characters:

```javascript
const myObj = {
  '@#specialChars': 'hello'
};

console.log(myObj['@#specialChars']); // Output: 'hello'
```

In CSS, Property names can include special characters, such as hyphens, underscores, and colons, as well as spaces. However, when setting or getting CSS property values using JavaScript, you need to use camelCase notation instead of hyphenated or underscored property names. This is because JavaScript object property names cannot include hyphens or spaces. 
However, square bracket notation can be used to access and modify JavaScript object properties with special characters or spaces in their names.

```javascript
const myElement = document.querySelector('.my-element');

// Set the 'font-size' property using square bracket notation
myElement.style['font-size'] = '16px';
```

Note that even though the CSS property name includes a hyphen, we can still use square bracket notation to access the property by putting the property name in quotes.

However, using dot notation is recommended when working with CSS properties, as it is more readable and less error-prone.

In summary, when accessing properties in JavaScript objects, if the property name includes spaces or special characters, use square bracket notation with quotes around the property name.

## Property Types & Property Order

Property or key of an object can also have `Number` type. When using a number as a key, it is automatically converted to a string, since object keys in JavaScript are always strings.

For example:

```javascript
const myObj = {
  1: 'one',
  2.5: 'two',
  3: 'three'
};

console.log(myObj['1']); // outputs 'one'
console.log(myObj[2.5]); // outputs 'two'
console.log(myObj[3]);   // outputs 'three'
```

In the example above, `myObj` is an object with numeric keys `1`, `2.5`, and `3`, each associated with a string value. Notice that when accessing the values using bracket notation, the number is not enclosed in quotes, while when accessing the values using dot notation, the number is treated as a property name and is converted to a string.

It's important to note that while numbers can be used as object keys in JavaScript, it is generally not recommended to do so unless absolutely necessary, since it can lead to confusion and potential bugs. It's typically better to use descriptive string keys instead.

Readings:

- [Object Order in JavaScript](https://betterprogramming.pub/objects-order-in-javascript-faed6b35de0e)

- [The Order of Javascript Object Keys](https://dev.to/frehner/the-order-of-js-object-keys-458d)

## Dynamic Property Access & Setting Properties Dynamically

You can access object properties dynamically using square bracket notation (`[]`). This allows you to specify the property name as a string, variable, or expression. This allows you to specify the property name as a string, variable, or expression.

For example:

```javascript
const myObj = {
  name: 'John',
  age: 30,
  gender: 'male'
};

const propName = 'name';
console.log(myObj[propName]); // outputs 'John'

const propExpr = 'a' + 'ge';
console.log(myObj[propExpr]); // outputs 30
```

In the example above, we have an object `myObj` with properties `name`, `age`, and `gender`. We then define a variable `propName` that holds the string value `'name'`, and access the `name` property using square bracket notation with `myObj[propName]`. We can also define an expression `propExpr` that concatenates the strings `'a'` and `'ge'`, and use it to dynamically access the `age` property of `myObj`.

Note that when using square bracket notation to access object properties dynamically, the property name or expression inside the brackets should be a string. If it is not a string, JavaScript will automatically convert it to a string using the `toString()` method, which may not result in the desired property name. Additionally, if the specified property does not exist in the object, the result will be `undefined`.

You can also add and set object keys dynamically using square bracket notation (`[]`) with a computed property name. This allows you to specify the key name as an expression that is evaluated at runtime.

For example:

```javascript
const keyName = 'myKey';
const myObj = {
  [keyName]: 'myValue'
};

console.log(myObj.myKey); // outputs 'myValue'
```

In the example above, we define a variable `keyName` that holds the string value `'myKey'`. We then create an object `myObj` and use square bracket notation with a computed property name `[keyName]` to dynamically add a new key to the object with the name `'myKey'` and the value `'myValue'`.

Note that the square brackets around the property name indicate that it is a computed property name. The expression inside the brackets is evaluated at runtime to determine the actual property name.

You can also use expressions to compute the value of the key itself. For example:

```javascript
const myObj = {
  ['prop' + 1 + 2]: 'myValue'
};

console.log(myObj.prop12); // outputs 'myValue'
```

In this example, we use an expression `'prop' + 1 + 2` to compute the value of the key. The expression is evaluated to `'prop12'`, which becomes the name of the key in the object.

## Understanding Chaining (Property & Method Chaining)

Chaining refers to a technique where multiple actions can be performed on a single object or value, one after the other, in a single statement. This can be done with properties or methods of an object.

### Property Chaining

With property chaining, you can access multiple properties of an object in a single statement by chaining dot notation. Here's an example:

```javascript
let person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  }
};

let street = person.address.street;
```

In this example, we have an object person with three properties: `name`, `age`, and `address`. The `address` property is itself an object with three properties: `street`, `city`, and `state`.

To access the `street` property of the `address` object, we can chain the dot notation like so: `person.address.street`. This will return the value of the `street` property, which we assign to the variable `street`.

### Method Chaining

With method chaining, you can call multiple methods on an object in a single statement by chaining dot notation. Here's an example:

```javascript
let numbers = [1, 2, 3, 4, 5];

let sum = numbers
  .filter(n => n % 2 === 0) // filter even numbers
  .map(n => n * 2) // double each number
  .reduce((acc, n) => acc + n); // sum the doubled numbers

console.log(sum); // 12
```

In this example, we have an array numbers with five values. We chain three methods together: `filter`, `map`, and `reduce`.

First, we filter the array to only keep the even numbers. Next, we map over the resulting array to double each number. Finally, we reduce the array to the sum of all the doubled numbers.

The result of this chain of operations is assigned to the variable `sum`, which we then log to the console.

## The Object Spread Operator (...)

The object spread operator `...` is a feature introduced in ECMAScript 2018 (ES9) that allows you to easily create a new object by copying the properties and values from an existing object. It is similar to the spread operator used with arrays.

Here's an example:

```javascript
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  }
};

const newPerson = {
  ...person,
  age: 31,
  address: {
    ...person.address,
    city: 'Los Angeles'
  }
};

console.log(newPerson);
```

In this example, we have an object person with three properties: `name`, `age`, and `address`. The `address` property is itself an object with three properties: `street`, `city`, and `state`.

To create a new object `newPerson`, we use the object spread operator to copy all the properties and values from the `person` object. We then override the `age` property with the value `31` and use the object spread operator again to copy the `address` object and override the `city` property with the value `'Los Angeles'`.

> It's worth noting that the spread operator creates a shallow copy of the object. If the original object contains nested objects or arrays, those nested objects and arrays will still reference the same memory locations in both the original object and the new object.

We can also override a property value while creating a new object. With this, you can, in a way, also achieve deep copy.

For example:

```javascript
const person = {
  name: "John",
  age: 39,
  hobbies: [
    "singing",
    "cooking",
    "traveling"
  ]
}

const newPerson = {...person, age:30}
console.log(newPerson); // {name: 'John', age: 30, hobbies: Array(3)}

const newPerson2 = {...person, hobbies: [...person.hobbies]};
console.log(newPerson2); // {name: 'John', age: 39, hobbies: Array(3)}
```

## Understanding [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

`Object.assign()` is a built-in method in JavaScript that can be used to copy the values of all enumerable properties from one or more source objects into a target object. Here are a few examples of how to use `Object.assign()`:

### Merging Objects

One of the most common use cases for `Object.assign()` is to merge objects. Here's an example:

```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const merged = Object.assign(obj1, obj2, obj3);

console.log(merged); // { a: 1, b: 2, c: 3 }
```

### Cloning an Object

`Object.assign()` can also be used to create a copy of an object. Here's an example:

```javascript
const obj = { a: 1, b: 2, c: 3 };
const copy = Object.assign({}, obj);

console.log(copy); // { a: 1, b: 2, c: 3 }
```

### Overwriting Properties

`Object.assign()` can also be used to overwrite properties in an object. Here's an example:

```javascript
const obj = { a: 1, b: 2, c: 3 };
const updated = Object.assign({}, obj, { b: 4, c: 5 });

console.log(updated); // { a: 1, b: 4, c: 5 }
```

It's worth noting that Object.assign() creates a shallow copy of an object. If the object being copied contains nested objects or arrays, those nested objects and arrays will still reference the same memory locations in both the original object and the copied object. If you need to create a deep copy of an object, you'll need to use a more complex cloning method.

Readings:

- [JavaScript Object.assign()](https://www.programiz.com/javascript/library/object/assign)

- [What is Javascript Object.assign?](https://flexiple.com/javascript/javascript-object-assign/)

## Object Destructuring

Object destructuring is a feature in JavaScript that allows you to extract properties from an object and assign them to variables in a more concise way.

### Basic Syntax

The basic syntax for object destructuring involves using curly braces `{}` to wrap the variables you want to assign and then assigning them to an object.

Here are some examples of how to use object destructuring:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};

const { firstName, lastName } = person;

console.log(firstName); // "John"
console.log(lastName); // "Doe"
```

### Renaming Properties

You can also rename properties using object destructuring by specifying a new name for the variable after a colon `:`.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};

const { firstName: fName, lastName: lName } = person;

console.log(fName); // "John"
console.log(lName); // "Doe"
```

### Default Values

You can also specify default values for variables in case the property is undefined.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};

const { firstName, lastName, country = "USA" } = person;

console.log(firstName); // "John"
console.log(lastName); // "Doe"
console.log(country); // "USA"
```

### Nested Objects

You can also use object destructuring to extract properties from nested objects.

```javascript
const person = {
  name: {
    firstName: "John",
    lastName: "Doe"
  },
  age: 30,
  city: "New York"
};

const { name: { firstName, lastName } } = person;

console.log(firstName); // "John"
console.log(lastName); // "Doe"
```

### Rest Parameter

You can also use the rest parameter syntax `...` to capture all remaining properties of an object that were not explicitly destructured.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};

const { firstName, lastName, ...rest } = person;

console.log(firstName); // "John"
console.log(lastName); // "Doe"
console.log(rest); // { age: 30, city: "New York" }
```

Readings:

- [How to Use Object Destructuring in JavaScript](https://dmitripavlutin.com/javascript-object-destructuring/)

- [JavaScript Object Destructuring, Spread Syntax, and the Rest Parameter – A Practical Guide](https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter/)

## Checking for Property Existence

You can check for the existence of a property in an object using the `in` operator, the `hasOwnProperty` method, or the `Object.keys` method.

### Using the `in` operator

The `in` operator returns `true` if the specified property is in the specified object, or in its prototype chain.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};

console.log("firstName" in person); // true
console.log("country" in person); // false
```

### Using the `hasOwnProperty` method

The `hasOwnProperty` method returns `true` if the specified property is a direct property of the specified object, and not inherited from its prototype chain.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};

console.log(person.hasOwnProperty("firstName")); // true
console.log(person.hasOwnProperty("country")); // false
```

### Using the `Object.keys` method

The `Object.keys` method returns an array of a given object's own enumerable property names, in the same order as a `for...in` loop. You can then use the `includes` method to check if a property exists in the array.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};

console.log(Object.keys(person).includes("firstName")); // true
console.log(Object.keys(person).includes("country")); // false
```

## Introducing [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) keyword

`this` is a keyword that refers to the object that is currently executing the code. It is a reference to the object that the function or method is a property of.

The value of `this` changes depending on how the function or method is called. For example, when a function is called in the global scope, `this` refers to the global object (which is `window` in a browser environment and `global` in Node.js). When a function is called as a method of an object, `this` refers to the object itself.

The exact value of `this` can be determined at runtime and depends on the context in which the function is called. It can be explicitly set using call(), apply(), or bind() methods.

Here are some examples that illustrate how `this` works in JavaScript:

1. **`this` in Global Context (i.e. outside of any function)**

```javascript
function something() { ... }
console.log(this); // logs global object (window in browser) - ALWAYS (also in strict mode)!
```

2. **`this` in a Function (non-Arrow) - Called in the global context**

```javascript
function something() { 
    console.log(this);
}
 
something(); // logs global object (window in browser) in non-strict mode, undefined in strict mode
```

3. **`this` in an Arrow-Function - Called in the global context**

```javascript
const something = () => { 
    console.log(this);
}
 
something(); // logs global object (window in browser) - ALWAYS (also in strict mode)!
```

4. **`this` in a Method (non-Arrow) - Called on an object**

```javascript
const person = { 
    name: 'Max',
    greet: function() { // or use method shorthand: greet() { ... }
        console.log(this.name);
    }
};
 
person.greet(); // logs 'Max', "this" refers to the person object
```

5. **`this` in a Method (Arrow Function) - Called on an object** 

```javascript
const person = { 
    name: 'Max',
    greet: () => {
        console.log(this.name);
    }
};
 
person.greet(); // logs nothing (or some global name on window object), "this" refers to global (window) object, even in strict mode
```

`this` can refer to unexpected things if you call it on some other object, e.g.:

```javascript
const person = { 
    name: 'Max',
    greet() {
        console.log(this.name);
    }
};
 
const anotherPerson = { name: 'Manuel' }; // does NOT have a built-in greet method!
 
anotherPerson.sayHi = person.greet; // greet is NOT called here, it's just assigned to a new property/ method on the "anotherPerson" object
 
anotherPerson.sayHi(); // logs 'Manuel' because method is called on "anotherPerson" object => "this" refers to the "thing" which called it
```

If in doubt, a `console.log(this);` can always help you find out what `this` is referring to at the moment.

## The Shorthand Syntax to define a Method

The shorthand syntax to define a method in JavaScript is to use a property value shorthand, where you can omit the `function` keyword and the colon `:` when defining a method as a property of an object. Here's some examples:

```javascript
const obj = {
  method() {
    // method body
  }
};
```

```javascript
const calculator = {
  operand1: 0,
  operand2: 0,
  add() {
    return this.operand1 + this.operand2;
  },
  subtract() {
    return this.operand1 - this.operand2;
  }
};

calculator.operand1 = 10;
calculator.operand2 = 5;
console.log(calculator.add()); // Output: 15
console.log(calculator.subtract()); // Output: 5
```

Note that the shorthand syntax for defining a method is only available in ES6 (ECMAScript 2015) and later versions of JavaScript. If you need to support older browsers or environments, you may need to use the traditional method syntax with the function keyword.

## Using [`bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) with Methods

We know that the `bind()` method is used to create a new function with a fixed `this` value and optionally some pre-defined arguments. This can be useful in various scenarios, such as when you want to pass a method as a callback function to another function or when you want to create a new function that has a specific `this` value.

When using `bind()` with methods in JavaScript, it is typically used to ensure that the `this` value inside the method refers to a specific object, even when the method is called in a different context. Here's an example:

```javascript
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

const greetJohn = person.greet.bind(person);
greetJohn(); // Output: Hello, my name is John and I am 30 years old.
```

In this example, we define an object named `person` with a `greet` method that logs a message to the console. We then use the `bind()` method to create a new function `greetJohn` that has its `this` value fixed to the person object. When we call `greetJohn()`, the message logged to the console correctly shows the name and age of the `person` object.

Without using `bind()`, if we were to call `person.greet()` from a different context, such as a callback function or an event handler, the `this` value inside the method would be different, and the output would not be what we expect. Using `bind()` ensures that the this value is always what we intend it to be.

## [`call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) & [`apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

Both `call()` and `apply()` are methods that can be used to invoke a function with a specific `this` value and a set of arguments. ***The main difference between the two methods is in how arguments are passed to the function***. With `call()` using comma-separated arguments and `apply()` using an array of arguments.

The `call()` method accepts the `this` value as the first argument, followed by any arguments that the function expects, separated by commas. Here's an example:

```javascript
const person = {
  name: 'John',
  age: 30,
  greet: function(greeting) {
    console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

person.greet.call(person, 'Hello'); // Output: Hello, my name is John and I am 30 years old.
```

In this example, we define an object named `person` with a `greet` method that expects a `greeting` argument. We then use the `call()` method to invoke the `greet` method with the `person` object as the `this` value, and pass '`Hello'` as the `greeting` argument. The message logged to the console correctly shows the name and age of the `person` object.

The `apply()` method is similar to `call()`, but it expects the second argument to be an array of arguments to pass to the function. Here's an example:

```javascript
const person = {
  name: 'John',
  age: 30,
  greet: function(greeting) {
    console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

person.greet.apply(person, ['Hello']); // Output: Hello, my name is John and I am 30 years old.
```

Note that in this example, we pass an array containing a single string as the second argument to the `apply()` method. This is because `apply()` expects an array of arguments to pass to the function. If we wanted to pass multiple arguments, we would add them as additional elements to the array. For example, `person.greet.apply(person, ['Hello', 'How are you?'])` would pass two arguments to the `greet()` method.

`bind()`, `call()`, and `apply()` are all methods in JavaScript that can be used to control the value of this when invoking a function. However, they differ in how they set the value of `this`.

The `bind()` method returns a new function with the `this` value set to a specified value, and it does not invoke the original function immediately. Instead, it returns a new function that can be invoked later.

## What Browser(Sometimes) does to `this`?

The value of `this` depends on how a function is called. When a function is called as an event handler in the browser, the value of `this` is set to the DOM element that triggered the event.

For example, consider the following HTML code:

```html
<button id="my-button">Click me</button>
```

If we attach an event listener to the button element using JavaScript, the `this` value inside the event handler function will refer to the button element that triggered the event:

```javascript
const myButton = document.getElementById('my-button');

myButton.addEventListener('click', function() {
  console.log(this); // Output: <button id="my-button">Click me</button>
});
```

In this example, we use the `addEventListener()` method to attach a click event handler to the `myButton` element. Inside the event handler function, the `this` value refers to the `myButton` element itself.

This behavior is consistent across different types of events and DOM elements. For example, if we attach an event handler to a form element and submit the form, the `this` value inside the event handler function will refer to the form element that was submitted.

It's worth noting that arrow functions do not have their own `this` value and instead inherit the `this` value from their surrounding context. This means that if an arrow function is used as an event handler, the `this` value inside the function will not refer to the DOM element that triggered the event. Instead, it will refer to the `this` value of the parent context where the arrow function was defined.

## `this` and Arrow Functions

The `this` keyword behaves differently in arrow functions compared to regular functions.

In regular functions, the value of `this` is determined by how the function is called. If the function is called as a method of an object, `this` will refer to the object. If the function is called without an explicit `this` context, `this` will refer to the global `window` object in non-strict mode, or `undefined` in strict mode.

Arrow functions, on the other hand, do not have their own `this` value. Instead, they inherit the `this` value from their surrounding context, which is determined lexically. This means that the `this` value inside an arrow function is the same as the `this` value outside the function.

Consider the following example:

```javascript
const person = {
  name: 'John',
  sayName: function() {
    console.log(this.name);
  },
  sayNameArrow: () => {
    console.log(this.name);
  }
};

person.sayName(); // Output: John

person.sayNameArrow(); // Output: undefined
```

In this example, we define an object named `person` with two methods: `sayName` and `sayNameArrow`. The `sayName` method is a regular function that logs the `name` property of the `person` object. The `sayNameArrow` method is an arrow function that also attempts to log the `name` property of the `person` object.

When we call `person.sayName()`, the `this` value inside the `sayName` method refers to the `person` object, so the method logs the `name` property correctly.

When we call `person.sayNameArrow()`, the `this` value inside the `sayNameArrow` method is inherited from its surrounding context, which is the global `window` object (in non-strict mode) or `undefined` (in strict mode). Since the global `window` object does not have a `name` property, the `sayNameArrow` method logs `undefined`.

It's important to note that arrow functions are not suitable for all use cases where regular functions are used, especially in situations where the value of `this` needs to be explicitly set.

Readings:

- [Learn ES6 The Dope Way Part II: Arrow functions and the ‘this’ keyword](https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/)

## Getters and Setters

Getters and Setters are special methods that allow us to define the behavior of getting and setting the values of an object's properties.

A getter is a method that is used to get the value of a property. It is defined using the `get` keyword, followed by the property name, and a function that returns the value. For example:

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName); // Output: John Doe
```

To access the value of the `fullName` property, we simply call it as a method on the `person` object, without the need for parentheses.

A setter is a method that is used to set the value of a property. It is defined using the `set` keyword, followed by the property name, and a function that takes a parameter and sets the value. For example:

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
};

person.fullName = 'Jane Smith';

console.log(person.firstName); // Output: Jane
console.log(person.lastName); // Output: Smith
```

To set the value of the `fullName` property, we simply call it as a method on the person object and pass a new value to it, as shown in the example.

Getters and setters are useful for encapsulating and protecting the internal state of an object, as well as providing a convenient and flexible API for accessing and modifying its properties.