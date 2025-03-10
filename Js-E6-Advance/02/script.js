// An Object
console.log("------------For in loop--------------------");

const person = {
    name : 'Ashik',
    age  : 23,
    country: "BD"
}
 // Loop a opject

 for (let key in person) {
    console.log(`key: ${key}`);
 }

 console.log("-----------For in loop---------------------");


 for (let key in person) {
    console.log(`value:  ${person[key]}`);
 }


 console.log("------------For of Loop--------------------");
// For of Loop

for(let key of Object.entries(person))
{
    console.log(key)

}
console.log("-----------[key,value]-Object.entries(obj)--------------------");

for (let [key,value] of Object.entries(person)){
    console.log(key, value);
}

console.log("----------arrow Funciton No Parameter-------------------");

const myFun = () => console.log("THis Arrow FUn");

myFun();


console.log("----------Remove Model Property-------------------");

delete person.age;

console.log(person);