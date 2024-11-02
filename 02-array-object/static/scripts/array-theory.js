const names = ['Владилен', 'Елена', "Игорь", "Игорь", "Ксения"];

names.push("Алена");

names.unshift("Даниил");

const firstName = names.shift();

const lastName = names.pop();

const reverseNames = names.toReversed();

const reserved = names.toReversed();

const letters = ['e', 'g', 'b', 'a', 'j'];

letters.sort();

// console.log(names.splice(2,1));

console.log(names.toSpliced(2,1));

const greatWoman = "Елена";
const index = names.indexOf(greatWoman); 
names[index] = "Елена Великая";
const newNames = names.with(index, 'Елена Великая');

const capitalNames =  names.map(function(name){
    if (name == "Елена Великая") {
        name = "Elena the Great";
    }
    const newName = name.toUpperCase();
    // const newName = name.toLowerCase();
    return newName;
});

// console.log(names.includes("Елена Великая"));
console.log(names.indexOf("Елена Великая")) !== -1;

const people = [
    {name: 'Владилен', budget: 4200},
    {name: 'Елена', budget: 15100},
    {name: 'Игорь', budget: 300},
    {name: 'Ксения', budget: 7250},
]

let findedPerson1;

for (let person of people) {
    if (person.budget > 7520) {
        findedPerson1 = person;
    }
}

const findedPerson11 = people.find(function(person) {
    if (person.budget == 7250) {
        return true;
    } else {
        return false;
    }
});

const finded1 = people.find((p) => p.budget === 7250);

const finded = people.findIndex(function (person) {
    return person.budget === 7250;
});

const filtered = people.filter(function (person) {
    return person.budget > 5000;
});

let sumBudget1 = 0;

filtered.forEach((person) => {
    sumBudget1 += person.budget
});

const sumBudget = people.filter((p) => p.budget > 5000).map((p) => p.budget).reduce((acc, p) => acc + p, 0);

const string = 'Я люблю тебя!';
const reversed = string.split('').toReversed().join('');

console.log(reversed)   ;