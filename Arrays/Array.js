// There are 2 ways to declare Array

let arr1 = new Array();
let arr2 = [];

// Array can store elements of any data type

arr1 = [2, 3, 5, 3, 1, 8];
arr2 = [
    {
        'a': 1,
        'b': 2,
        'c': 3,
    },
    true,
    'John',
    800000
]

console.log(arr1);
console.log(arr2);

/* Array methods */

// push()
arr1.push('Voila');
console.log(`arr1.push('Voila') = ${arr1}`);

// pop()
arr1.pop()
console.log(`arr1.pop() = ${arr1}`);

// shift() - Removes item from beginning
arr1.shift();
console.log(`arr1.shift() = ${arr1}`);

// unshift() - Add item from the beginning
arr1.unshift('Start');
console.log(`arr1.unshift('Start') = ${arr1}`);


// indexOf()
console.log(`arr1.indexOf(3) = ${arr1.indexOf(3)}`);

// splice() - Array.splice( index, remove_count, item_list )
// In below example, element at index 3 will be deleted 1 time and
// replaced with 'Three' and true
arr1.splice(3, 1, 'Three', true);
console.log(`arr1.splice(3, 1, 'Three', true) = ${arr1}`);

// splice() can also be used to delete operation
arr1.splice(4, 2);
console.log(`arr1.splice(4, 2) = ${arr1}`);

// slice() is used to create shallow copy of array
arr3 = arr1.slice();
console.log(`arr1.slice() = ${arr3}`);


// Destructing Array

const func1 = function(){
    return [1,2,3,4];    
}

// Case 1 - Assigning each element of array in a variable
let [x, y, z, a] = func1();
console.log(x,y,z,a);

// Case 2 - Value of unassigned element of array will be discarded
let [i, j, k] = func1();
console.log(i,j,k);

// Case 3 - Assigning default values
let [b = 34, c = 56] = [];
console.log(b,c);

[b = 34, c = 56] = [87];
console.log(b,c);

// Case 4 - Ignoring some values
[a, , ,c] = [23,45,56,34,54]
console.log(a,c);

// Case 5 - Rest Parameter with destructing
let planets = ['M', 'V', 'E', 'MA', 'J', 'S', 'N', 'P'];

[a, ,b,c, ...others] = planets;
console.log(a,b,c);
console.log(others);
