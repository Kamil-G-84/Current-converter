{
    const calculateResult = (amount, currency) => {
        const currencyDolar = 4.16;
        const currencyEuro = 4.59;
        const currencyPeso = 0.00092;

        switch (currency) {
            case "USD":
                return amount / currencyDolar;

            case "EUR":
                return amount / currencyEuro;

            case "COP":
                return amount / currencyPeso;
        }
    };

    const updateResultText = (amount, currency, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText = (amount, currency, result)
    };

    const init = () => {

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit)

    };

    init();

}