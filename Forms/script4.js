function convMoeda() {
    var value = parseFloat(document.getElementById('value').value);
    var moeda = document.getElementById('moeda').value;
    var result = document.getElementById('result');
    if (isNaN(value) || value <= 0) {
        result.textContent = 'Por favor, insira um valor válido!';
        return;
    }
    var taxa;
    switch (moeda) {
        case 'real':
            taxa = 5.30;
        case 'euro':
            taxa = 0.89;
            break;
        default:
            taxa = 1;
    }
    var valueConv = value * taxa;
    result.textContent = 'Valor convertido: ' + valueConv.toFixed(2) + ' ' + moeda.toUpperCase();
}
