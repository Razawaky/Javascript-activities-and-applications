// Função para contar ocorrências de uma palavra em uma string
function contarOcorrencias(str, palavra) {
    // Divide a string em um array de palavras
    const palavras = str.split(' ');
    
    // Filtra as palavras que correspondem à palavra de interesse
    const ocorrencias = palavras.filter(p => p === palavra);
    
    // Retorna o número de ocorrências
    return ocorrencias.length;
}

const texto = "lorem ipsum dolor sit amet! lorem ipsum dolor sit amet!";
const palavra = "lorem";

const quantidade = contarOcorrencias(texto, palavra);
console.log(`A palavra "${palavra}" aparece ${quantidade} vezes no texto.`); 
