// const num = 42; // integer
// const float = 42.42; // float
// const pow = 10e3; // power
// const big = 1_000_000;
// 
// console.log(Number.MAX_SAFE_INTEGER);

const strInt = '42';
const strFloat = '42.42';

// console.log(Number(strInt))
// console.log(Number(strFloat))

// console.log(parseInt(strInt));
// console.log(parseFloat(strFloat));

// console.log(+strInt, +strFloat);

// console.log(+(0.1 + 0.2).toFixed(1));

// BIGINT

// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980n);
// console.log(-42n);
// 
// 
// console.log(10n - BigInt(4));
// console.log(parseInt(10n) - 4);
// console.log(5n / 2n);


// Math
// console.log(Math.E);
// console.log(Math.PI);

const myNum = 8.8

// console.log(Math.sqrt(25));
// console.log(Math.pow(2, 5));
// console.log(Math.abs(-8));
// console.log(Math.max(2, 5, 42, 199, 0));
// console.log(Math.min(2, 5, 42, 199, 0));
console.log(Math.floor(myNum));
console.log(Math.ceil(myNum));
console.log(Math.round(myNum));
console.log(Math.trunc(myNum));
console.log(Math.random());
console.log(Math.sign(myNum));

function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min + 1) + min);
}

const num1 = getRandomNumber(18, 51);
console.log(num1); 

