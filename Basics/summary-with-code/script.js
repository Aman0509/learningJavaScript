//////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("*********************************Variable Definition Section*********************************")

// Variable Definition
var temp1 = 'Hello1';
let temp2 = 'Hello2';
const temp3 = 'Hello3';

// Freestyle way of defining a variable. It works but strongly not recommended
temp4 = 'Hello4';
console.log(temp4);


// Valid identifiers
let $ = 'Yo';
let _ = 'Mama';

// Cannot use reserved keywords as Variable Name

// This is allowed although previously it holds string
temp2 = 478;

//////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("*********************************Data Types Section*********************************")

/*
    - Primitive Data types
        - Number
        - BigInt
        - String
        - Boolean
        - Null
        - Undefined
        - NaN
        - Symbol
    - Object Data types
*/

// Strings
const COMPANY = 'ABC Pvt. Ltd.';
let testVar = "Hello There!"

// Single Quotes or Double Quotes can be used for defining a String. However, mix of both are illegal

// Template Literals
// Backticks are generally used when you need to include variables or expressions into a String.
console.log(`3 - ${temp1}, How are you ${$} ${_}`);

// Numbers
const SPEED_OF_LIGHT = 299792458;
let num1 = 3;

// BigInt
let value1 = 900719925124740998n;

// Boolean
const allChecked = true;

// Null
let num2 = null;
console.log(num2);

// Undefined
let num3;
console.log(num2);

//////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("*********************************Operators Section*********************************")

/*
    Basic Operators
        - Assignment Operators
        - Arithmetic Operators
        - Comparison Operators
        - Logical Operators
        - Bitwise Operators
        - String Operators
        - Other Operators
*/

// 1. Assignment Operator
let x0 = 3; // Assignment
x0 += 1; // Addition Assignment
x0 -= 2; // Subtraction Assignment
x0 *= 3; // Multiplication Assignment
x0 /= 2; // Division Assignment
x0 %= 3; // Remainder Assignment
x0 **= 3; // Exponential Assignment

// 2. Arithmetic Operator
let x1 = 5;
let y1 = 3;

// addition
console.log('x1 + y1 = ', x1 + y1);  // 8

// subtraction
console.log('x1 - y1 = ', x1 - y1);  // 2

// multiplication
console.log('x1 * y1 = ', x1 * y1);  // 15

// division
console.log('x1 / y1 = ', x1 / y1);  // 1.6666666666666667

// remainder
console.log('x1 % y1 = ', x1 % y1);   // 2

// increment
console.log('++x1 = ', ++x1); // x is now 6
console.log('x1++ = ', x1++); // prints 6 and then increased to 7
console.log('x1 = ', x1);     // 7

// decrement
console.log('--x1 = ', --x1); // x is now 6
console.log('x1-- = ', x1--); // prints 6 and then decreased to 5
console.log('x1 = ', x1);     // 5

//exponentiation
console.log('x1 ** y1 =', x1 ** y1);

// 3. Comparison Operator
const a1 = 3, b1 = 2;
console.log(a1 > b1); // true 
console.log(a1 < b1); // false
console.log(a1 <= b1); // false
console.log(a1 >= b1); // true

// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false

// 4. Logical Operators
// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false

// 5. Bitwise Operators

let a2 = 12;
let b2 = 25;

// bitwise AND operator example
console.log(a2 & b2); // 8

// bitwise OR operator example
console.log(a2 | b2); // 29

// bitwise XOR operator example
console.log(a2 ^ b2); // 21

// bitwise NOT operator example
console.log(~a2); // -13

// 6. String Operators
// concatenation operator
console.log('hello' + 'world');

// 7. Other Operators

/*
    Type Of
    As an operator - typeof <object>
    As a function - typeof(object)
*/

console.log(`2 - `, typeof(null)); // object
//It's a mistake recognized officially but didn't rectify for compatibility purpose

//////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("*********************************Type Conversion*********************************")

// 1. Implicit Conversion
// Implicit Conversion to String
console.log(`34 + '45' = ${34+'45'}`); // 3445
console.log(`'43' + true = ${'43'+true}`); //43true
console.log(`'43' + undefined = ${'43'+undefined}`);  //43undefined
console.log(`'43' + null = ${'43'+null}`);  //43null
console.log(`'43' + nan = ${'43'+NaN}`);  //43NaN
console.log(`'5' + 'hey' = ${'5'+'hey'}`); //5hey

