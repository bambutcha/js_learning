// Function Declaration
// function greet(name) {
//     console.log("Hello, " + name);
// }


// // Function Expression
// const greet2 = function (name) {
//     console.log("Hello, " + name);
// }

// greet('Yaga');
// greet2('Yaga');

// console.log(typeof greet);
// console.log(typeof greet2);

// console.dir(greet);
// console.dir(greet2);

// setTimeout(greet, 1500, 'Yaga');

// setTimeout(function () {
    // greet('Yaga');
// }, 1500);

// let counter = 0;
// setInterval(function () {
//     if (counter != 5) {
//         console.log(parseInt(Math.random() * (11 - 2) + 2)); // От 2 до 10
//     }
//     counter++;
// }, 2000);


// Arrow Function
function greet(name) {
    console.log("Hello, " + name);
}

const arrow = (name) => {
    console.log("Hello, " + name);
}

arrow('Yaga');

const arrow2 = (name) => console.log("Hello, " + name);

function pow(num, exp) {
    return Math.pow(num, exp);
}

const pow2 = (num, exp) => Math.pow(num, exp);

// console.log(pow(2, 3));
// console.log(pow2(2, 3));

// ======== Default Parameters
const sum = (a = 0, b = a / 2) => a + b;

console.log(sum(50, 2));
console.log(sum(50));

function sumAll(...numbers) {
    // let res = 0;
    // for (let num of numbers) {
        // res += num;
    // }

    return numbers.reduce((acc, cur) => (acc += cur), 0); 
}

console.log(sumAll(1, 2, 3, 4, 5));


// Closures

function createPerson(name) {
    return function(lastName) {
        console.log(name + ' ' + lastName);
    }
}

const addLastName = createPerson('Yaga');
addLastName('Kovalev');
addLastName('Petrov');