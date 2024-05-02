// Define uma função chamada inverterString que aceita uma string como argumento
function inverterString(s) { 
    // Usa o método split('') para dividir a string em um array de caracteres
    return s.split('')         //Isso é feito para que possamos manipular a string como um array
        // Usa o método reverse() para inverter a ordem dos elementos do array
        .reverse() // Isso efetivamente inverte a string
        .join('');             // Usa o método join('') para juntar os elementos do array de volta em uma string
}       


let UmaString = 'lol';

console.log(inverterString(UmaString));   