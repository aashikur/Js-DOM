// An Object

const person = {
    name : 'Ashik',
    age  : 23,
    country: "BD"
}
 // Loop a opject

 for (let key in person) {
    console.log(`key: ${key}`);
 }

 console.log("--------------------------------")

 for (let key in person) {
    console.log(`value:  ${person[key]}`);
 }
