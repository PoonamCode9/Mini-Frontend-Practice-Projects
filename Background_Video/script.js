const btn = document.querySelector(".btn");
const vdo = document.querySelector(".bg-vdo");
const icon = document.querySelector(".fa-solid")
const preloader = document.querySelector(".preloader");

// btn.addEventListener("click", () => {
//     if(btn.classList.contains("pause")) {
//         btn.classList.remove("pause");
//         vdo.play();
//         icon.classList.add("fa-pause");
//         icon.classList.remove("fa-play");
//     } 
//     else {
//         btn.classList.add("pause");
//         vdo.pause();
//         icon.classList.remove("fa-pause");
//         icon.classList.add("fa-play");
//     }
//     // console.log(vdo.paused);
// });


                                            // OR,

// btn.addEventListener("click", () => {
//     if(icon.classList.contains("fa-pause")) {
//         vdo.pause();
//         icon.classList.remove("fa-pause");
//         icon.classList.add("fa-play");
//     }
//     else {
//         vdo.play();
//         icon.classList.remove("fa-play");
//         icon.classList.add("fa-pause");
//     }
// })


//                                      OR, 

btn.addEventListener("click", () => {
    if(vdo.paused) {
        vdo.play();
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
    }
    else {
        vdo.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    }
});

window.addEventListener("load", () => {
    preloader.style.zIndex = "-2";
})