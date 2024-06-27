function adivinharNum() {
    var numDigitado = parseInt(document.getElementById('num').value);
    var numAleatorio = Math.floor(Math.random() * 10) + 1;
    var result = document.getElementById('result');
    if (isNaN(numDigitado) || numDigitado < 1 || numDigitado > 10) {
        result.textContent = 'Digite um número válido de 1 a 10!';
        return;
    }
    if (numDigitado === numAleatorio) {
        result.textContent = 'Parabéns! Você acertou o número: ' + numAleatorio + '.';
    } else if (numDigitado < numAleatorio) {
        result.textContent = 'O número é maior que: ' + numDigitado + '.';
    } else {
        result.textContent = 'O número é menor que: ' + numDigitado + '.';
    }
}
