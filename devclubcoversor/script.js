const convertbutton = document.querySelector(".convert-button")
const moedaselecionada = document.querySelector(".opçãoselecionada")
const currencyselector = document.querySelector(".currency")


function convertvalues() {
    const inputcurrencyvalue = document.querySelector(".input-values").value
    const valoraconverter = document.querySelector(".valor-a-coverter")
    const valoraconvertido = document.querySelector(".valor")

    console.log(moedaselecionada.value)
    console.log(currencyselector.value)

    const dolartoday = 5.2
    const eurotoday = 6.2
    const pesotoday = 0.0037
    const bitcointoday = 371.086
    const francotoday = 6.74




    const convertedvalue = inputcurrencyvalue / dolartoday

    if (moedaselecionada.value == "real") {
        valoraconvertido.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "brl"
        }).format(inputcurrencyvalue)


    }

    if (moedaselecionada.value == "dolar") {
        valoraconvertido.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "usd"
        }).format(inputcurrencyvalue / dolartoday)


    }

    if (moedaselecionada.value == "Euro") {
        valoraconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "eur"
        }).format(inputcurrencyvalue / eurotoday)
    }

    if (moedaselecionada.value == "peso") {
        valoraconvertido.innerHTML = new Intl.NumberFormat("es-ar", {
            style: "currency",
            currency: "ars"
        }).format(inputcurrencyvalue / pesotoday)
    }

    if (moedaselecionada.value == "bitcoin") {
        valoraconvertido.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "xbt"
        }).format(inputcurrencyvalue / bitcointoday)
    }

    if (moedaselecionada.value == "franco") {
        valoraconvertido.innerHTML = new Intl.NumberFormat("fr-ch", {
            style: "currency",
            currency: "chf"
        }).format(inputcurrencyvalue / francotoday)
    }



    if (currencyselector.value == "real") {
        valoraconverter.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputcurrencyvalue)
    }

    if (currencyselector.value == "dolar") {
        valoraconverter.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "usd"
        }).format(inputcurrencyvalue / dolartoday)
    }

    if (currencyselector.value == "Euro") {
        valoraconverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "eur"
        }).format(inputcurrencyvalue / eurotoday)
    }

    if (currencyselector.value == "peso") {
        valoraconverter.innerHTML = new Intl.NumberFormat("es-ar", {
            style: "currency",
            currency: "ars"
        }).format(inputcurrencyvalue / pesotoday)
    }

    if (currencyselector.value == "bitcoin") {
        valoraconverter.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "xbt"
        }).format(inputcurrencyvalue / bitcointoday)
    }

    if (currencyselector.value == "franco") {
        valoraconverter.innerHTML = new Intl.NumberFormat("fr-ch", {
            style: "currency",
            currency: "chf"
        }).format(inputcurrencyvalue / francotoday)
    }




}

function changecurrency() {
    const currencyreal = document.querySelector(".moeda-real")
    const currencyname = document.getElementById("currency-name")
    const currencyimg = document.querySelector(".dolar")
    const currencyimge = document.querySelector(".real")

    if (moedaselecionada.value == "dolar") {
        currencyname.innerHTML = "Dolar americano"
        currencyimg.src = "./assets/dolar.png"
    }

    if (moedaselecionada.value == "real") {
        currencyname.innerHTML = "Real"
        currencyimg.src = "./assets/real.png"
    }

    if (moedaselecionada.value == "peso") {
        currencyname.innerHTML = "Peso argentino"
        currencyimg.src = "./assets/argentina.jpg"
    }

    if (moedaselecionada.value == "franco") {
        currencyname.innerHTML = "Franco suiço"
        currencyimg.src = "./assets/OIP.webp"
    }

    if (moedaselecionada.value == "bitcoin") {
        currencyname.innerHTML = "Bitcoin"
        currencyimg.src = "./assets/bitcoin.jpg"
    }

    if (moedaselecionada.value == "Euro") {
        currencyname.innerHTML = "Euro"
        currencyimg.src = "./assets/euro.png"
    }

    if (currencyselector.value == "dolar") {
        currencyreal.innerHTML = "dolar americano"
        currencyimge.src = "./assets/dolar.png"
    }

    if (currencyselector.value == "real") {
        currencyreal.innerHTML = "Real"
        currencyimge.src = "./assets/real.png"
    }

    if (currencyselector.value == "peso") {
        currencyreal.innerHTML = "Peso argentino"
        currencyimge.src = "./assets/argentina.jpg"
    }

    if (currencyselector.value == "franco") {
        currencyreal.innerHTML = "Franco suiço"
        currencyimge.src = "./assets/OIP.webp"
    }

    if (currencyselector.value == "bitcoin") {
        currencyreal.innerHTML = "Bitcoin"
        currencyimge.src = "./assets/bitcoin.jpg"
    }

    if (currencyselector.value == "Euro") {
        currencyreal.innerHTML = "Euro"
        currencyimge.src = "./assets/euro.png"
    }


    convertvalues()
}


currencyselector.addEventListener("change", changecurrency)
moedaselecionada.addEventListener("change", changecurrency)
convertbutton.addEventListener("click", convertvalues)