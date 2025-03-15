function displayAfter5s(){
    setTimeout(() => {
        console.log("This Run After 5s.")
    }, 5000);
}

function delayedGreeting(name='name',delayTime = 0){
    setTimeout(()=>{
        console.log("Hello",name);
    },delayTime)
}





function tellJoke(){
    let cnt = 0;
    setInterval(() => {
        cnt++;
        api(); // this will tell a new jokes on load
    }, 2000);
}


function api () {
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    .then(Response => Response.json())
    .then(data=> console.log(data.joke))
}

