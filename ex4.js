let num = parseInt(prompt("Digitar numero now: "));
let soma = 0; 

for (let c = 1; c <= num; c++) {
  soma += c;
}

console.log("A soma dos numeros de 1 até " + num + " é: " + soma);