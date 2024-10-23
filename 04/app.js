let iter = 0

 function runTimer (){

  const idInterval = setInterval (function() {

    const time = (new Date()).toLocaleTimeString();
    console.log(time);
   
    iter ++;
    console.log(iter);
    
    if (iter === 5) {
        clearInterval(idInterval)}
    }

   , 5000)}

runTimer();
