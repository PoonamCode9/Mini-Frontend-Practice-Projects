const box = document.querySelector(".box");
const btn = document.querySelector(".btn");
const popupBox = document.querySelector(".popup-box");
const x = document.querySelector(".fa-x");


btn.addEventListener("click", () => {
    box.classList.add("active");
    popupBox.classList.remove("active");
});

x.addEventListener("click", () => {
    box.classList.remove("active");
    popupBox.classList.add("active");
});