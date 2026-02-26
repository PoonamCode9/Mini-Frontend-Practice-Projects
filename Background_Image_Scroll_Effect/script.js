const bgImg = document.querySelector(".bg-img");

function updateImage() {
    bgImg.style.opacity = 1 - window.pageYOffset / 800;
    bgImg.style.backgroundSize = 160 - window.pageYOffset / 11 + "%";

    console.log(window.pageYOffset);
}

window.addEventListener("scroll", () => {
    updateImage();
});