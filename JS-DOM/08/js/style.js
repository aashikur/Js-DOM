console.log("style.js File")


// Catch All Title by h1 (tagName)
let allTitles = document.getElementsByTagName('h1');
// console.log(allTitles);

// Catch All Tile by ClassName
let AllTitlesClass = document.getElementsByClassName('section-title');
// console.log(AllTitlesClass);


// Giving Style to All element.
for(const i of AllTitlesClass)
{
    i.style.background = 'teal';
    i.style.padding = '10px';
}


// Catch ID
let body = document.getElementById('main');
    body.style.background = '#eaa'


// MoreWays
// document.querySelectorAll(); -> all element arrayLike
// document.querySelector(); -> single First one