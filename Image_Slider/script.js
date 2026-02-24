const leftAngle = document.querySelector(".fa-angles-left");
const rightAngle = document.querySelector(".fa-angles-right");
const imageBox = document.querySelector(".image-box");
const imgs = document.querySelectorAll("img");

let currentImg = 1;

let timeOut;

function updateImg() {
    if(currentImg > imgs.length) {
        currentImg = 1;
    } else if(currentImg < 1) {
        currentImg = imgs.length;
    }
    imageBox.style.transform = `translateX(-${(currentImg-1) * 500}px)`;
    timeOut = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
}

updateImg();

rightAngle.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeOut);
    updateImg();
})


leftAngle.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeOut);
    updateImg();
})
