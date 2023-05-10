/* Pure Function */

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(4, 5));
console.log(add(19, 3));

/* Impure Function */

// On every reload, the returned value of these function will change
function addRandom(num) {
    return num + Math.random();
}

console.log(addRandom(7));
console.log(addRandom(17));

// A function is also considered as impure if it introduces side effect, which means changes anything outside of function
let previousResult = 0;
function addMoreNumbers(num1, num2){
    const sum = num1 + num2;
    previousResult = sum; // Side-Effect
    return sum;
}

console.log(addMoreNumbers(34, 21), previousResult);

const hobbies = ['Sports', 'Cooking'];

function printHobbies(hobbies) {
    console.log(hobbies);
    hobbies.push('Gardening');
}

printHobbies(hobbies);
console.log(hobbies);

/* Factory Functions */

function createTaxCalculator(income) {
    function calculateTax(taxPercent) {
        return (income*taxPercent)/100;
    }
    return calculateTax;
}

income = createTaxCalculator(745334);

console.log(income(5));
console.log(income(10));

/* Closures */

let userName = 'John';

function greetUser() {
    console.log('Hello Mr. ' + userName + '!');
}

userName = 'Wick';

greetUser(); // Hello Mr. Wick!
