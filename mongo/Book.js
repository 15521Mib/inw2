const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Book',
{UseNewUrlParser : true, 
useUnifiedTopology: true, 
serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function(){
    console.log("Estamos logados no mongodb");
});

const produtosSchema = new mongoose.Schema({
    descricao : String,
    ano : Number,
    valor : Number,
    estoque : String
})

const produto = mongoose.model("Book", produtosSchema);

const livro = new produto({
    descricao : 'livro legal',
    ano : 10,
    valor : 50,
    estoque : "fora de estoque"
})

console.log(livro.descricao);
console.log(livro.ano);
console.log(livro.valor);
console.log(livro.estoque);

livro.save();