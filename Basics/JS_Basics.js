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

// Object Continues..
// There are 2 ways to define objects
// Constructor Syntax
let obj2 = new Object();

// Literal Syntax
let obj3 = {};

// Object Literal and Properties
obj2 = {
    name: 'Fred',
    age: 54,
    job: 'Artist',
    married: true,
}

// Accessing Object Properties
// Dot Notation
console.log(`obj2.name = ${obj2.name}`);
console.log(`obj2.job = ${obj2.job}`);

// Square Brackets
console.log(`obj2['name'] = ${obj2['name']}`);
console.log(`obj2['job'] = ${obj2['job']}`);

// Adding a property in object
obj2.canDrive = true
console.log(obj2);

// Notice when we initialized obj2, we didn't quote string keys like we used to do in 
// Python dict. However, when you are passing multi word key, then in that case
// you need to use quotes. For example,
obj2["pin code"] = 205001;
console.log(obj2);
// In above case, you can't use dot notation, either for declaring property or accessing it
// For eg. - obj2.'pin code' = 205001 will throw error


// Computed Properties
// let fruit = prompt('Which fruit you want to buy?', null);
let fruit = 'apple'
let obj4 = {
    [fruit]:5,
};
console.log(obj4);

// 'in' operator. Syntax - <'key' in object>
console.log(`'age' in obj2 = ${'age' in obj2}`);
console.log(`'address' in obj2 = ${'address' in obj2}`);

// for..in loop
for (let key in obj2){
    console.log(key);
}

// this keyword - It has different values depending on where it is used:
/*  
- In a method, 'this' refers to the owner object
- Alone, 'this' refers to the global object
- In a function, 'this' refers to the global object
- In a function, in strict mode, 'this' is undefined
- In an event, 'this' refers to the element that received the event
- Methods like call() and apply() can refer 'this' to any object
*/

// Loop in JS
// for loop

for(let i = 0; i < 3; i++){
    console.log(i);
}

// break with label

loop1:
for(let i=0;i<5;i++){
    loop2:
    for(let j=0; j<i;j++){
        if (i === 4){
            break loop1;
        }
        console.log(j);
    }
}

// In similar manner, label can be used with continue

// while loop
let temp5 = 121;
let temp7, temp6;
temp6, temp7 = 0;
while (temp5 != 0){
    temp6 = temp5 % 10;
    temp5 = parseInt(temp5/10);
    temp7 = (temp7 * 10) + temp6;
}
console.log(temp7);

//do while loop
let temp8 = 1;
do {
console.log(temp8);
temp8++;
}while(temp8 < 5);

// arguments in JS
// Arrow Function doesn't have arguments
const func4 = function(p1, p2){
    console.log(`para1 = ${p1}, para2 = ${p2}, args = ${arguments}`);
    console.log(typeof(arguments));
};

func4(1,2,3,4);

// restArgs using '...' (Spread Operator)

const func5 = function(para1, para2, ...restArgs){
    console.log(`para1 = ${para1}, para2 = ${para2}, rest = ${restArgs}`);
    console.log(`typeof(restArgs) = ${typeof(restArgs)}`);
};

func5(32,45,12,99,99,99,99);

/*
1 - Rest Parameters is a real array and methods like forEach and sort can be applied. 
Even though the arguments object has the length method, it is not a real array and using 
array methods like sort would only bring us misery and sorrow.

2 -Rest Parameters contain only the arguments that have no corresponding parameter 
while arguments object contains all the arguments passed to the function.
*/


// spread operator in objects

let obj5 = {...obj2, blood_group:'O+'};
obj5.name = 'Paul';
console.log(obj5);

// Short Circuiting

true && 'Hello' && console.log('Bye');
''|| 0 || false || console.log('Finally');

// Nullish Coalescing Operator
let var1 = null ?? undefined ?? 0;
console.log(var1);

// Optional Chaining
// Access values without checking if the parent object exists.
// Instead of returning error, it will return null or undefined.
let dog = {
    german_shepard:{
        color: 'brown-black',
        purpose: 'protection'
    },
    bulldog:{
        color: 'skin',
        purpose: 'protection'
    },
    husky:{
        color: 'grey',
        purpose: 'protection'
    },
    retriever: {
        color: 'golden',
        purpose: 'showoff'
    }
}

console.log(dog.shibu?.color ?? 'breed not found');
console.log(dog.husky?.purpose);
console.log(dog?.bulldog.color);


// for...of loop - Only works on iterables, for eg, like array, strings etc
// and not on objects

let arr1 = ['Hello', 'There', 1, 0, 0];
for(let i of arr1){
    console.log(i);
}

// If you want index as well
for (let [j,k] of arr1.entries()){
    console.log(j,k);
}

// Object keys function
for (let var2 of Object.keys(dog)){
    console.log(var2);
}
console.log(Object.keys(dog)); // It gives you an array

// Object values function
for (let var2 of Object.values(dog)){
    console.log(var2);
}
console.log(Object.values(dog)); // It gives you an array

// Object Entries function
// Earlier we have used entries method on array but it does not work
// for object. For object we used Entries function
console.log(Object.entries(dog));
for (let [t1,t2] of Object.entries(dog)){
    console.log(t1, t2);
}


// Sets
let s1 = new Set();
console.log(s1);
let s2 = new Set([45, 23, 11, 45, 23, 78, 54, 23]);
console.log(s2);
s1.add('a').add('b').add('c').add('d').add('a').add('c');
console.log(s1);
s2.delete(78);
console.log(s2);
console.log(s1.has('e'));
console.log(s2.size);
// Set has keys() and values(), but both values are identical
console.log(s1.keys());
console.log(s1.values());
for (let [i,j] of s1.entries()){
    console.log(i == j);
}

// Map
let m1 = new Map([['a', 1],
['b', 2],
['c',3],
['d', 4]]);
let m3 = {
    'a': 1,
    'b': 2
}
let m2 = new Map();
m2.set('FName', 'John')
    .set('LName', 'Wick')
    .set('Fav_Pet', 'Dog');

console.log(m1);
console.log(m2);
console.log(m1.size);
console.log(m2.has('FName'));
console.log(m1.get('d'));
for (let i of m2.keys()){
    console.log(i);
}
for (let i of m2.values()){
    console.log(i);
}
for (let [i,j] of m2.entries()){
    console.log(i,j);
}
// Iteration is same as using entries()
for (let [i,j] of m2){
    console.log(i,j);
}
console.log(m1['a']); // Random Access is not allowed
