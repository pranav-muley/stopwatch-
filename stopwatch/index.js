var seconds =0;
var tens = 00;
var mins = 0;
//getting a tens,seconds,and minutes from DOM
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var appendMins = document.getElementById("mins");

var buttonStar = document.getElementById("start");
var buttonStop = document.getElementById("stop");
var buttonReset = document.getElementById("reset");

//this is used for storing a timer
var interval;

//function used start timer
function startTimer(){
    tens++;
    // tens less than 10 add 0 infront of time
    if(tens<9){
        appendTens.innerHTML = "0"+tens;
    }
    //if greater simply update
    if(tens>9){
        appendTens.innerHTML = tens;
    }
    // 1 second completes then
    if(tens>99){
        seconds++;
        appendSeconds.innerHTML = seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if(seconds<9){
        appendSeconds.innerHTML = seconds;
    }
    if(seconds >= 59){
        mins++;
        appendMins.innerHTML =  mins;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if(mins<9){
        appendMins.innerHTML = mins;
    }
}

buttonStar.onclick = function(){
    interval  = setInterval(startTimer);
}
buttonStop.onclick = function(){
    clearInterval(interval);
}
buttonReset.onclick = function(){
    clearInterval(interval);
    tens =0;
    seconds = 0;
    mins = 0;
    appendSeconds.innerHTML = "00";
    appendTens.innerHTML = "00";
    appendMins.innerHTML = "00";
    setTimeout(1000);
}