function calculoIMC() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var result = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.textContent = 'Insira valores válidos!';
        return;
    }

    var imc = weight / (height * height);
    var interpretacao;

    if (imc < 18.5) {
        interpretacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        interpretacao = 'peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        interpretacao = 'Sobrepeso';
    } else {
        interpretacao = 'Obesidade';
    }

    result.textContent = 'Seu IMC é ' + imc.toFixed(2) + ' (' + interpretacao + ')';
}
