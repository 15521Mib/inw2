var currentUser;

function createLogin(){
    var email = document.getElementById('email').value;
    var password = document.getElementById("password").value;

    firebaseConfig.auth().createUserWithEmailAndPassword(email, password).then(user=>{
        console.log('Usuario', user);
        alert('Usuario criado e feito o loging');
    }).catch(err =>{
        console.log('eroor', err);
    })

}

function loginEmail(){
    var email = document.getElementsById('email').value;
    var passaword = document.getElementById('password').value;

    firebaseConfig.auth().signInWithEmailAndPassword(email, password).then(()=>{
        
        alert('Usuário logado!!!');
    }).catch(err =>{
        console.error('Error', err)
    });

}

currentUser = firebase.auth().currentUser;

function deletaUsuario(){
    if(currentUser){
        currentUser.delete().then(()=>{
            alert('Usuario excluído');
        })
    }
}