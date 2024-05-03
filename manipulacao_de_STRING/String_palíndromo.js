// Função para verificar se uma string é um palíndromo
function ehPalindromo(str) {
    // Converte a string para minúsculas e remove espaços e caracteres especiais
    const strNormalizada = str.toLowerCase().replace(/[^a-z]/g, '');
    
    // Cria uma versão invertida da string normalizada
    const strInvertida = strNormalizada.split('').reverse().join('');
    
    // Compara a string normalizada com a sua versão invertida
    return strNormalizada === strInvertida;
}

const palavra = "anilina";
const resultado = ehPalindromo(palavra);
console.log(`A palavra "${palavra}" é um palíndromo? ${resultado}`); 