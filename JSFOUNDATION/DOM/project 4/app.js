// Variables for buttons 

const startStopBtn = document.querySelector('.startStopBtn');
const resetBtn = document.querySelector('.resetBtn');

// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Stop Watch Function

function stopWatch(){
    seconds++;
    if (seconds >= 60){
        seconds = 0;
        minutes++;
    }

    if (minutes >= 60){
        minutes = 0;
        hours++;
    }

    if (seconds < 10 ){
        leadingSeconds = "0" + seconds.toString();
    }else{
        leadingSeconds = seconds;
    }
    if (minutes< 10 ){
        leadingMinutes = "0" + minutes.toString();
    }else{
        leadingMinutes = minutes;
    }
    if (hours < 9 ){
        leadingHours = "0" + hours.toString();
    }else{
        leadingHours = hours;
    }
   
    let displayTimer = document.querySelector('.timer').innerText = 
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval & timerstatus


let timerInterval = null;
let timerstatus = "stopped";

startStopBtn.addEventListener('click', function(){

    if (timerstatus === "stopped"){
        timerInterval = window.setInterval(stopWatch,1000);
        document.querySelector('.startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerstatus = "started";
    }else{
        window.clearInterval(timerInterval);
        document.querySelector('.startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerstatus = "stopped";
    }

})


resetBtn.addEventListener('click', function(){
window.clearInterval(timerInterval);
timerInterval = null;

seconds = 0;
minutes = 0;
hours = 0;

document.querySelector('.timer').textContent = "00:00:00";
document.querySelector('.startStopBtn').innerHTML =
    `<i class="fa-solid fa-play"></i>`;

  // reset state
timerstatus = "stopped";
})


