let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
    let date = new Date();
    // Getting hour, min & sec from date
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();

    let hRotation = 30*hr + mn/2;
    let mRotation = 6*mn;
    let sRotation = 6*sc;

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);