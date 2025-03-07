// An Object

const person = {
    name : 'Ashik',
    age  : 23,
    country: "BD"
}

console.log(person.name);
console.log(person.age);
console.log(person.country);
console.log(Object.entries(person))


// Short Cut
const {name, age,country} = person;

console.log(name);
console.log(age);
console.log(country);


// Wanna user This With Array ??? 

// Create An Array
const other = ['hridoy :D','happy',25,{hobby:'Video make'}, 'bartpar'];
const [nam,expression,boyos,hobby,character] = other;

console.log(nam);
console.log(hobby)
console.log(Object.keys(hobby))
console.log(Object.values(hobby));
console.log(Object.entries(hobby))


console.log('=================================');
console.log(' ');


// Object 

const obj = {
    first : 'Ashik',
    second: 'Hridoy',
    third : 'Ashraf',
    company: 'DBBL'
}

obj.salary = 20000;
Object.seal(obj); // No new Key will be aded => bt can cnge the Values

obj.fourth = 'Sakib'; // WIll not add

obj.company = 'BRAC';

Object.freeze(obj); // not nothing can be done.
