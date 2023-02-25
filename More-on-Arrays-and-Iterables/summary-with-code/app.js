// Array and Iterable Objects

function creatingArray() {
  console.log("****************Ways of Creating Array****************");
  // 1 - Array Literal
  const arrayOne = [1, 2, 3, 4, 5];
  console.log(arrayOne);

  // 2 - Array Constructor
  const arrayTwo = new Array(1, 2, 3, 4, 5);
  const arrayThree = new Array(5); // empty array of length 5 will be created
  const arrayFour = Array(1, 2, 3, 4, 5); // will work
  console.log(arrayTwo);
  console.log(arrayThree);
  console.log(arrayFour);

  // 3 - Array.of() method
  const arrayFive = Array.of(1, 2, 3, 4, 5);
  const arraySix = Array.of(3); // array of length 1 with element 3 will be created
  console.log(arrayFive);
  console.log(arraySix);

  // 4 - Array.from() method
  const arraySeven = Array.from("Hello");
  // const arrayEight = Array.from(1,2,3); Will throw error as it only accepts iterables
  console.log(arraySeven);

  const listSelector = document.querySelectorAll("li");
  const arrayNine = Array.from(listSelector);
  console.log(arrayNine);
}

function addingOrRemovingArrayElements() {
  console.log(
    "****************Adding or Removing Array Elements****************"
  );
  const arrayOne = ["Sports", "Cooking", "Reading"];

  console.log("----------------Add or Insert Operation----------------");

  // push
  console.log(arrayOne.push("Singing")); // Returns length of array after push operation
  console.log(arrayOne);

  // unshift
  console.log(arrayOne.unshift("Coding")); // Returns length of array after unshift operation
  console.log(arrayOne);

  // adding with index
  arrayOne[6] = "Dancing"; // in this case, 5th index will be initialized with undefined
  console.log(arrayOne);

  // adding with splice - splice returns removed Element(s) array
  console.log(arrayOne.splice(5, 0, "Archery")); // insert 'Archery' at 5th index and will not 0 element from 5th index
  console.log(arrayOne);
  console.log(arrayOne.splice(-1, 0, "Biking")); // -ve index are allowed
  console.log(arrayOne);

  console.log("----------------Remove Operation----------------");

  // pop
  console.log(arrayOne.pop()); // removes last element and then return it
  console.log(arrayOne);

  // shift
  console.log(arrayOne.shift()); // Returns the removed element
  console.log(arrayOne);

  // removing with splice
  console.log(arrayOne.splice(2, 2)); // will remove 2 elements starting from 2nd index
  console.log(arrayOne);
  console.log(arrayOne.splice(-3, 2)); // will remove 2 elements starting from 3rd last index
  console.log(arrayOne);
}

function selectingRangeWithSlice() {
  console.log("****************Selecting Range with slice()****************");
  const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(arrayOne.slice(5)); // [6, 7, 8, 9]
  console.log(arrayOne.slice(3, 6)); // [4, 5, 6]
  console.log(arrayOne.slice(2, -1)); // [3, 4, 5, 6, 7, 8]
  console.log(arrayOne.slice(3, 1)); // []
}

function addingArraytoArrayWithConcat() {
  console.log(
    "****************Adding array to an array with concat()****************"
  );
  const arrayOne = [1, 2, 3, 4, 5];
  const arrayTwo = [6, 7, 8, 9, 10];
  const newArray = arrayOne.concat(arrayTwo);
  console.log(newArray);
  console.log(arrayOne, arrayTwo);
}

