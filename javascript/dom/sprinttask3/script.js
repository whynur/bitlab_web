let currencyBuyArray = [
    {name: 'KZT', cursKZT: 1},
    {name: 'USD', cursUSD: 429},
    {name: 'EUR', cursEUR: 507}
];
let currencySellArray = [
    {name: 'KZT', cursKZT: 1},
    {name: 'USD', cursUSD: 431},
    {name: 'EUR', cursEUR: 509}
];
function buy(){
    if(currency.value == "KZT"){
        KZT.value = "  -";
        USD.value = "  " + (parseInt(sum.value) / currencySellArray[1].cursUSD).toFixed(2);
        EUR.value = "  " + (parseInt(sum.value) / currencySellArray[2].cursEUR).toFixed(2);
    }
    if(currency.value == "USD"){
        KZT.value = "  " + (parseInt(sum.value) * currencyBuyArray[1].cursUSD).toFixed(2);
        USD.value = "  -";
        EUR.value = "  " + (parseInt(sum.value) * currencyBuyArray[1].cursUSD / currencySellArray[2].cursEUR).toFixed(2);
    }
    if(currency.value == "EUR"){
        KZT.value = "  " + (parseInt(sum.value) * currencyBuyArray[2].cursEUR).toFixed(2);
        USD.value = "  " + (parseInt(sum.value) * currencyBuyArray[2].cursEUR / currencySellArray[1].cursUSD).toFixed(2);
        EUR.value = "  -";
    }
}
currency.onchange = buy;