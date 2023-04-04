const button = document.getElementById("button-convert")
const select = document.getElementById("currency-name")

const convertValue = async () => {
    const inputReais = document.getElementById("input-real").value
    const valueText = document.getElementById("value-text")
    const resultCurrent = document.getElementById("value-text-current")

    const money = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = money.USDBRL.high
    const euro = money.EURBRL.high
    const Bitcoin = ( money.BTCBRL.high)

    valueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais);

    if (select.value === 'UR$ Dólar Americano') {
        resultCurrent.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }
    if (select.value === '€ Euro')
        resultCurrent.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)

    if (select.value === '₿ Bitcoin') 
        resultCurrent.innerHTML = new Intl.NumberFormat("bt-BT", {
            style: "currency",
            currency:"BTC",
        }).format(inputReais / Bitcoin)
    }



changeCurrency = () => {
    const currencyName = document.getElementById("currency-text-value")
    const currencyImg = document.getElementById("currency-img")


    if (select.value === '€ Euro') {
        currencyImg.src = "./assets/euro.png"
        currencyName.innerHTML = "Euro"
    }

    if (select.value === 'UR$ Dólar Americano') {
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "₿ Bitcoin"
        currencyImg.src = "./assets/Biticoin.png"
    } convertValue()

}


button.addEventListener("click", convertValue)
select.addEventListener("change", changeCurrency)
