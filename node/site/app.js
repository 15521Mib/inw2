const firebaseConfig = {
    apiKey: "AIzaSyCL74oFXvT5JlU_-3Rf6WFD_loq3YYqlB4",
    authDomain: "projeto2mibtes.firebaseapp.com",
    projectId: "projeto2mibtes",
    storageBucket: "projeto2mibtes.appspot.com",
    messagingSenderId: "280344084370",
    appId: "1:280344084370:web:20f45c89157ec3e2ef4b4b"
  };
  
firebase.initializeApp(firebaseConfig);

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
    const email = emailField.value;
    const password = passwordField.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // usuario logado com sucesso
    const user = userCredential.user;
    console.log('Usuário logado:', user);
    })
    .catch((error) => {
      // Tratar erros de autentificação
    const errorMessage = error.message;
    console.error('Erro de autenticação:', errorMessage);
    });
});