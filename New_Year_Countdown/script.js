const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2027 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYearTime - now;

    const sec = 1000;
    const min = sec * 60;
    const hr = min * 60;
    const dy = hr * 24;

    const d = Math.floor(gap/dy);
    // console.log(d);
    const h = Math.floor((gap % dy) / hr);
    // console.log(h);
    const m = Math.floor((gap % hr) / min);
    // console.log(m);
    const s = Math.floor((gap % min) / sec);
    // console.log(s);

    day.innerText = d;
    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;

    setTimeout(updateCountdown, 1000);
}

updateCountdown();