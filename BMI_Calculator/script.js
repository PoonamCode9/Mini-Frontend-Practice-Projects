const btn = document.getElementById("btn");
const bmiInput = document.getElementById("bmi-result");
const weightCondition = document.getElementById("weight-condition");

function calculateBMI() {
    const heightVal = document.getElementById("height").value;
    const weightVal = document.getElementById("weight").value;

    const heightInMeter = heightVal / 100;

    const bmiValue = weightVal / (heightInMeter * heightInMeter);

    bmiInput.value = bmiValue.toFixed(2);

    if(bmiValue < 18.5) {
        weightCondition.innerText = "Under weight";
    } else if(bmiValue <= 24.9) {
        weightCondition.innerText = "Normal weight";
    } else if(bmiValue <= 29.9) {
        weightCondition.innerText = "Overweight";
    } else {
        weightCondition.innerText = "Obesity";
    } 
}

btn.addEventListener("click", calculateBMI);