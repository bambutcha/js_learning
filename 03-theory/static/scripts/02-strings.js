const firstName = 'Vladilen';
const age = '29';

function getAge() {
    return age;
}

// const old = 'Hello my name is ' + firstName + 'and my age is ' + age;
// const output = `Hello my name is ${firstName} and my age is ${getAge() > 18 ? 'Can drive' : "Can't drive"}`;

console.log(firstName.length);
console.log(firstName);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.charAt(2));
console.log(firstName.indexOf('!'));
console.log(firstName.toLowerCase().startsWith('vla'));
console.log(firstName.endsWith('len'));
console.log(firstName.includes('ile'));
console.log(firstName.repeat(3));

const password = '     my super pass';

console.log(password.trim());
console.log(password.trim().padStart(15, '_'));
console.log(password.trim().padEnd(15, '_'));
console.log(password.trim().padStart(15, '_').padEnd(17, '_'));

