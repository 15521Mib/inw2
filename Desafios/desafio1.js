const leia = require("prompt-sync")()




//variaveis

let usuario

let salario

let valorimposto




//exemplos

usuario = leia("Digite o nome do usuario: ")

salario = parseFloat(leia("Digite o valor do salario: "))




if(salario <= 2500){

    console.log(usuario + "Você é desprovido de riqueza ;(")

}

else if(salario > 2500 && salario <= 5000){

    valorimposto = salario * 0.15

    console.log("Ola Sr. "+usuario+" seu imposto é de "+valorimposto)

    console.log("Seu salario líquido é "+(salario-valorimposto))
}
else {
    valorimposto = salario * 0.25
    console.log("ola Sr. "+usuario+" seu imposto atual é de "+valorimposto)
    console.log("Seu salario liquido é "+(salario-valorimposto))
}



//fim do test

console.log("Programa encerrado")