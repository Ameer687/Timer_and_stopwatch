let timerInterval;
let timerSeconds=0;

function startTimer(){
    timerInterval=setInterval(()=>{
        timerSeconds++;
        const hours=Math.floor(timerSeconds/3600);
        const minutes=Math.floor((timerSeconds%3600)/60);
        const seconds=timerSeconds%60;

        document.getElementById("timerDisplay").textContent=formatTime(hours)+':'+formatTime(minutes)+':'+formatTime(seconds);
    },1000);
}

function pauseTimer(){
    clearInterval(timerInterval);
}

function resetTimer(){
    clearInterval(timerInterval);
    timerSeconds=0;

    document.getElementById("timerDisplay").textContent="00:00:00";
}

document.getElementById("startTimer").addEventListener('click',startTimer);
document.getElementById("pauseTimer").addEventListener('click',pauseTimer);
document.getElementById("resetTimer").addEventListener('click',resetTimer);

function formatTime(time){
    return time.toString().padStart(2,"0");
}

//Stopwatch
let stopwatchInterval;
let stopwatchSeconds=0;

function startstopwatch(){
    stopwatchInterval=setInterval(()=>{
        stopwatchSeconds++;
        const hours=Math.floor(stopwatchSeconds/3600);
        const minutes=Math.floor((stopwatchSeconds%3600)/60);
        const seconds=stopwatchSeconds%60;

        document.getElementById("sWatchDisplay").textContent=formatTime(hours)+':'+formatTime(minutes)+':'+formatTime(seconds);
    },1000);
}

function stopstopwatch(){
    clearInterval(stopwatchInterval);
}

function resetstopwatch(){
    clearInterval(stopwatchInterval);
    stopwatchSeconds=0;

    document.getElementById("sWatchDisplay").textContent="00:00:00";
}

document.getElementById("start").addEventListener('click',startstopwatch);
document.getElementById("stop").addEventListener('click',stopstopwatch);
document.getElementById("reset").addEventListener('click',resetstopwatch);