function retrieveIndex() {
  console.log(
    "****************Retrieve Array Index with indexOf() & lastIndexOf()****************"
  );
  const arrayOne = [1, 2, 3, 4, 5, 6, 2];
  const obj = {
    car: "Civic",
    company: "Honda",
  };
  const arrayTwo = [
    "Employee",
    {
      name: "John",
      age: 32,
    },
    130000,
    obj,
    {
      car: "Civic",
      company: "Honda",
    },
  ];

  // indexOf()
  console.log(arrayOne.indexOf(3)); // 2
  console.log(arrayOne.indexOf(3, 2)); // 2
  console.log(arrayOne.indexOf(3, 3)); // -1
  console.log(arrayOne.indexOf(2)); // 1
  console.log(arrayOne.indexOf(2, 3)); // 6

  // lastIndexOf()
  console.log(arrayOne.lastIndexOf(3)); // 2
  console.log(arrayOne.lastIndexOf(3, 2)); // 2
  console.log(arrayOne.lastIndexOf(3, 3)); // 2
  console.log(arrayOne.lastIndexOf(2)); // 6
  console.log(arrayOne.lastIndexOf(2, 3)); // 1

  // when reference variables are present in array
  console.log(arrayTwo.indexOf({ name: "John", age: 32 })); // -1
  console.log(arrayTwo.lastIndexOf({ name: "John", age: 32 })); // -1
  console.log(arrayTwo.indexOf(obj)); // 3
  console.log(arrayTwo.lastIndexOf(obj)); // 3
}

function findingStuff() {
  console.log(
    "****************Finding Stuff with find() & findIndex()****************"
  );
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 },
  ];
  const personMoreThanThirty = people.find((element) => {
    return element.age > 30;
  });
  console.log(personMoreThanThirty); // {name: 'Charlie', age: 35}
  personMoreThanThirty.name = "John";
  console.log(people); // [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'John', age: 35}, {name: 'David', age: 40}]

  const personMoreThanThirtyIndex = people.findIndex((element) => {
    return element.age > 30;
  });
  console.log(personMoreThanThirtyIndex); // 2
}

function checkExistence() {
  console.log(
    "****************Check Existence with includes()****************"
  );
  const fruits = ["apple", "banana", "orange"];
  const hasBanana = fruits.includes("banana");
  console.log(hasBanana); // true
}

function forEachLoop() {
  console.log("****************Looping with forEach()****************");

  // Example 1
  const numbers = [1, 2, 3, 4, 5];
  console.log(
    numbers.forEach(function (number, index, array) {
      array[index] = number * 2;
      return array[index];
    })
  ); // 'return' is written just for experiment. It's output is 'undefined'
  console.log(numbers);

  // Example 2
  const prices = [10.99, 5.99, 3.99, 6.59, 3.32];
  const tax = 0.25;
  const taxAdjustedPrices = [];

  console.log(
    prices.forEach((price, index, prices) => {
      const priceObj = {
        index: index,
        taxAdjPrice: price * (1 + tax),
      };
      taxAdjustedPrices.push(priceObj);
    })
  ); // undefined

  console.log(prices); // [10.99, 5.99, 3.99, 6.59, 3.32]
  console.log(taxAdjustedPrices); // [{index: 0, taxAdjPrice: 13.7375}, {index: 1, taxAdjPrice: 7.487500000000001}, {index: 2, taxAdjPrice: 4.987500000000001}, {index: 3, taxAdjPrice: 8.2375}, {index: 4, taxAdjPrice: 4.1499999999999995}]
}

function mapDemo() {
  console.log("****************map() demo****************");
  // Example 1
  const numbers = [1, 2, 3];
  const doubledNumbers = numbers.map(function (number) {
    return number * 2;
  });
  console.log(doubledNumbers); // Output: [2, 4, 6]

  // Example 2
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  const peopleWithFullName = people.map(function (person) {
    return { fullName: person.name + " Smith", age: person.age };
  });
  console.log(peopleWithFullName);

  // Example 3
  const fruits = ["apple", "banana", "orange"];
  const uppercaseFruits = fruits.map(function (fruit) {
    return fruit.toUpperCase();
  });

  console.log(uppercaseFruits); // Output: ['APPLE', 'BANANA', 'ORANGE']
}

