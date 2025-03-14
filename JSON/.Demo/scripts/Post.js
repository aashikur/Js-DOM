const ID = (n) => document.getElementById(n);
const b1 = ID('btn1')
const b2 = ID('btn2')
const b3 = ID('btn3')

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data => data.json())
// .then(data => console.log(data));


b1.addEventListener('click', async () => {
    const data = await fetchUser();
    for(const mail in data){
        console.log(data[mail].email)
    }
});




const fetchUser = ()=> {
 return   fetch("https://jsonplaceholder.typicode.com/users")
    .then(json => json.json())
    .then(data => data)
}