const currencyFirst = document.getElementById("currency-first");
const worthFirst = document.getElementById("worth-first");
const currencySecond = document.getElementById("currency-second");
const worthSecond = document.getElementById("worth-second");
const exchangeRate = document.getElementById("exchange-rate");

updateRate();

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/663053d9a6ba1116bb74b8de/latest/${currencyFirst.value}`)
    .then((res) => res.json())
    .then((data) => {
        const rate = data.conversion_rates[currencySecond.value];
        console.log(rate);
        exchangeRate.innerText = `1 ${currencyFirst.value} = ${rate + " " + currencySecond.value}`;
        worthSecond.value = (worthFirst.value * rate).toFixed(2);
    });
}

currencyFirst.addEventListener("change", updateRate);

currencySecond.addEventListener("change", updateRate);

worthFirst.addEventListener("input", updateRate);