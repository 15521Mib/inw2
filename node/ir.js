//fazer uma função arrow que que recebe um valor corresponde ao salario
//função retorna uma informação ao usuário baseado em critérios
//se o valor menor ou igual a 1.500 retorna 0
//se o valor for maior que 1.500 e menor que 2.500 calcular 15% e retorna
//(valor * 0.15)
//se o valor for maior que 2.500 calcular 25% e retornar  (valor * 0.25)
//no casos de intenso a frase - seu salario [valor], e você e ISENTO.
//nos outros casos
//seu salario [valor], o imposto é de [imposto] e seu salario final é
//[valor-imposto]

const salarioImposto = (valor) => {

    if(valor <= 1500){

        return 0;

    } else if(valor > 1500 && valor <= 2500){

        return valor * 0.15;

    } else{

        return valor * 0.25;

    }

}

 

let valor = 2499;

 

if(salarioImposto(valor) == 0){

    console.log(`Seu salario é ${valor}, e você é ISENTO`);

} else{

    console.log(`Seu salario é ${valor}, o imposto é de ${salarioImposto(valor)} e seu salario final é ${valor - salarioImposto(valor)}`)

}
