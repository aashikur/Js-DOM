// const onLoad = () => {

//     console.log('one')
//     console.log('two')

    
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(3,json))


//     setTimeout(()=>{
//         console.log("four")
//     },2000)
    
//     console.log('five')
// }

// onLoad();







// const onLoad =  async () => {

//     console.log('one')
//     console.log('two')

//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await response.json();
//     console.log(3,data);


//     setTimeout( ()=>{
//         console.log("four")
//     },2000)
    
//     console.log('five')
// }

// onLoad();


async function cusrom() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data)
   
}

cusrom();
console.log('2nd')