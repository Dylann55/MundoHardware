var firebaseConfig = {
    apiKey: "AIzaSyCS8hTzfEdy5ZPqeFIQ7Qad52XgFlCFT2s",
    authDomain: "calendario-5fa61.firebaseapp.com",
    databaseURL: "https://calendario-5fa61-default-rtdb.firebaseio.com",
    projectId: "calendario-5fa61",
    storageBucket: "calendario-5fa61.appspot.com",
    messagingSenderId: "135063727874",
    appId: "1:135063727874:web:6894dc3a70966149c2dc1b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database()

document.addEventListener('DOMContentLoaded',get(),false)
document.addEventListener('DOMContentLoaded',get2(),false)

function get(){
    var Nombre_Generico=localStorage.getItem("Nombre");
    var user_ref = database.ref('Datos/' + Nombre_Generico);
    user_ref.on('value',function(snapshot){
        var data=snapshot.val()
        document.getElementById("Nombre").innerHTML = data.Nombre;
        document.getElementById("D1").innerHTML = data.D1;
        document.getElementById("D2").innerHTML = data.D2;
        document.getElementById("D3").innerHTML = data.D3;
        document.getElementById("D4").innerHTML = data.D4;
        document.getElementById("D5").innerHTML = data.D5;
        document.getElementById("D6").innerHTML = data.D6;
        document.getElementById("D7").innerHTML = data.D7;
        document.getElementById("D8").innerHTML = data.D8;
        document.getElementById("D9").innerHTML = data.D9;
        document.getElementById("D10").innerHTML = data.D10;
        document.getElementById('Foto').src = snapshot.val().Foto;
    })
}
function get2(){
    var Categoria_Generico=localStorage.getItem("Categoria");
    var user_ref = database.ref('Categorias/' + Categoria_Generico);
    user_ref.on('value',function(snapshot){
        var data2=snapshot.val()
        document.getElementById("1").innerHTML = data2.D1;
        document.getElementById("2").innerHTML = data2.D2;
        document.getElementById("3").innerHTML = data2.D3;
        document.getElementById("4").innerHTML = data2.D4;
        document.getElementById("5").innerHTML = data2.D5;
        document.getElementById("6").innerHTML = data2.D6;
        document.getElementById("7").innerHTML = data2.D7;
        document.getElementById("8").innerHTML = data2.D8;
        document.getElementById("9").innerHTML = data2.D9;
        document.getElementById("10").innerHTML = data2.D10;
    })
}
