const btn = document.querySelector(".btn");
const animeBox = document.querySelector(".anime-box");
const animeImg = document.querySelector(".anime-img");
const animeName = document.querySelector(".anime-name");

btn.addEventListener("click", async () => {
    try {
        btn.disabled = true;
        btn.innerText = "Loading...";
        animeName.innerText = "Updating...";
        animeImg.src = "spinner.svg";
        const res = await fetch("https://nekos.best/api/v2/neko");
        const data = await res.json();
        // console.log(data.results[0].artist_name,data.results[0].url);
        btn.disabled = false;
        btn.innerText = "Get Anime";
        animeBox.style.display = "block";
        animeImg.src = data.results[0].url;
        animeName.innerText  = data.results[0].artist_name;
        
    } catch(err) {
        console.log(err);
        btn.disabled = false;
        btn.innerText = "Get Anime";
        animeName.innerText = "An error happened, please try again";
    }
});