
// const click1 = () => {
//     setTimeout(() => {
//         console.log("hello")
//     }, 3000);
// }

// const onLoad = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.jso()) // json()
//     .then(data => console.log(data))
//     .catch(error => console.log("CUSTOM ERROR!"))
// }
// onLoad();


// // Create CUSTOM Promise.===================
// const fetchData = () => {
//     return new Promise((resolve,reject) => {
//         const status = true;
//         if (status) {
//             resolve({name:"Ashik Working.."})
//         }
//         else {
//             reject("server Error")
//         }
//     })
// }


// fetchData() 
//     .then(res=> console.log(res))
//     .catch(error => console.log(error))

// // Create CUSTOM Promise.===================














// const fetchData2 = () => {
//     return new Promise((resolve,reject) => {
//         const status = true;
//         if (status) {
//             const mockData = {
//                 json:() => Promise.resolve({name:"Ashik Working.."})
//             }
//             resolve(mockData);
            
//         }
//         else {
//             reject("server Error")
//         }
//     })
// }


// fetchData2() 
//     .then(res=> res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


// const urls = [
//     'https://jsonplaceholder.typicode.com/posts/1',
//     'https://jsonplaceholder.typicode.com/posts/2',
//     'https://jsonplaceholder.typicode.com/posts/3',
//     'https://jsonplaceholder.typicode.com/posts/4',
//     'https://jsonplaceholder.typicode.com/posts/5'
// ];

// // for(const url of urls) {
// //     const dataUser = () => {
// //         fetch(url)
// //         .then(response => response.json())
// //         .then(data => console.log(data.id, data.title))
// //     }
// //     dataUser();
// // }


// // OR => 
//     Promise.all(urls.map(url =>{
//         return fetch(url).then (res => res.json()).then(data => data)
//     }))

//     .then(res =>res)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))