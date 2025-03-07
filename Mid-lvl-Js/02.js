console.log("=======================")
// ...Array
// spread 

const num = [2,3,5,7,9,0,2,1,3]; 
console.log(num);
console.log(...num);

const newNum = [99,22,...num];
console.log(...newNum);

console.log("Btwn 5,10 max:", Math.max(5,10));
console.log("max: ",Math.max(...newNum));



// possible
const num2 = num;
console.log('num2',...num2)


// Passing Element As Argument in a Function
const numbers = [5, 10, 15];

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(...numbers)); // Output: 30


// ===================== string to array
const word = "hello";
const letters = [...word];

console.log(letters); // Output: ['h', 'e', 'l', 'l', 'o']


console.log('=========== new set()')
let uniue = new Set([2,4,5,6,6,4,3,3,4,5,6,8]);
console.log('unique by new set() :', uniue)