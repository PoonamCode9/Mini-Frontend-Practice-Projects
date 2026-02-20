const container = document.querySelector(".container");

const careers = ["Student", "Coder", "Learner", "Web Developer", "Future Software Engineer", "Engineer"];

let careerIndex = 0;

let characterIndex = 0;


function updateText() {
    characterIndex++;
    container.innerHTML = `<h1>I am ${careers[careerIndex].slice(0,1) === "E" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
    if(characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex === careers.length) {
        careerIndex = 0;
    }
    // setTimeout(updateText, 300);
}

// updateText();


setInterval(updateText, 300);
