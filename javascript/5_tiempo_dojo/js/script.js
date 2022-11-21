

function showCity(element) {
    alert(element.innerText);
};

function hideCookies (element) {
    element.parentElement.remove();
}

function getTempValues () {
    var weatherTemps = document.querySelectorAll(".weather-temp")
    console.log(weatherTemps);
}

function celsiusAFarenheit (temperatura) {
    return Math.round(9 / 5 * temperatura + 32);
}

function farenheitACelsius (temperatura) {
    return Math.round(5 / 9 * (temperatura - 32));
}

function cambiarModo (element) {
    for (var i = 1; i < 9; i++) {
        var temperatura = document.querySelector("#temp" + i);
        var temperaturaParseada = parseInt(temperatura.innerText);
        if (element.value == "celsius") {
            temperatura.innerText = farenheitACelsius(temperaturaParseada);
        } else {
            temperatura.innerText = celsiusAFarenheit(temperaturaParseada);
        }
    }
}
