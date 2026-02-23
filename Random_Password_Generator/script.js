const btn = document.querySelector("button");
const input = document.querySelector("input");
const copyIcon = document.querySelector(".fa-copy");
const alert = document.querySelector(".alert-container");

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]><,./-ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const passLength = 14;
    let password = "";
    
    for(let i=0; i<passLength; i++) {
        const randomNum = Math.floor((Math.random() * chars.length));
        password += chars.substring(randomNum, randomNum +1);
    }
    input.value = password;
    alert.innerText = password + " copied!";
}

function copyPassword() {
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);
}

btn.addEventListener("click", () => {
    createPassword();
});

copyIcon.addEventListener("click", () => {
    copyPassword();
    if(input.value) {
        alert.classList.remove("active");
        setTimeout(() => {
            alert.classList.add("active");
        }, 2000);
    }
});

