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


