# Classes and Object Oriented Programming (OOP)

| Contents |
| :--- |
| [What is OOP?](#what-is-oop)|
| [Defining Class](#defining-class) |
| [Fields vs Properties](#fields-vs-properties) |
| [Static Method and Properties](#static-method-and-properties) |
| [Classes vs Object Literal](#classes-vs-object-literal) |
| [Introducing Inheritance](#introducing-inheritance) |
| [Private Properties](#private-properties) |
| [The `instanceOf` Operator](#the-instanceof-operator) |
| [Understanding Object Descriptors](#understanding-object-descriptors) |

&nbsp;

:notebook_with_decorative_cover: [Projects](projects/)


## [What is OOP?](https://drive.google.com/uc?export=view&id=17pBDbXe943R-kXfAk9FCVPC26cIKApfh)

Object-Oriented Programming (OOP) is a programming paradigm that focuses on creating objects that encapsulate data and behavior, and interact with each other to perform tasks.

Let's understand it with a scenario.

The requirement is to create a small level website which have list of products with some like, `name`, `price`, `description` etc using OOP approach.

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Mini-Shop</title>
    <link rel="stylesheet" href="assets/styles/app.css">
    <script src="assets/scripts/app.js" defer></script>
  </head> 
  <body>
    <div id="app"></div>
  </body>
</html>
```

[**CSS**](projects/products_website/assets/styles/app.css)

**JS (app.js)**

```javascript
const productList = {
  products: [
    {
      title: 'Pillow',
      imageUrl: 'https://unitedpillow.com/images/companies/2/pillow-thumb.jpg?1564370699038',
      price: 19.99,
      description: "A soft pillow good for neck"
    },
    {
      title: 'Carpet',
      imageUrl: 'https://images.woodenstreet.de/image/cache/data%2Fhome-decors%2Frugs%2Frhombus-geometric-pattern-hand-tufted-woolen-carpet-6-4-feet%2Frevised%2Fupdated%2FC-1-750x650.jpg',
      price: 89.20,
      description: 'A good carpet'
    }
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const product of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src=${product.imageUrl} alt=${product.title}>
          <div class='product-item__content'>
            <h2>${product.title}</h2>
            <h3>$${product.price}</h3>
            <p>${product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render();
```

**Output**

<img src="https://drive.google.com/uc?export=view&id=1X-URB2YWNgy30wZfQkhVcEPaA29GWvKT" alt="demo">

Now the question is, what's the advantage of that?

We have put all the code into the `app.js` and we didn't really save that much in terms of following DRY approach via OOPs concept or writing efficient code.

Now, that's because of ***object literal notation***. It's hard to write proper object oriented code with this notation which should promote reusability with OOPs.

For example, if you see, `products` in `productList`, it has same structure for all objects and to add new object, we need to again repeat the object with different properties' value and that too, do it manually and by that we are prone to make mistakes. It would be nice if we have some way of getting blueprint with all these properties. 

Similarly, there are some other areas in `app.js` which can be defined in more efficient way.

To overcome these limitations, we can make use of **classes**.

> Follow this example with class implementation [here](projects/products_website/assets/scripts/app.js)

## [Defining Class](https://drive.google.com/uc?export=view&id=1PhgPcH8S5xDIjvckxAFzzwfXvx_4lmKk)

Classes in JavaScript are a way to define objects and their behavior using a more structured syntax. They were introduced in ECMAScript 6 (ES6) and are based on prototype-based inheritance.

A class is like a blueprint or a template for creating objects. It defines the properties and methods that an object should have, and how they should behave. When a new object is created from a class, it's called an instance of that class.

The basic syntax is:

```javascript
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

> Then use `new MyClass()` to create a new object with all the listed methods.
>
> The `constructor()` method is called automatically by `new`, so we can initialize the object there.

Example:

```javascript
class Person {
  constructor(name) {
  this.name = name;
  }

  // defining method
  greet() {
      console.log(`Hello ${this.name}`);
  }
}

let person1 = new Person('John');

// accessing property
console.log(person1.name); // John

// accessing method
person1.greet(); // Hello John
```

Readings:

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- [JavaScript Classes – How They Work with Use Case Example](https://www.freecodecamp.org/news/javascript-classes-how-they-work-with-use-case/)

- [JavaScript Classes](https://www.programiz.com/javascript/classes)

- [Classes - JavaScript.Info](https://javascript.info/class)

## [Fields vs Properties](https://drive.google.com/uc?export=view&id=1tY672ixJFhh6BZfe6U03AAOtQlpV0BDC)

A class field refers to a property that is defined on a class rather than on its instances. It allows developers to define properties and methods directly on the class itself, rather than defining them in the class constructor or using the prototype object.

```javascript
class MyClass {
  myField = 42;

  myMethod() {
    console.log('Hello, world!');
  }
}

console.log(MyClass.myField); // Output: 42
MyClass.myMethod(); // Output: Hello, world!
```

Class fields can be useful for defining properties or methods that are related to the class itself, rather than to its instances. They can also make the code more readable and easier to maintain by keeping related code in one place.

## [Static Method and Properties](https://drive.google.com/uc?export=view&id=1r-muu2PugEo53CyTax60AyWBHs1_bg_b)

Static methods and properties are those that belong to the class itself rather than to the individual instances of the class. They are accessed using the class name, rather than an instance of the class.

To define a static method in JavaScript, you use the static keyword. Here's an example:

```javascript
class MyClass {
  static myStaticMethod() {
    console.log('This is a static method');
  }
}

MyClass.myStaticMethod(); // This is a static method
```

To define a static property in JavaScript, you can simply declare it as a static variable inside the class definition, like this:

```javascript
class MyClass {
  static myStaticProperty = 'This is a static property';
}

console.log(MyClass.myStaticProperty); // This is a static property
```

Static methods and properties are useful when you want to define methods or properties that are associated with the class itself, rather than with individual instances of the class. For example, a static method might be used to create a new instance of the class based on some external input, or a static property might be used to store some global state that is shared across all instances of the class.

### Calling static members(property or method) from another static method

To call a static member (method or property) from another static method in the same class in JavaScript, you can use the class name followed by the static member name, like this:

```javascript
class MyClass {
  static myStaticMethod1() {
    console.log('This is static method 1');
    this.myStaticMethod2(); // calling another static method
  }
  
  static myStaticMethod2() {
    console.log('This is static method 2');
  }
}

MyClass.myStaticMethod1(); // This is static method 1
                           // This is static method 2
```

In the example above, `myStaticMethod1` calls `myStaticMethod2` using `this.myStaticMethod2()`. Note that `this` refers to the class itself, not an instance of the class.

Similarly, to access a static property from a static method, you can use the class name followed by the static property name:

```javascript
class MyClass {
  static myStaticMethod() {
    console.log(`My static property value is ${MyClass.myStaticProperty}`);
  }
  
  static myStaticProperty = 'Hello, world!';
}

MyClass.myStaticMethod(); // My static property value is Hello, world!
```

Readings:

- [static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

- [Static properties and methods](https://javascript.info/static-properties-methods)

- [What is static property and method in JavaScript?](https://www.educative.io/answers/what-is-static-property-and-method-in-javascript)

- [JS Static methods and properties](https://blog.alexdevero.com/static-methods-properties-javascript-classes/)

## [Classes vs Object Literal](https://drive.google.com/uc?export=view&id=1zxQBda2Xsqrx26XenvWAyD9nW01CFiLj)

Both object literals and classes in JavaScript are useful for creating objects, but they have different use cases.

Object literals are a good choice when you need a simple, self-contained object with a few properties and methods. They are easy to read and understand, and you can create them quickly without needing to define a separate class.

For example, if you need to create a configuration object with a few properties, an object literal is a good choice:

```javascript
const config = {
  debug: true,
  port: 3000,
  url: "http://example.com"
};
```

On the other hand, if you need to create more complex objects with shared properties and methods, or if you need to create multiple instances of an object with the same properties and methods, a class is a better choice.

For example, if you need to create multiple car objects with shared properties and methods, a class is a good choice:

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

const car1 = new Car("Toyota", "Corolla", 2015);
const car2 = new Car("Ford", "Mustang", 2020);

console.log(car1.getAge()); // output: 8
console.log(car2.getAge()); // output: 3
```

In summary, use object literals when you need a simple, self-contained object with a few properties and methods, and use classes when you need to create more complex objects with shared properties and methods, or when you need to create multiple instances of an object with the same properties and methods.

Readings:

- [Object Literal vs. Constructor in Javascript](https://medium.com/@mandeepkaur1/object-literal-vs-constructor-in-javascript-df143296b816)

## [Introducing Inheritance](https://drive.google.com/uc?export=view&id=1SxJ-sMxyiCeNynXXXaTrux1O56Jom6_N)

Inheritance is a way to create a class that is a child of another class. In class inheritance, the child class inherits properties and methods from the parent class.

Class inheritance is based on the concept of prototype chaining. When an object is created from a class, it has a prototype object that points to the class's prototype object. The class's prototype object, in turn, points to the prototype object of its parent class, forming a chain of prototypes.

To create a child class, we can use the [`extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends) keyword followed by the name of the parent class.

```javascript
childClassName extends parentClassName{
    // child class definition
}
```

Example

```javascript
//parent class
class Animals{
    constructor(name){
        this.name = name;
    }
    
    animalName(){
        return `${name}`;
    }
}

//Pets extending the parent class
class Pets extends Animals{
    
    constructor(){
        console.log(`Pet class is created`);
    }
}
```

In the above example, we have declared a class `Animals` with an attribute `name` and a method `animalName()`, which will return the `name`. Now, since the `Pets` class extends the `Animals` class, thus, it inherits all properties of the `Animals` class.

So far, we have how to inherit the attributes and methods of one class into another in javascript. Now, imagine we have inherited the attributes of class `Animals` into class `Pets`. Now when we create an object of class `Pets`, it will have the properties of class `Animals` as well. But wait! The class `Animal` has the name attribute, which is initialized with the class constructor. How do we initialize that attribute of class `Animal`? In such cases, the [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) keyword is used.

The `super` keyword in javascript is used to call functions of an object's parent class. When we make objects from the child class, we need to pass the parameters to the parent class as well. This is done by the `super()` keyword. It invokes the attributes of the parent class.

```javascript
super(param);
```

It is placed inside the constructor of the child class and the `param` is the parameter(s) required for the Parent class.

Example

```javascript
class Pets extends Animals{
    constructor(name, species){
        super(name);
        this.species= species;
    }
    
    speciesName(){
        return `${species}`;
    }
}
```

In the above example, we have defined the `Pet` class. Since it inherits the `Animals` class thus, thus here `super` keyword is calling the constructor of parent class. And hence the value is being assigned.

Readings:

- [Inheritance in JavaScript](https://www.scaler.com/topics/javascript/inheritance-in-javascript/)

- [Class inheritance](https://javascript.info/class-inheritance)

- [JavaScript Class Inheritance](https://www.programiz.com/javascript/inheritance)

## [Private Properties](https://drive.google.com/uc?export=view&id=14hx-TzloS5Mlk8tZwwEWTa_K1f5mUnNC)

Private properties and methods are not accessible outside of the object they belong to. With the introduction of the class syntax in ES6, we can use the hash (`#`) symbol to define private fields in class declarations. Private methods, however, are still not natively supported in ES6 classes, and developers still need to rely on closures or naming conventions to create private methods in JavaScript.

Here's an example of a class with a private property and a private method:

```javascript
class Person {
  #name;
  
  constructor(name) {
    this.#name = name;
  }
  
  #privateMethod() {
    console.log('This is a private method.');
  }
  
  getName() {
    return this.#name;
  }
  
  publicMethod() {
    console.log('This is a public method.');
    this.#privateMethod();
  }
}

const person = new Person('John');
console.log(person.getName()); // logs "John"
person.publicMethod(); // logs "This is a public method." and "This is a private method."
console.log(person.#name); // throws a syntax error
person.#privateMethod(); // throws a syntax error
```

In this example, the `Person` class has a private field `#name` and a private method `#privateMethod()`. These fields are only accessible within the `Person` class, and cannot be accessed or modified from outside of the class. The `getName` method provides a way to retrieve the value of the private field, and the `publicMethod` method calls the private method `#privateMethod()`.

If we try to access the private fields and methods directly from outside the class, we'll get a syntax error.

Private fields and methods provide a way to encapsulate data and behavior within a class, which can help to improve the maintainability and reliability of our code.

### "Pseudo-Private" Properties

The addition of private fields and properties is relatively new. In the past, such a feature was not part of JavaScript.

Hence you might find many scripts that use a concept which you could describe as "pseudo-private" properties.

It would look like this:

```javascript
class User {
  constructor() {
    this._role = 'admin';
  }
}
 
// or directly in an object
 const product = {
  _internalId: 'abc1'
};
```

It's a quite common convention to prefix private properties with an underscore (`_`) to signal that they should not be accessed from outside of the object.

***Please note that it's just a convention that should signal something. It does not technically prevent access. You can run this code without errors for example:***

```javascript
const product = {
  _internalId: 'abc1'
};
console.log(product._internalId); // works!
```

It's really just a hint that developers should respect. It's not as strict as the "real" private properties introduced recently (`#propertyName`).

Readings:

- [Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

- [JavaScript Private Methods](https://www.javascripttutorial.net/javascript-private-methods/)

## The [`instanceOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) Operator

The `instanceof` operator is used to determine if an object is an instance of a particular class or constructor function. It returns `true` if the object is an instance of the class or constructor function, and `false` otherwise.

Here's an example of using the `instanceof` operator:

```javascript
class Animal {}
class Dog extends Animal {}

const animal = new Animal();
const dog = new Dog();

console.log(animal instanceof Animal); // logs true
console.log(animal instanceof Dog); // logs false
console.log(dog instanceof Animal); // logs true
console.log(dog instanceof Dog); // logs true
```

## Understanding Object Descriptors

Object descriptors are a set of properties that define how an object's properties should behave. Object descriptors allow us to define certain characteristics of an object's properties, such as whether they can be modified or deleted, whether they are enumerable, and more.

In JavaScript, object descriptors are represented using objects with various properties. Some common properties used in object descriptors are:

- `value`: The value associated with the property.
- `writable`: A Boolean indicating whether the property can be changed or not.
- `enumerable`: A Boolean indicating whether the property should be included in `for...in` loops or not.
- `configurable`: A Boolean indicating whether the property can be deleted or have its attributes modified.

Here's an example of using object descriptors to define a property with [`Object.defineProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

```javascript
const obj = {};

Object.defineProperty(obj, 'myProp', {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(obj.myProp); // logs 42
obj.myProp = 23; // no error in strict mode, but the value is not changed
console.log(obj.myProp); // still logs 42

delete obj.myProp; // no error in strict mode, but the property is not deleted
console.log(obj.myProp); // logs 42

for (let prop in obj) {
  console.log(prop); // logs "myProp"
}
```

Object descriptors provide a way to define the behavior of an object's properties, which can help us control how our objects behave and ensure that they behave as intended.

Readings:

- [Object.getOwnPropertyDescriptor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)

- [Property flags and descriptors](https://javascript.info/property-descriptors)

- [JavaScript — Property Descriptor](https://codeburst.io/javascript-object-property-attributes-ac012be317e2)

- [JavaScript Property Descriptors](https://flaviocopes.com/javascript-property-descriptors/)

* * *

[<img align="center" src="../images/left_arrow.png" height="20" width="20"/> More on Objects](../More-on-Objects/README.md)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [<img align="center" src="../images/home.png" height="20" width="20"/> Home](../README.md) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[Constructor Functions and Prototypes <img align="center" src="../images/right_arrow.png" height="20" width="20"/>](../Constructor-Functions-and-Prototypes/README.md)