const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/agenda',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 10000
    }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error :'))

db.once('open', function(){
    console.log("Estamos conectados ao mongoDB")
})

const pessoasSchema = new mongoose.Schema({
    numero : Number,
    nome : String,
    idade : Number,
    email : String
});

const Pessoas = mongoose.model('Pessoas', pessoasSchema)

const epamiondas = new Pessoas({
    numero : 1,
    nome : 'Epaminondas',
    idade : 17,
    email : 'epa@gmail.com'
});

epamiondas.save();


const carla = new Pessoas({
    numero : 2,
    nome : 'Carla',
    idade : 18,
    email : 'carla@gmail.com'
});

carla.save();