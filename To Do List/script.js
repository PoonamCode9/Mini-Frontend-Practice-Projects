const addButton = document.querySelector("button");
const input = document.querySelector(".input");
const ul = document.querySelector(".list");

ul.innerHTML = localStorage.getItem("tasks");

addButton.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerHTML = `
            ${input.value}
            <i class="fa-solid fa-square-check"></i>
            <i class="fa-solid fa-trash"></i>
        `;
        ul.appendChild(li);
        input.value = "";
        saveData();
    }
});

// Event Delegation
ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-square-check")) {
        e.target.parentElement.classList.toggle("checked");
        saveData();
    }

    if (e.target.classList.contains("fa-trash")) {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("tasks", ul.innerHTML);
}