const leia = require("prompt-sync")()

let nome
let AnoDeNascimento
let idade = 2023 - AnoDeNascimento

nome = leia("coloque o seu nome: ")
AnoDeNascimento = parseFloat(leia("Digite o seu ano de nascimento: "))
idade = 2023 - AnoDeNascimento

if(idade < 3){
    console.log(" não antedemos, faixas menores que infantil.")
}
else if(idade > 3 && idade <= 13){
    console.log(nome + " faixa infantil.")
}
else if(idade > 13 && idade <= 17){
    console.log(nome + " faixa adolecente.")
}
else if(idade > 17 && idade <= 65){
    console.log(nome + " faixa adulta.")
}
else {
    console.log(" Não atendemos senhores com idade avançada")
}