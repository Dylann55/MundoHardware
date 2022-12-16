
function registrar() {
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;
    //El codigo por defecto
    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
        .then((userCredential) => {
            // Signed in
            Verificar();
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // ..
        });
    console.log(email);
    console.log(contrasena);

}
function Ingreso() {
    var email2 = document.getElementById('email2').value;
    var contrasena2 = document.getElementById('contrasena2').value;
    //El codigo por defecto
    firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });

}
function Observador() {
    //El codigo por defecto
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            Aparece(user);
            console.log('Existe Usuario Activo');
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
          console.log(user.emailVerified);
          // ...
        } else {
            console.log('No existe Usuario Activo');
          // User is signed out
          // ...
        }
      });
}
Observador();
function Aparece(user){
    var user=user;
    var contenido = document.getElementById('contenido')
    //si el gmail esta verificado entra y aparecera el boton cerrar sesion
    if(user.emailVerified){
        contenido.innerHTML = `
        <button onclick="Cerrar()">Cerrar Sesion</button>
        `;
    }
}
function Cerrar(){
    //Solo Cierra la sesion
    firebase.auth().signOut()
    .then(function(){
        console.log('Saliendo...');
    })
    .catch(function(error){
        console.log(error);
    })
    
}
function Verificar(){
    //El codigo por defecto
    firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    // Email verification sent!
    // ...
    console.log('Enviando Correo...')
  });
}