const btn = document.querySelector("button");
const input = document.querySelector("#birthday");
const result = document.querySelector("#result");


function getAgeDetails(birthDate) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthDate);

    let years = currentDate.getFullYear() - birthdayDate.getFullYear();
    let months = currentDate.getMonth() - birthdayDate.getMonth();
    let days = currentDate.getDate() - birthdayDate.getDate();

    if (days < 0) {
        months--;
        const currentPreviousMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        ).getDate();
        days += currentPreviousMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

btn.addEventListener("click", () => {
    const birthDate = input.value;
    
    if(birthDate === "") {
        alert("Please enter your birth-date");
    } else {
        let age = getAgeDetails(birthDate);

        result.innerText = `You are ${age.years} year${age.years !== 1 ? "s" : ""},
        ${age.months} month${age.months !== 1 ? "s" : ""}, and ${age.days} day${age.days !== 1 ? "s" : ""} old.`;
    }
})