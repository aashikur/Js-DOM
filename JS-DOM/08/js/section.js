console.log("section.js File")


const mainBody = document.getElementById('main');

// let's Create a Section
const sectionCustom = document.createElement('section');
      sectionCustom.innerHTML = `
    
      <h1 class="section-title"> DOM SECTION </h1>
        <ul> 
            <li> Dom 1</li>
            <li> Dom 1</li>
            <li> Dom 1</li>
            <li> Dom 1</li>
        </ul>
    </h1>
    
    `;


    // Created the element now If we ADD or Append it to the Body -> it will be live;

    // Adding to Body or Document
    mainBody.appendChild(sectionCustom);