/*
    1. Where to Add 
    2. Create What to Add
    3. Add the Element
    4. Give innerHTML to the created item.
*/

/* 
    Task: Create a section containing an h1 element followed by a ul with 4 li elements.
*/

// 1. Where to Add
let body2 = document.getElementById('main-body');

//2. what to Add 
let section1 = document.createElement('section');
let h2 = document.createElement('h1');
let ul = document.createElement('ul');

let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');

// 3. Adding element
body2.appendChild(section1).appendChild(h2).innerHTML = "JavaScript Added New Section";

let x = body2.appendChild(section1).appendChild(ul);
    x.appendChild(li1).innerHTML = "First Append li"
    x.appendChild(li2).innerHTML = "Second Append li"
    x.appendChild(li3).innerHTML = "Three Append li"
    x.appendChild(li4).innerHTML = "Four Append li"