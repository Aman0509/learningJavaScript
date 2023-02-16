console.log("*********************************if...else if...else Section*********************************")

let number = 10;

// if statement
if (number > 0) {
    console.log("Number is positive");
}

number = 0;

// if...else statement
if (number > 0) {
    console.log("The number is positive");
} else {
    console.log("The number is either a negative number or 0");
}

// if...else if statement
if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
    console.log("The number is 0");
}
else {
    console.log("The number is negative");
}

// Nested if...else statement
if (number >= 0) {
    if (number == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}

// Body of if...else with only one statement
if (number > 0)
    console.log("The number is positive.");
else 
    console.log("The number is negative or zero.");

// Ternary Operator Used Instead of if...else
const age = 45;
let result = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);

// Nested ternary operators
let a = 3;
result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);

// Switch Case
const choice = 3;
switch(choice){
    case 1:
        console.log(`You've entered ONE`);
        break;
    case 2:
        console.log(`You've entered TWO`);
        break;
    case 3:
        console.log(`You've entered THREE`);
        break;
    case 4:
        console.log(`You've entered FOUR`);
        break;
    case 5:
        console.log(`You've entered FIVE`);
        break;
    case 6:
        console.log(`You've entered SIX`);
        break;
    case 7:
        console.log(`You've entered SEVEN`);
        break;
    default:
        console.log(`You've entered out of range number`)
        break;                                            
}

// JavaScript switch With Multiple Case
let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}

console.log("*********************************Loop Section*********************************")

// for loop
for(let i = 0; i < 3; i++){
    console.log(i);
}

// while loop
let i = 1, n = 5;
while (i <= n) {
    console.log(i);
    i += 1;
}

// do while loop
i = 1;
n = 5;
do {
    console.log(i);
    i++;
} while(i <= n);

// break statement
for (let i = 1; i <= 5; i++) {     
    if (i == 3) {
        break;
    }
    console.log(i);
}

// break with nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
            break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

// break with label
loop1: for(let x = 0; x < 3; x++){
    loop2: for(let y = 0; y < 3; y++){
        if (x === 2){
            break loop1;
        }
        console.log(`x = ${x}, y = ${y}`);
    }
}

// continue statement
for (let i = 1; i <= 5; i++) {    
    if (i == 3) {
        continue;
    }
    console.log(i);
}

// continue with nested loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j == 2) {
            continue;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

// continue with label
loop1: for (x = 0; x < 3; x++) {
    loop2: for (y = 0; y < 3; y++) {
        if (x === 1 && y === 1) {
            continue loop1;
        }
        console.log(`x = ${x}, y = ${y}`);
    }
}

// `for of` statement loops through the values of an iterable objects, like, arrays, strings, map etc
const cars = ["BMW", "Volvo", "Mini"];
const person = {fname:"John", lname:"Doe", age:25};
for (let x of cars) {
    console.log(x);
}

// If you want index as well
for (let [i, x] of cars.entries()) {
    console.log(i,x);
}

// Object keys function
for (let key of Object.keys(person)){
    console.log(key);
}
console.log(Object.keys(person)); // It gives you an array

// Object values function
for (let key of Object.values(person)){
    console.log(key);
}
console.log(Object.values(person)); // It gives you an array

// `for in` statement loops through the properties of an Object
// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]
for (let x in person) {
  console.log(x);
}

// `for in` over Arrays
// Do not use for in over an Array if the index order is important.
// The index order is implementation-dependent, and array values may not be accessed in the order you expect.
// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
for (let x in cars) {
    console.log(x);
}

console.log("*********************************Error Handling Section*********************************")

// try...catch

const numerator = 100, denominator = 'a';

try {
    console.log(numerator/denominator);

    // exception throwing code   
    console.log(some_var);
}
catch(error) {
    console.log('An error caught');
    console.log('Error message: ' + error);  
}

// try...catch...finally
try {
    console.log(numerator/denominator);
    console.log(some_var);
}
catch(error) {
   console.log('An error caught'); 
   console.log('Error message: ' + error);  
}
finally {
    console.log('"Finally" will execute every time');
}

// throw
try {
    throw {message: "Demonstrating throwing of an error and catching it"};
} catch (error) {
    console.log(error);
}