function sortAndReverse() {
  console.log("****************sort() & reverse() demo****************");
  // sort()
  // Example 1
  const numbers = [3, 1, 4, 2, 5];
  numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(numbers); // Output: [1, 2, 3, 4, 5]

  // Example 2
  const fruits = ["apple", "banana", "orange", "pear"];
  fruits.sort(function (a, b) {
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
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  people.sort(function (a, b) {
    return a.age - b.age;
  });
  console.log(people); // Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]

  // reverse()
  // Example 1
  numbers.reverse();
  console.log(numbers); // Output: [5, 4, 3, 2, 1]

  // Example 2
  fruits.reverse();
  console.log(fruits); // Output: [''apple', 'banana', 'orange', 'pear']

  // Example 3
  people.reverse();
  console.log(people); // Output: [{ name: 'Charlie', age: 35 }, { name: 'Bob', age: 30 }, { name: 'Alice', age: 25 }]
}

function filterDemo() {
  console.log("****************sort() & reverse() demo****************");
  // Example 1
  const numbers = [1, 2, 3, 4, 5];
  const filteredNumbers = numbers.filter(function (number) {
    return number > 2;
  });
  console.log(filteredNumbers); // Output: [3, 4, 5]

  // Example 2
  const fruits = ["apple", "banana", "orange"];
  const filteredFruits = fruits.filter(function (fruit) {
    return fruit.length > 5;
  });
  console.log(filteredFruits); // Output: ['banana', 'orange']

  // Example 3
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  const filteredPeople = people.filter(function (person) {
    return person.age > 30;
  });
  console.log(filteredPeople); // Output: [{ name: 'Charlie', age: 35 }]
}

function reduceDemo() {
  // Example 1
  const numbersOne = [1, 2, 3, 4, 5];
  const sum = numbersOne.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(sum); // Output: 15

  // Example 2
  const numbersTwo = [3, 6, 2, 8, 1];
  const max = numbersTwo.reduce(function(accumulator, currentValue) {
    if (currentValue > accumulator) {
      return currentValue;
    } else {
      return accumulator;
    }
  });
  console.log(max); // Output: 8
}

function splitAndJoin() {
  console.log("****************split() & join() demo****************");

  // split()
  const fruits = "apple,banana,orange";
  const fruitArray = fruits.split(",");
  console.log(fruitArray); // Output: ["apple", "banana", "orange"]

  // join()
  const numbers = [1, 2, 3, 4, 5];
  const numberString = numbers.join("-");
  console.log(numberString); // Output: "1-2-3-4-5"
}

function spreadOperator() {
  console.log("****************Spread Operator****************");

  // Using with array
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const newArr = [...arr1, ...arr2];
  console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]

  // Using with object
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const newObj = { ...obj1, ...obj2 };
  console.log(newObj); // Output: {a: 1, b: 2, c: 3, d: 4}
  obj2.d = 10;
  console.log(newObj, obj2); // Output: {a: 1, b: 2, c: 3, d: 4}, {c: 3, d: 10}

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

  // Using spread operator to pass multiple arguments
  const arr5 = [6, 2, 3, 19, 10];
  console.log(Math.min(...arr5));
}

function arrayDestructuring() {
  console.log("****************Array Destructuring****************");

  // Example 1
  const numbers = [1, 2, 3, 4, 5];
  const [first, second, ...rest] = numbers;
  console.log(first); // Output: 1
  console.log(second); // Output: 2
  console.log(rest); // Output: [3, 4, 5]

  // Example 2
  const matrix = [[1, 2], [3, 4]];
  const [[a, b], [c, d]] = matrix;
  console.log(a); // Output: 1
  console.log(b); // Output: 2
  console.log(c); // Output: 3
  console.log(d); // Output: 4
}

// creatingArray();
// addingOrRemovingArrayElements();
// selectingRangeWithSlice();
// addingArraytoArrayWithConcat();
// retrieveIndex();
// findingStuff();
// checkExistence();
// forEachLoop();
// mapDemo();
// sortAndReverse();
// filterDemo();
// reduceDemo();
// splitAndJoin();
// spreadOperator();
// arrayDestructuring();