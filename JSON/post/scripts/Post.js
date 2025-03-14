const ID = (n) => document.getElementById(n);
const b1 = ID('btn1')
const b2 = ID('btn2')
const b3 = ID('btn3')
const Pcontaier = ID('Post_container');


b1.addEventListener('click',()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(post => {
       return post.json();
    })
    .then(post => {
        return mypost(post);
    })
})

    

b2.addEventListener('click',()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(post => {
       return post.json();
    })
    .then(post => {
        return mypost2(post);
    })
})

 
b3.addEventListener('click',()=>{
     cnt = 1;
    Pcontaier.innerHTML = '';
})


// // const mypost = (post) => console.log(post[0]);


// function mypost(post){
    

//     // Create a Post Contaienr
// const div = document.createElement('div');
// const h1 = document.createElement('h1');
//       h1.innerHTML = "Title";
// const p = document.createElement('p').innerHTML = "text";

// div.appendChild (h1);
// div.appendChild(p);
// Pcontaier.appendChild(div);


// }


let cnt = 1;

function mypost(post){


   const title = post[cnt].title.toUpperCase();
   const context = post[cnt].body;

   console.log(title,"\n",context)

   const div = document.createElement('div');
         div.classList.add('border','rounded-md','p-2','my-2','border-gray-400','font-bold')
         div.innerHTML = `
        <h1> ${cnt++}. ${title}</h1>
       
        <p class="text-sm text-gray-700 mt-2">${context}</p>
         `;

         Pcontaier.appendChild(div);

}

function mypost2(post){


    for(let p = cnt ; p<post.length; cnt++, p++) {
        
        const titlee =  post[p].title.toUpperCase();
        const context = post[p].body;
        // console.log(titlee,"\n",context) ; 
 
        const div = document.createElement('div');
              div.classList.add('border','rounded-md','p-2','my-2','border-gray-400','font-bold')
              div.innerHTML = `
             <h1> ${cnt}. ${titlee}</h1>
            
             <p class="text-sm text-gray-700 mt-2">${context}</p>
              `;
     
              Pcontaier.appendChild(div);
             
     
    }


 }

