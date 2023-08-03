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

// Tagged Templates

function productDescription(strings, productName, productPrice) {
    console.log(strings);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'pretty cheap regarding its price';
    if (productPrice > 20) {
    priceCategory = 'fairly priced';
    }
    // return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`; // The product (JavaScript Course) is fairly priced.
    return {name: productName, price: prodPrice}; // {name: 'JavaScript Course', price: 29.99}
}
    
const prodName = 'JavaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`The product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);