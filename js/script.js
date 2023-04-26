{
    const formElement = document.querySelector(".js-form");
    const currencyElement = document.querySelector(".js-currency");
    const amountElement = document.querySelector(".js-amount");
    const resultElement = document.querySelector(".js-result");

    const calculateResult = (amount, currency) => {

    const currencyDolar = 4,16;
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

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const currency = currencyElement.value;
        const amount = +amountElement.value;
        
        let result = calculateResult(amount, currency)

        resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    });

}