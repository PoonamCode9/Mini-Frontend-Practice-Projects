const imgBox = document.querySelector(".img-box");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    for(let i=0; i<10; i++) {
        const newImg = document.createElement("img");
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;

        imgBox.appendChild(newImg);
    }
});
