{
    const formElement = document.querySelector(".js-form");
    const currencyElement = document.querySelector(".js-currency");
    const amountElement = document.querySelector(".js-amount");
    const resultElement = document.querySelector(".js-result");

    const currencyDolar = 4.21;
    const currencyEuro = 4.64;
    const currencyPeso = 0.00094;


    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const currency = currencyElement.value;
        const amount = +amountElement.value;
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

}