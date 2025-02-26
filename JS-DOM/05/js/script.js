/* Need to learn - Tesk

document.getElementById('');
document.getElementsByTagName('');
document.getElementsByClassName('');
document.querySelectorAll('')
document.querySelectorAll('');
innerHTML
innerText


*/


document.getElementById('title').style.color = 'red';
document.getElementById('title').style.textTransform = 'uppercase';
document.getElementById('title').style.textAlign = 'center';
document.getElementById('title').style.border = '1px solid red';

let x = document.getElementById('title');
    x.style.padding = '30px';
    x.style.borderRadius = '5px';
    x.style.maxWidth = '600px';
    x.style.margin = 'auto';

// Query Selector

const sections = document.querySelectorAll('section');
for(const section of sections){
    section.classList.add('hover-effect');

    section.style.border = '1px solid #ddd';
    section.style.padding = '40px 20px';
    section.style.margin = '10px 0';
    section.style.borderRadius = '5px';
    section.style.background = "yellowgreen"
}

// Selecting from Id and adding Class
 const section1 = document.getElementById('s1');
 section1.classList.add('text-color') 

 