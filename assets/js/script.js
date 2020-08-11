function validar() {
    // var nombre, apellidos, correo, usuario, clave, telefono;
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("pass").value;
    var telefono = document.getElementById("telefono").value;
    
    // VALIDACIONES:

    // validación nombre

    if (typeof nombre != 'string' || nombre === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    }

    // validación apellidos

    if (apellidos === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (apellidos.length > 80) {
        alert("Los apellidos son muy largos");
        return false;
    }

    // validación correo electrónico

    if (correo === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (correo.length > 100) {
        alert("El correo electrónico es muy largo");
        return false;
    }

    // validación usuario

    if (usuario === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (usuario.length > 20) {
        alert("El nombre de usuario es muy largo");
        return false;
    }

    // validación clave

    if (clave === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    // validación teléfono

    if (telefono === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (telefono.length > 15) {
        alert("El número de teléfono es muy largo");
        return false;
    }

    // else

    else {
        // llamar la función para ver el @ y el punto;
        // alert("Los datos fueron ingresados correctamente");
        alert("Felicitaciones, acabas de registrarte existosamente. Bienvenid@ " + nombre + " " + apellidos + ". Tu nombre de usuario es " + usuario + ". Y contraseña " + clave);
    } 
}

function notNumber(telefono) {
    if (isNaN(telefono)) {
      return true; // o false?
    }
    alert("Debes ingresar un teléfono válido");
  }
  /*if( isNaN(valor) ) {
    return false;
  } */

function verCorreo(correo) {
    var arroba = correo.indexOf('@');
    //agregar el indexOf del punto tomando la variable arroba + 1
}