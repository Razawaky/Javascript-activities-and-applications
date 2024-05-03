// Função para remover caracteres especiais de uma string
function removerCaracteresEspeciais(str) {
    // Usa uma expressão regular para identificar caracteres especiais e os substitui por uma string vazia
    return str.replace(/[!@#$%^&*(),.?":{}|<>]/g, "");
}

const texto = "*Continuo aqui! @#$%";
const textoSemEspeciais = removerCaracteresEspeciais(texto);
console.log(textoSemEspeciais); 