// # JavaScript Notes with Examples

// ## 1. Primitive and Non-Primitive Data Types

// ### **Primitive Data Types:**
// Primitive data types in JavaScript include:
// - String
// - Number
// - Boolean
// - Null
// - Undefined
// - Symbol
// - BigInt

// Example:
// ```js
// let person = 'ashik';
// let newP = person;

// newP = 'ashraf';
// newP[2] = 'T';  // This does nothing because strings are immutable

// console.log(newP);  // Output: 'ashraf'
// console.log(person); // Output: 'ashik' (original value remains unchanged)
// ```

// ### **Non-Primitive Data Types:**
// Non-primitive data types include Objects, Arrays, and Functions. They are stored by reference.

// Example:
// ```js
// let money = { bangladesh: 'taka' };
// let myCurrency = money;

// money.bangladesh = 'Dollar';

// console.log(myCurrency);  // Output: { bangladesh: 'Dollar' }
// ```
// Since objects are reference types, modifying `money` also affects `myCurrency`.

// ## 2. Null and Undefined
// - `null` represents an intentional absence of any object value.
// - `undefined` means a variable has been declared but has not been assigned a value.

// Example:
// ```js
// let a = null;
// let b;

// console.log(a); // Output: null
// console.log(b); // Output: undefined
// ```

// ## 3. Truthy and Falsy Values
// - **Falsy values**: `false`, `0`, `''` (empty string), `null`, `undefined`, `NaN`
// - **Truthy values**: All values except falsy ones (e.g., `'Hello'`, `1`, `{}`, `[]`, etc.)

// Example:
// ```js
// if (0) console.log("Falsy"); // Doesn't run
// if ('Hello') console.log("Truthy"); // Runs
// ```

// ## 4. Type Conversion
// Explicitly converting one data type to another.

// Example:
// ```js
// console.log(Number("123"));  // Output: 123
// console.log(String(123));  // Output: "123"
// console.log(Boolean(0));  // Output: false
// ```

// ## 5. `==` vs. `===`
// - `==` (loose equality) compares values after type conversion.
// - `===` (strict equality) checks both value and type.

// Example:
// ```js
// console.log(5 == "5");  // true (type conversion happens)
// console.log(5 === "5"); // false (different types)
// ```

// ## 6. JavaScript Hoisting (Var)
// - Variables declared with `var` are hoisted but not initialized.
// - `let` and `const` are hoisted but cannot be accessed before initialization.

// Example:
// ```js
// console.log(x); // Undefined (hoisted but not assigned)
// var x = 5;
// ```

// ## 7. JavaScript Closures
// A closure is a function that remembers the variables from its outer scope even after the outer function has executed.

// Example:
// ```js
// function sum() {
//     let cnt = 0;
//     return () => {
//         cnt++;
//         console.log(cnt);
//     }
// }

// const res = sum();
// res(); // Output: 1
// res(); // Output: 2
// res(); // Output: 3

// const res2 = sum();
// res2(); // Output: 1 (New closure, starts fresh)
// res2(); // Output: 2
// ```

// ## 8. Callback Functions in JavaScript
// A callback function is a function passed as an argument to another function, executed later.

// Example:
// ```js
// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("Ashik", sayGoodbye);
// // Output:
// // Hello, Ashik
// // Goodbye!
// ```

// ### **Real-Time Example: Fetching Data from an API**
// A real-world use case of callbacks is handling asynchronous operations, such as fetching data from an API.

// Example:
// ```js
// function fetchData(callback) {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         let data = { user: "Ashik", age: 25 };
//         console.log("Data fetched successfully");
//         callback(data);
//     }, 2000);
// }

// function displayData(data) {
//     console.log("User Data:", data);
// }

// fetchData(displayData);
// ```

// ### Explanation:
// - `fetchData` simulates a network request using `setTimeout`.
// - After 2 seconds, it fetches data and calls `displayData` with the retrieved data.
// - `displayData` then logs the user data.









// Pass By Reference Pass By Value 

// function sum(a,b,c){
//     const num = [...arguments];
//     console.log(num)
// }


// console.log(sum.length)
// sum(12,34,54,23,56,88);

// what is api

const person = {
    name : 'ashik',
    age : 10,
    friend: ['kobir','saddam','sabbir'],
    status: false,
}

const newPerson = JSON.stringify(person);
const newParson2 = JSON.parse(newPerson);
console.log( newParson2);