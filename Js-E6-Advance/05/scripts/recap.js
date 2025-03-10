// // Recap of map, filter, find, forEach

// // Array of names
// let name = ['ashik', 'ovi', 'sabid'];

// // Changing the second element of the array
// name[1] = 'kuddus';  // Can be changed
// console.log(name); 

// // String variable
// let firstName = "Ashikur";

// // Attempting to change a character in the string (this won't work because strings are immutable in JavaScript)
// firstName[3] = 'T'; // Cannot change
// console.log(firstName[3]); // This will still log 'i'

// // Empty template literal (not used in this example)
// let x = ``;

// // Array of numbers
// const nums = [33, 44, 55, 66, 77];

// // Using forEach to iterate over the array
// nums.forEach(p => {
//     if (p == 55) {
//         p = 88; // This change won't affect the original array
//     }
//     return p; // This return value is ignored by forEach
// });

// // Note: The forEach loop does not change the original array. 
// // If you want to modify the array, consider using map or a different approach.


// Array of mobile objects
const  phone = [
    { id: 1, name: "iPhone 13", color: "Black", price: 999, brand: "Apple" },
    { id: 2, name: "Galaxy S21", color: "Silver", price: 799, brand: "Samsung" },
    { id: 3, name: "Pixel 6", color: "White", price: 599, brand: "Google" },
    { id: 4, name: "OnePlus 9", color: "Blue", price: 729, brand: "OnePlus" },
    { id: 5, name: "OnePlus 8", color: "Teal", price: 729, brand: "OnePlus" }
];

    // add 100 Tk to all price and Update Object

    const newPhone = phone.map( p => {

        p.price += 100;
        return p;
    })

    console.log('\n',newPhone);


    // Just Print the object 
    phone.forEach(p => console.log(p));


    // print the one how has ID : 4;

    const singleProduct = phone.find(p=> p.id == 4);
    console.log('\n',singleProduct)



    // Find all the onePlus phone

    const allMatchPhone = phone.filter(p => p.brand == 'OnePlus')
    console.log('\n',allMatchPhone)