// Implicit Conversion to number
console.log(`'69' - '34' = ${'69'-'34'}`); //35
console.log(`34 - '45' = ${34-'45'}`); //-11
console.log(`34 * '3' = ${34*'3'}`); //102
console.log(`34/'17' = ${34/'17'}`); //2

// Implicit Boolean Conversion to Number
console.log(`'4' - true = ${'4' - true}`); //3
console.log(`4 + true = ${4 + true}`); //5
console.log(`4 - false = ${4 - false}`); //4

// Non-numeric results to NaN
console.log(`'5' - 'hey' = ${'5'-'hey'}`);  //NaN
console.log(`'5' * 'hey' = ${'5'*'hey'}`);  //NaN
console.log(`'5' / 'hey' = ${'5'/'hey'}`);  //NaN

// null is 0 when used with numbers
console.log(`56 + null = ${56+null}`); //56
console.log(`56 - null = ${56-null}`); //56
console.log(`56 * null = ${56*null}`); //0

// Arithmetic operation with number, boolean or null give NaN
console.log(`4 + undefined = ${4+undefined}`); //NaN
console.log(`4 - undefined = ${4-undefined}`); //NaN
console.log(`true + undefined = ${true+undefined}`); //NaN
console.log(`null + undefined = ${null+undefined}`); //NaN

// 2. Explicit Conversion
let result;

// (i) - Convert to Number Explicitly
// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

// Empty String or null
result = Number(null);
console.log(result);  // 0

result = Number(' ')
console.log(result);  // 0

// Invalid Number
result = Number('hello');
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN

// Using method or unary operators
result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.01';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20

// (ii) - Convert to String Explicitly

//number to string
result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"

// (iii) - Convert to Boolean Explicitly
result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false

result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true

result = Boolean(' ');
console.log(result); // true

//////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("********************************Function Section*********************************")

// declaring a function named greet()
function greet1() {
    console.log("Hello there");
}

// function call
greet1();

function greet2(name) {
    console.log("Hello " + name + ":)");
}
greet2("XYZ")

function add1(a, b) {
    console.log(a + b);
}
add1(3,4);

function add2(a, b) {
    return a + b;
}
result = add2(3, 4);
console.log(result);

// Function Expression
let x2 = function (num) { return num * num };
console.log(x2(4)); // 16

// can be used as variable value for other variables
let y2 = x2(3);
console.log(y2); // 9

//////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("********************************Array Section*********************************")

// Create an Array
// Using an array literal
const array1 = ["eat", "sleep"];

// Using the new keyword
const array2 = new Array("eat", "sleep");

// empty array
const myList = [ ];

// array of numbers
const numberArray = [ 2, 4, 6, 8];

// array of strings
const stringArray = [ 'eat', 'work', 'sleep'];

// array with mixed data types
const newData1 = ['work', 'exercise', 1, true];

// Array can store arrays, functions and other objects inside it
const newData2 = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}
];

// Access Elements of an Array

const myArray = ['h', 'e', 'l', 'l', 'o'];

// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "e"

// Change the Elements of an Array
let dailyActivities1 = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 2 index
dailyActivities1[2] = 'exercise';

console.log(dailyActivities1); // ['eat', 'sleep', 'exercise']

dailyActivities1[4] = 'party';

console.log(dailyActivities1); // ['eat', 'sleep', 'exercise', undefined, 'party']

// Array Length

const dailyActivities2 = [ 'eat', 'sleep'];

// this gives the total number of elements in an array
console.log(dailyActivities2.length); // 2

//////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("********************************Object Section*********************************")

// Object Data types
const obj1 = {
        a: 1,
        b: 2,
        c: true,
    };
    console.log(`1 -> ${obj1}`)

// Accessing Object Properties

// Using dot notation
console.log(obj1.a);

// Using bracket notation
console.log(obj1["a"]);

// Nested Objects
const obj2 = {
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}
console.log(obj2.marks); // {science: 70, math: 75}
console.log(obj2.marks.science); // 70

// Object Methods
const person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person.greet(); // hello