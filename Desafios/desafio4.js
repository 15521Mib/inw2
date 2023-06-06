const leia = require("prompt-sync")();

let numero
let total = 0

numero = parseInt(leia("Digite um numero de inteiro positivo: "))

for(let x=1; x<=numero; x++){
    if (x%2==1) {
        console.log(x);
        total = (total + x);
    }
}

console.log("A soma total dos números é "+total)