let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;

let timer = null;
let lapCount = 1;

const display = document.getElementById("display");

function stopwatch() {

    ms++;

    if(ms == 100){
        ms = 0;
        sec++;
    }

    if(sec == 60){
        sec = 0;
        min++;
    }

    if(min == 60){
        min = 0;
        hr++;
    }

    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let milli = ms < 10 ? "0" + ms : ms;

    display.innerHTML = `${h}:${m}:${s}:${milli}`;
}

document.getElementById("start").addEventListener("click", () => {

    if(timer !== null){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch,10);
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(timer);
});

document.getElementById("reset").addEventListener("click", () => {

    clearInterval(timer);

    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;
    lapCount = 1;

    display.innerHTML = "00:00:00:00";

    document.getElementById("lapList").innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {

    let lapTime = display.innerHTML;

    let li = document.createElement("li");

    li.textContent = `Lap ${lapCount}: ${lapTime}`;

    document.getElementById("lapList").appendChild(li);

    lapCount++;
});