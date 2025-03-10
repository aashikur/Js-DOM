/**
 * ES6 Notes - Object and Array Destructuring, Loops, Methods, and Functions
 * Author: Ashikur Rahaman
 * Description: This file covers ES6 features with detailed explanations and examples.
 */

//========================
// Objects in JavaScript
//========================

const person = {
    name: 'Ashik',
    age: 23,
    country: 'BD'
};

console.log(person.name); // Accessing object properties
console.log(person.age);
console.log(person.country);
console.log(Object.entries(person)); // Converts object into an array of key-value pairs

//========================
// Object Destructuring
//========================
// Instead of accessing properties one by one, we can use destructuring
const { name, age, country } = person;

console.log(name);
console.log(age);
console.log(country);

//========================
// Array Destructuring
//========================
const other = ['Hridoy :D', 'happy', 25, { hobby: 'Video making' }, 'bartpar'];
const [nam, expression, boyos, hobby, character] = other;

console.log(nam);
console.log(hobby);
console.log(Object.keys(hobby)); // Retrieves the keys of the object inside the array
console.log(Object.values(hobby)); // Retrieves the values
console.log(Object.entries(hobby)); // Converts object into an array of key-value pairs

console.log('=================================');
console.log(' ');

//========================
// Object Methods
//========================
const obj = {
    first: 'Ashik',
    second: 'Hridoy',
    third: 'Ashraf',
    company: 'DBBL'
};

// Adding a new property
obj.salary = 20000;

// Object.seal() prevents new properties from being added but allows modification of existing properties
Object.seal(obj);
obj.fourth = 'Sakib'; // This will not be added
obj.company = 'BRAC'; // This will change

// Object.freeze() prevents any modifications, including property value changes
Object.freeze(obj);
obj.company = 'Google'; // This change will NOT take effect
obj.salary = 50000; // This change will NOT take effect

console.log(obj);

//========================
// Looping Through Objects
//========================

console.log("------------For-in Loop--------------------");
// The for-in loop iterates over all enumerable properties of an object
for (let key in person) {
    console.log(`Key: ${key}`);
}

console.log("-----------For-in Loop---------------------");
for (let key in person) {
    console.log(`Value: ${person[key]}`);
}

console.log("------------For-of Loop--------------------");
// The for-of loop is used with Object.entries() to iterate over key-value pairs
for (let key of Object.entries(person)) {
    console.log(key);
}

console.log("-----------[key, value] - Object.entries(obj)--------------------");
for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}

//========================
// Arrow Functions
//========================
console.log("----------Arrow Function (No Parameters)-------------------");
const myFun = () => console.log("This is an arrow function");
myFun();

//========================
// Deleting Object Properties
//========================
console.log("----------Remove Object Property-------------------");
delete person.age; // Removes 'age' from the person object
console.log(person);
