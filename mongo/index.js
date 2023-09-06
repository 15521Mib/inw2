const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/exemplos',
{UseNewUrlParser : true, 
useUnifiedTopology: true, 
serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function(){
    console.log("Estamos logados no mongodb");
});

const pessoaSchema = new mongoose.Schema({
    nome : String,
    idade : Number,
    profissao : String
})

const Pessoa = mongoose.model("pessoa", pessoaSchema);

const marcos = new Pessoa({
    nome : 'Marcos',
    idade : 25,
    profissao : 'Programador'
})

console.log(marcos.nome);
console.log(marcos.idade);
console.log(marcos.profissao);

marcos.save();

const pessoa = mongoose.model("pessoa", pessoaSchema);

const mario = new pessoa({
    nome : 'Mario',
    idade : 30,
    profissao : 'Encanador'
})

console.log(mario.nome);
console.log(mario.idade);
console.log(mario.profissao);

mario.save();