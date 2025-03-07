let name = "Ashik";

const line = `
    This is Multiline
    code and This 
    can  thake Vaiable ${name} 
    dinamicly.
`;

console.log(line);



// Default Argument 0, 1, EmptyString..
function sum(num1=0, num2=0){
    return num1+num2;
}
console.log("sum: ",sum(20));


// ================
// Arrow Function

 const sum2 = function(num1,num2){
    return num1+num2;
 }
 console.log("sum2 : ",sum2(20,20))


 // ===============================
 const sum3 = (num1,num2)=> num1+num2;
 console.log("sum3 :", sum3(22,33));

 //================================
const sum4 = (num1,num2)=> {
   num1 = num1%2 == 0 ? num1  : num1 * 2 ;
   num2 = num2%2 == 0 ? num2  : num2 * 2;

   return num1 * num2;
}
console.log("sum4 : ",sum4(3,4)); 
// Argument Arrow Function not Supported.

//==========================================================

document.getElementById('title').addEventListener('click',function(){
    console.log('Title Clicked!');
});

document.getElementById('title').addEventListener('click',()=>{
    console.log('Anonamus Function-> Arrow function => The Title!');
})