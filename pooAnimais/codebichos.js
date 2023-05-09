
//criação de classe
class Animal{
    constructor(especie,peso,porte,anoNascimento){
        this.especie = especie;
        this.peso = peso;
        this.porte = porte;
        this.anoNascimento = anoNascimento
    }
    fazBarulho(){
        console.log("fazendo barulho....")
    }

    voltaIdade(anoAtual){
        return (anoAtual - this.anoNascimento)
    }
}

class Gato extends Animal{
    constructor(especie,cor,raça){
        super(especie)
        this.cor = cor;
        this.raça = raça
    }
    miar(){
        console.log("miiaaaaaaaauuuuuuuuuuuuuu.....")
    }
} 

    //programa principal
    
    let bicho1 = new Animal("Tigre",200,"grande",2000)
    let bicho2 = new Animal("Galinha",2,"pequeno",2022)
    let bicho3 = new Gato("felino","Preto","persa")

    console.log(bicho1.especie)
    bicho1.fazBarulho()
    console.log(bicho1.voltaIdade(2023))
    console.log(bicho3.especie)
    bicho3.fazBarulho()
    bicho3.miar()
    bicho3.anoNascimento = 2020
    console.log(bicho3.voltaIdade(2023))