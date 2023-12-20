# Deep Dive - Constructor Functions and Prototypes

| Contents |
| :--- |
| [Introducing Constructor Functions](#introducing-constructor-functions)|
| [Introducing Prototypes](#introducing-prototypes)|
| [The Prototype Chain and The Global "Object"](#the-prototype-chain-and-the-global-object)|
| [Classes and Prototypes](#classes-and-prototypes)|
| [Built-in Prototypes in JavaScript](#built-in-prototypes-in-javascript)|
| [Setting and Getting Prototypes](#setting-and-getting-prototypes)|

&nbsp;

:abacus: [Understand with Code](summary-with-code/app.js)

## [Introducing Constructor Functions](https://drive.google.com/uc?export=view&id=1rt4k7twKHxXHSRBBnhBXsRTXTF7heEVN)

In previous module, we learnt about classes. Here's the basic example of a class:

```javascript
class Person {
  name = 'John';
	
	constructor() {
		this.age = 30;
  }

	greet() {
		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
	}
}

const p = Person();
p.greet(); // Hello, my name is John and I am 30 years old.
```

Now behind the scenes, classes utilize a concept that has been around in Javascript for a very long time and that's the concept of ***Constructor Functions***.

In the past and still today, in many scripts you see out there or in scripts that need to run like that in older browsers which don't support classes, you will see constructor functions instead of classes being used.

***Constructor functions are a special type of function that acts as a blueprint for objects, same as class does, that can hold and set up properties and methods just like a class and that can then be created with the `new` keyword.***

***Constructor functions are defined using the `function` keyword, and the name of the function should begin with a capital letter. Inside the constructor function, we can define properties and methods that will be shared by all instances of the class. We can also define parameters that allow us to customize the properties of each instance.***

Earlier example can also be defined using Function Constructor like this:

```javascript
function Person() {
  this.name = 'John';
  this.age = 30;

  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}

const p = new Person();
p.greet(); // logs "Hello, my name is John and I am 30 years old."
```

Constructor functions technically are regular functions. There are two conventions though:

- They are named with capital letter first.
- They should be executed only with `new` operator.

When a function is executed with `new`, it does the following steps:

- A new empty object is created and assigned to `this`.
- The function body executes. Usually it modifies `this`, adds new properties to it.
- The value of `this` is returned.

```javascript
function Person() {

	// this = {};  (implicitly)

  this.name = 'John';
  this.age = 30;

  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };

	// return this;  (implicitly)
}

const p = new Person();
p.greet(); // logs "Hello, my name is John and I am 30 years old."
```

If you execute `Person()` like a normal function, it will throw error.

Readings:

- [Function() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)

- [Constructor, operator "new"](https://javascript.info/constructor-new)

## [Introducing Prototypes](https://drive.google.com/uc?export=view&id=1qUqb9hHUPGmM4otGd4e_EfiQC24hJQ9y)

In JavaScript, a prototype is an object that serves as a template for other objects. Every object in JavaScript has a prototype, which it inherits properties and methods from.

When a property or method is accessed on an object, JavaScript first checks to see if that property or method exists on the object itself. If it does not, JavaScript looks at the object's prototype and checks if the property or method exists there. If the property or method is found on the prototype, it is used by the object.

Prototypes can be used to create inheritance in JavaScript. When a new object is created using a constructor function, the object's prototype is set to be the prototype of the constructor function. This allows the object to inherit properties and methods from the constructor function's prototype.

Here is an example of using prototypes in JavaScript:

```javascript
// Define a constructor function
function Person(name) {
  this.name = name;
}

// Add a method to the Person prototype
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
}

// Create a new object using the Person constructor
const person1 = new Person("Alice");

// Call the sayHello method on the person1 object
person1.sayHello(); // Output: "Hello, my name is Alice"
```

Prototypes can be a confusing and tricky topic that's why it's important to really understand them.

A prototype is an object (let's call it `P`) that is linked to another object (let's call it `O`). It (the prototype object) kind of acts as a ***fallback object*** to which the other object (`O`) can reach out if you try to work with a property or method that's not defined on the object (`O`) itself.

Every object in JavaScript by default has such a fallback object (i.e. a prototype object).

It can be especially confusing when we look at how you configure the prototype objects for "to be created" objects based on constructor functions (that is done via the `.prototype` property of the constructor function object).

Consider this example:

```javascript
function User() {
  ... // some logic, doesn't matter => configures which properties etc. user objects will have
}
User.prototype = { age: 30 }; // sets prototype object for "to be created" user objects, NOT for User function object
```

The `User` function here also has a prototype object of course (i.e. a connected fallback object) but that is not the object the prototype property points at. Instead, you access the connected fallback/prototype object via the special `__proto__` property which every object (remember, functions are objects) has.

The prototype property does something different. It sets the prototype object, which new objects created with this `User` constructor function will have.

That means:

```javascript
const userA = new User();
userA.__proto__ === User.prototype; // true
userA.__proto__ === User.__proto__ // false
```

Follow article [A Beginner’s Guide to JavaScript’s Prototype - freeCodeCamp](https://www.freecodecamp.org/news/a-beginners-guide-to-javascripts-prototype/) for deep dive of Prototype.

Readings:

- [Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

- [Prototype in JavaScript](https://www.tutorialsteacher.com/javascript/prototype-in-javascript)

- [JavaScript Prototype](https://www.programiz.com/javascript/prototype)

## [The Prototype Chain and The Global "Object"](https://drive.google.com/uc?export=view&id=15MhQUtpRWBA5hc68HFjq9aVI0H_LI07r)

In JavaScript, every object is linked to another object, which is called its "prototype." This linkage forms a chain, known as the "prototype chain." The prototype chain allows objects to inherit properties and methods from other objects, enabling code reuse and object-oriented programming.

When an object is created, JavaScript automatically creates a hidden link between the object and its prototype. This link is accessible using the `__proto__` property. If an object needs to access a property or method that is not defined on the object itself, JavaScript will look for it in the object's prototype. If it's not found there, it will look in the prototype's prototype, and so on up the chain until it reaches the end, which is the `Object.prototype` object.

The `Object.prototype` object is at the top of the prototype chain for most objects in JavaScript. It contains common methods and properties that all objects inherit, such as `toString()` and `valueOf()`.

The Global Object, on the other hand, is an object that is always available in a JavaScript environment. It is accessible using the `window` object in web browsers and the `global` object in Node.js. The Global Object contains properties and methods that are available globally, such as `console.log()` and `setTimeout()`.

The Global Object is also at the top of its own prototype chain. It inherits from `Object.prototype` like other objects, but it also has its own unique properties and methods.

In summary, the Prototype chain and the Global Object are both important concepts in JavaScript. The Prototype chain allows objects to inherit properties and methods from other objects, while the Global Object provides a global namespace for properties and methods that are available everywhere in a JavaScript environment.

Readings:

- [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

## [Classes and Prototypes](https://drive.google.com/uc?export=view&id=1q8XiYlAkKMi3cFEii_u1IrzLPltdaYu2)

The concept of prototypes can be confusing, especially because the terminology used is similar. It is important to understand the difference between the prototype property on constructor functions and the `__proto__` property which is available on every object. The prototype property is used to configure what will be added to objects that are created based on that constructor function, while the `__proto__` property points to the prototype that has been assigned to an object, which is the fallback object that has been assigned to that object.

Although using classes and extending makes working with prototypes easier, it is important to understand the underlying concepts because JavaScript is based on them. Knowing these concepts can help you write better code, and is a core concept of JavaScript that has been around for a long time.

While constructor functions and classes have many similarities, there are some differences in how they handle methods. For example, when a method is added to a class, it is added to a separate prototype object created by JavaScript, rather than to the object itself. This can cause confusion if you are not aware of it.

Fields added to a class using the constructor function syntax are translated into instance properties in the same way as when using fields in a class. The only difference is that when using fields, it is not as obvious that they are being called after the super keyword. It is important to call super first when using fields, as otherwise you will get an error.

Let's understand this with below example:

```javascript
class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Max';
  constructor() {
    super();
    this.age = 30;
  }
  greet() {
    console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
  };
}

const p = new Person();
console.log(p);

// Output
// Person {name: 'Max', age: 30}
//  age: 30
//  name: "Max"
//  [Prototype]]: AgedPerson
//    constructor: class Person
//    greet: ƒ greet()
//    [[Prototype]]: Object
//      constructor: class AgedPerson
//      printAge: ƒ printAge()
//      [[Prototype]]: Object
```

In the output, if you see, `greet()` method is part of `Prototype` object but not the part of the object itself. But why?

Now, this implementation Javascript does for us so to say for a good reason. The idea here is that when we create instances of `Person`, we want to have different property values, here actually all objects we create of `Person`, have the same name and the name age because it's hardcoded in the class but often you want to assign different data, different values you store in your objects.

Now, methods on the other hand typically are the same across all objects, the logic you have in here might refer to your data but it does so in a way that different data is reflected automatically because we didn't hardcode the data in here, instead we refer to the properties which in turn might hold dynamic data.
So the function logic typically does not change from object to object, it typically is the same and therefore Javascript adds a little optimization for us here. By adding the method to a prototype, it makes sure that whenever we create a new `Person` object, we use the same prototype fallback object. It's a little optimization which leads to less objects being created, which means less memory usage and of course less performance impact because creating objects costs performance, so less performance impact.

Equivalent of `Person` class in Constructor Function. (Let's say, `Person` class is not extending any other class in this case.)

```javascript
function Person 10 {
  this.age = 30;
  this. name = 'Max';
}

Person.prototype.greet = function () {
  console. log(
    'Hi, I am' + this.name + ' and I am ' + this.age + ' years old.'
  );
};
```

If you want your `greet()` to be the part of object and do not worry about more memory consumption and performance impact, you can do it in 2 ways:

Option 1 - To define `greet()` inside constructor.

```javascript
class Person {
  name = 'Max';
  constructor() {
    this.age = 30;
    this.greet = function() {...};
  }
}
```

Option 2 - Use field and assign function to it. Basically, don't use method shorthand. Defining function to a field can follow any way, function expression or arrow function.

```javascript
class Person {
  name = 'Max';
  constructor() {
    this.age = 30;
  }

  greet = function() {
    console. log(
      'Hi, I am' + this.name + ' and I am ' + this.age + ' years old.'
    );
  }
}
```

## Built-in Prototypes in JavaScript

In JavaScript, built-in objects like arrays, strings, numbers, and functions have their own prototypes, which are essentially objects that contain a set of properties and methods that are inherited by all instances of that type. These built-in prototypes are part of the language itself and are automatically available to every JavaScript program.

For example, the Array object has a prototype that contains methods like `push()`, `pop()`, `shift()`, and `unshift()`, which can be called on any array object. Similarly, the String object has a prototype that contains methods like `charAt()`, `indexOf()`, and `substring()`.

By using these built-in prototypes, you can add new methods and properties to the base objects that are used throughout your code, which can help you write cleaner and more concise code.

However, it is generally not recommended to modify the built-in prototypes directly, as it can cause unexpected behavior and conflicts with other code. Instead, it is usually better to create your own custom objects and prototypes that extend the built-in prototypes, or to use third-party libraries that provide additional functionality.

## Setting and Getting Prototypes

An important topic that has not been covered yet is the ability to modify the prototype of an object that has already created or which has not created with your own constructor function.

So, when you already have an object and you somehow want to change the prototype after it has been created or you want to create a new object without your own constructor function for whatever reason and you still want to set a different prototype. Let's understand it with some examples.

For this, let's create an object `course` using object literal way and call method `printRating()` which will print the `rating` of `course` object.

```javascript
const course = {
  title: 'JavaScript Prototype',
  rating: 5
};

course.printRating();
```

As we know, this is going to fail since there is no such method `printRating()` is defined in `course` object as well as in it's prototype.

Now, since the object is already created, we would want to adjust it's prototype. We can do this by using global [`Object`](https://developer.mozilla.org/en-US/docs/Glossary/Global_object) method [`setPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf).

```javascript
Object.setPrototypeOf(course, {
  printRating: function(){
    console.log(`${this.rating}/5`);
  }
});
```

> Side Note:
> [`getPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) and [`__proto__`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) are two ways to access the prototype of an object, but they have some differences.
>
> [`getPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) is a method provided by the Object constructor that returns the prototype of the specified object. It takes one argument, the object whose prototype you want to retrieve. Here's an example:
> ```javascript
> const myObject = { a: 1 };
> const myPrototype = Object.getPrototypeOf(myObject);
> console.log(myPrototype); // outputs {}
> ```
> [`__proto__`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) is a non-standard property that allows you to get or set the prototype of an object. It is a getter/setter for the internal [[Prototype]] property of an object. Here's an example:
> ```javascript
> const myObject = { a: 1 };
> const myPrototype = myObject.__proto__;
> console.log(myPrototype); // outputs {}
> ```
> One important difference between [`getPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)) and [`__proto__`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) is that [`__proto__`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) is a non-standard property and may not be available in all JavaScript environments, while getPrototypeOf() is part of the standard Object constructor and should be available in all modern JavaScript environments.
> 
> Another difference is that __proto__ can be used to set the prototype of an object, while getPrototypeOf() can only be used to retrieve the prototype. Here's an example:
> ```javascript
> const myObject = { a: 1 };
> const myPrototype = { b: 2 };
> myObject.__proto__ = myPrototype;
> console.log(myObject.b); // outputs 2
> ```

### Object.create()

Earlier, we have defined constructor function and set prototype for it. Now, there is another way exist to set the prototype of the object without creating the constructor functions by using [`Object.create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create). This method allows you to create a new object with a specified prototype object. Here's an example:

```javascript
const myPrototype = {a: 1};
const myObject = Object.create(myPrototype);
console.log(myObject.a); // outputs 1
```

In this example, we create a new object called `myPrototype` with a property `a` set to `1`. We then create a new object called `myObject` using `Object.create()`, passing in `myPrototype` as the prototype object. This creates a new object that inherits from `myPrototype`. We can then access the `a` property of `myPrototype` through `myObject`, which outputs `1`.

`Object.create()` takes two optional arguments: `propertiesObject` and `descriptorObject`.

`propertiesObject` is an object whose properties define the properties of the new object. For example:

```javascript
const myPrototype = {a: 1};
const myObject = Object.create(myPrototype, {
  b: {
    value: 2,
    writable: true
  }
});
console.log(myObject.b); // outputs 2
```

In this example, we create a new object called   with a property `a` set to `1`. We then create a new object called `myObject` using `Object.create()`, passing in `myPrototype` as the prototype object and an object containing the `b` property with a value of `2` and a `writable` property set to `true`. We can then access the `b` property of `myObject`, which outputs `2`.

`descriptorObject` is an object whose properties define the properties of the new object using the O`bject.defineProperties()` method. For example:

```javascript
const myPrototype = { a: 1 };
const myObject = Object.create(myPrototype);
Object.defineProperties(myObject, {
  b: {
    value: 2,
    writable: true
  }
});
console.log(myObject.b); // outputs 2
```

In this example, we create a new object called `myPrototype` with a property `a` set to `1`. We then create a new object called `myObject` using `Object.create()`, passing in `myPrototype` as the prototype object. We then use `Object.defineProperties()` to define the `b` property of `myObject` with a value of `2` and a `writable` property set to `true`. We can then access the `b` property of `myObject`, which outputs `2`.

* * *

[<img align="center" src="../images/left_arrow.png" height="20" width="20"/> Classes and Object Oriented Programming (OOP)](../Classes-and-Object-Oriented-Programming/README.md)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [<img align="center" src="../images/home.png" height="20" width="20"/> Home](../README.md) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[Advanced DOM APIs <img align="center" src="../images/right_arrow.png" height="20" width="20"/>](../Advanced-DOM-APIs/README.md)