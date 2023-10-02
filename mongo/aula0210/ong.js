const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ong', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    serverSelectionTimeoutMS : 20000
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'falha na conexão!!!'))
db.once('open', ()=>{
    console.log('conexão com o banci de dadis realizada com sucesso!!!');
})
const usuariosSchema = new mongoose.Schema({
    email : String,
    senha : String
});
const Usuario = mongoose.model('Usuario', usuariosSchema)
Usuario.insertMany([
    {email : 'Paulo@gmail.com.br', senha : 'PepperStrikes'},
    {email: 'Maria@.hotmail', senha : '15407hot'},
    {email : 'Marcos@gmail.com', senha : '161517Pepperhot'}
])
async function findUsuario(){
    try{
        const Usuario = await Usuario.find({});
        console.log(`Usuario`,Usuario)
    }
    catch(error){
        console.error(`Nenhum Usuario foi encotrado : `, error)
    }
}
findUsuario();