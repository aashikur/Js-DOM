/*
    Spcial :
    ----------------------------
    setInterval()
    clearInterval();

    setTimeOut();
    clearTimeout();
*/



let cnt = 0,cnt2=0;
// const response = setInterval(()=> {
//     cnt++;
//     console.log(cnt);
//     if(cnt==5) clearInterval(response);
// },1000)




const StartAfter = setTimeout(()=> {
    cnt2++;
    console.log(cnt2);
    
},1000)

clearTimeout(StartAfter);