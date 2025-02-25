
let x = document.getElementById("title");
console.log(x);
console.log(x.innerHTML);

x.innerText = "Changed Title";
console.log(x.innerText)


let y = document.getElementsByClassName('the-list');
console.log(y);


// calling by loop 
for(const list of y){
    console.log(list);
}