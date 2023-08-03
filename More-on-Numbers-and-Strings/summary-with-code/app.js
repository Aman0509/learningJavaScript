// Largest number JS can reliably produce

// Way 1
console.log(Number.MAX_SAFE_INTEGER);

// Way 2
console.log(Math.pow(2, 53)-1);

// Smallest number JS can reliably produce
console.log(Number.MIN_SAFE_INTEGER);

// Largest Value(Decimal not Integer) you can work with JS
console.log(Number.MAX_VALUE);

// Finding random number between a given range
function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(30, 89));