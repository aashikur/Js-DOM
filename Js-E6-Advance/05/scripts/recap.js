// Reacap of map Filter find forEach

let name = ['ashik','ovi','sabid'];

name[1] = 'kuddus';  // Can Be Change 
console.log(name); 

let firstName = "Ashikur";

firstName[3] = 'T'; // Can Not Change 
console.log(firstName[3])

let x = `

`;

const nums = [33,44,55,66,77];

nums.forEach(p => {
    if(p == 55){
        p = 88;
    }
    return p;
})


// Adding +1 to new Element and (some array Methods)

// const nums = [66,88,99,11,55,44];
// const newNums = [];
// const newMapNums = nums.map(value => value + 1);


// for(let i = 0; i<nums.length ; i++){
//     newNums.push(nums[i]+1);
// }




// console.log(newNums);
// console.log(newMapNums);



// // =============================== Square With Map
// const targets = [1,2,3,4,5,6];
// const targetsSquare = targets.map(value => value * value);
// const targetCube = targets.map(value => value * value * value)


// console.log(targetsSquare)
// console.log(targetCube) 


// // =============================== Square With Map
// const friends = ['ashik','ashiraf','rohim','sabid'];

// const newFriends = friends.map(v => {
//     console.log(v);
//     return v;
//     // return `${v} : Good BOy!`;
// });

// console.log(newFriends);




// // =============================== Can be 2 ta Paramitar -> returnn INDEX
// const friends = ['ashik','ashiraf','rohim','sabid'];

// const newFriends = friends.map((v,index) => {
//     console.log(index,v);
//     return v;
//     // return `${v} : Good BOy!`;
// });

// console.log(newFriends);







// // =============================== find() , Filter(), forEach();


// // Array of mobile objects
// const mobiles = [
//     { id: 1, name: "iPhone 13", color: "Black", price: 999, brand: "Apple" },
//     { id: 2, name: "Galaxy S21", color: "Silver", price: 799, brand: "Samsung" },
//     { id: 3, name: "Pixel 6", color: "White", price: 599, brand: "Google" },
//     { id: 4, name: "OnePlus 9", color: "Blue", price: 729, brand: "OnePlus" },
//     { id: 5, name: "OnePlus 8", color: "Teal", price: 729, brand: "OnePlus" }
// ];

// // // ForEach();
// // mobiles.forEach(product => console.log("Only Color: ",product.color));


// // // Giveing a Conditon for Cosole
// // mobiles.forEach(product => {
// //     if(product.price > 750) 
// //         console.log(product);
// //     })



// // // Filter();
// // const newFilter = mobiles.filter(p => p.price > 750);
// // console.log(newFilter);



// // Find();
// const newFind = mobiles.find(p => p.price == 729);
// console.log(newFind);


