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

    body2.appendChild(section1).appendChild(ul);
    ul.appendChild(li1).innerHTML = "First Append li"
    ul.appendChild(li2).innerHTML = "Second Append li"
    ul.appendChild(li3).innerHTML = "Three Append li"
    ul.appendChild(li4).innerHTML = "Four Append li"



// ShortCut by caret cote `` 

    div = document.createElement('div');
    section1.appendChild(div);

    div.innerHTML = 
    `
        <hr>

        <h1> This is ShortCut Method by single <i><u>caret Qode</u></i></h1>
        <ul> 
            <li> ShortCut </li>
            <li> ShortCut </li>
            <li> ShortCut </li>
            <li> ShortCut </li>
        </ul>
    `;