/*
    let's Create A whole Section using JavaScript
*/

// where to add 
const body = document.getElementById('main-body');

// create what to add
const h1 = document.createElement('h1');

// add the chield to body
body.appendChild(h1);
h1.innerText = "Hello World by js Dom";

// Adding Class to the Document :D 
h1.classList.add('text-white'); 