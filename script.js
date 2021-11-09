const pesoValue = document.getElementById("pesoValue");

const alturaValue = document.getElementById("alturaValue");

const sendValue = document.getElementById("sendValue");

sendValue.addEventListener("click", getValues);

let data = {};

function getValues() {
    data.altura = parseFloat(alturaValue.value);

    data.peso = parseInt(pesoValue.value);

    calcImc(data.altura, data.peso);
}

function calcImc(altura, peso) {
    let resultadoImc = peso / Math.pow(altura, 2);

    data.imcNumber = resultadoImc;

    let imc;
    if (resultadoImc < 10) {
        imc = "Desnutriçao Grau 5";

        data.imc = imc;

        attDisplay();
    } else if (resultadoImc < 12.9) {
        imc = "Desnutrição Grau 4";

        data.imc = imc;

        attDisplay();
    } else if (resultadoImc < 15.9) {
        imc = "Desnutrição Grau 3";

        data.imc = imc;

        attDisplay();
    } else if (resultadoImc < 16.9) {
        imc = "Desnutrição Grau 2";

        data.imc = imc;

        attDisplay();
    } else if (resultadoImc < 18.4) {
        imc = "Desnutrição Grau 1";

        data.imc = imc;

        attDisplay();
    } else if (resultadoImc <= 24.9) {
        imc = "Peso Normal";

        data.imc = imc;

        attDisplay();
    } else if (resultadoImc <= 29.9) {
        imc = "Sobrepeso";

        data.imc = imc;

        attDisplay();
    } else if (resultadoImc <= 34.9) {
        imc = "Obesidade Grau 1";

        data.imc = imc;

        attDisplay();
    } else if (resultadoImc <= 39.9) {
        imc = "Obesidade Grau 2";

        data.imc = imc;

        attDisplay();
    } else if (resultadoImc >= 40) {
        imc = "Obesidade Grau 3 ou Morbida";

        data.imc = imc;

        attDisplay();
    }
}

const attImc = document.getElementById("imc");

function attDisplay() {
    attImc.innerHTML = `<p>IMC: ${data.imcNumber.toFixed(2)}, ${data.imc}</p>`;
}
