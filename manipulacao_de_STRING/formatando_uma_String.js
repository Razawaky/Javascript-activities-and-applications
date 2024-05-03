// Função para formatar uma string para título
function formatarParaTitulo(str) {
    // Divide a string em um array de palavras
    const palavras = str.split(' ');
    
    // Aplica uma função a cada palavra para converter a primeira letra para maiúscula e o restante para minúsculas
    const palavrasFormatadas = palavras.map(palavra => {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    });
    
    // Une as palavras formatadas em uma única string
    return palavrasFormatadas.join(' ');
}

const texto = "Sim, farei lorem ipson dolor sit amet!";
const titulo = formatarParaTitulo(texto);
console.log(titulo); 