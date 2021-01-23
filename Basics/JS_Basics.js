'use strict';
/*
Strict mode in JS eliminates some JS silent errors
*/

// Variable Definition

var temp1 = 'Hello1';
let temp2 = 'Hello2';
const temp3 = 'Hello3';
// temp4 = 'Hello4'; This is not allowed in strict mode

// Valid identifiers
let $ = 'Yo';
let _ = 'Mama';

// Cannot use reserved keywords as Variable Name

// This is allowed although previously it holds string
// temp3 = 478;

/* Primitive Data types
- Number
- BigInt
- String
- Boolean
- Null
- Nan
- Undefined
- Symbol

Object Data types
*/

// Object Data types
const obj1 = {
'a': 1,
'b': 2,
'c': true,
};
console.log(`1 - ${obj1}`)
/*
Type Of
As an operator - typeof <object>
As a function - typeof(object)
*/

console.log(`2 - `, typeof(null)); // object
//It's a mistake recognized officially but didn't rectify for compatibility purpose

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

// Template Literals
console.log(`3 - ${temp1}, How are you ${$} ${_}`);

// Implicit Conversion to String
console.log(`34 +'45' = ${34+'45'}`); // 3445
console.log(`'43' + true = ${'43'+true}`); //43true
console.log(`'43' + undefined = ${'43'+undefined}`);  //43undefined
console.log(`'43' + null = ${'43'+null}`);  //43null
console.log(`'43' + nan = ${'43'+NaN}`);  //43NaN
console.log(`'5' + 'hey' = ${'5'+'hey'}`); //5hey

// Implicit Conversion to number
console.log(`'69' - '34' = ${'69'-'34'}`); //35
console.log(`34 - '45' = ${34-'45'}`); // -11
console.log(`34 * '3' = ${34*'3'}`); // 102
console.log(`34/'17' = ${34/'17'}`); // 2

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

// Switch Statement implemented with function
function check(){
const choice = Number(prompt('Enter a number between (1-7)'));
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
}

// Function Expression
// Function Exp are created when execution reaches them. Hence, can't be called
// before there declaration.
const func1 = function(){
    console.log(`I am inside a Function Expression`);
};

func1(); 

// Arrow Function - A concise way of writing functions
// Also can't be called before declaration
const func2 = () => console.log(`I am inside Arrow Func1`);
func2();

const func3 = (a = 'Paul', b = 'John') => {
console.log(`${a} & ${b} = The Beatles`);
};
func3();