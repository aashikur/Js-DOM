console.log("script.js File")

// Grap the second section
const secondSection = document.getElementsByTagName('section')[1];

// AppendChild to the New Section
let li = document.createElement('li');

// Add the Element
secondSection.appendChild(li).innerHTML = "appendChild from DOM";

