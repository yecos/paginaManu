


function captura(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
    var datos = (nombre , apellido , email , contraseña )
}

//* guardar en local storage */

localStorage.setItem(datos);
   