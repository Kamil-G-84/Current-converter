let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let currencyDolar = 4.21;
let currencyEuro = 4.64;
let currencyPeso = 0.00094;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = +amountElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "USD":
            result = amount / currencyDolar;
            break;
        case "EUR":
            result = amount / currencyEuro;
            break;
        case "COP":
            result = amount / currencyPeso;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
});
