function validar() {
    // var nombre, apellidos, correo, usuario, clave, telefono, expresion;
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("pass").value;
    var telefono = document.getElementById("telefono").value;
    
    // VALIDACIONES:

    // 1.- validación nombre

    if (typeof nombre != 'string' || nombre === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    }

    // 2.- validación apellidos

    if (apellidos === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (apellidos.length > 80) {
        alert("Los apellidos son muy largos");
        return false;
    }

    // 3.- validación correo electrónico

    if (correo === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    if (verCorreo(correo)) {
        alert("Debes incluir el arroba y punto en el orden correspondiente");
        return false;
    }

    else if (correo.length > 100) {
        alert("El correo electrónico es muy largo");
        return false;
    }

    // 4.- validación usuario

    if (usuario === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (usuario.length > 20) {
        alert("El nombre de usuario es muy largo");
        return false;
    }

    // 5.- validación clave

    if (clave === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    // 6.- validación teléfono

    if (telefono === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    if (notNumber(telefono)) {
        alert("Debes ingresar un teléfono válido");
        return false;
    }

    else if (telefono.length > 15) {
        alert("El número de teléfono es muy largo");
        return false;
    }

    // Else para todos

    else {
        // c) alert("Los datos fueron ingresados correctamente");
        alert("Felicitaciones, acabas de registrarte existosamente. Bienvenid@ " + nombre + " " + apellidos + ". Tu nombre de usuario es " + usuario + ". Y contraseña " + clave); 
    } 
    // se impremen los datos en la consola

    console.log("nombre:", nombre);
    console.log("apellidos:", apellidos);
    console.log("correo:", correo);
    console.log("usuario:", usuario);
    console.log("pass:", clave);
    console.log("telefono:", telefono);
    return false;
}

// otras funciones

function notNumber(num) {
    if (isNaN(num)) {
        return true;    
    }
    else {
        console.log("Caímos adentro del else en notNumer(num)");
    }
}

function verCorreo(mail) {
    var arroba = mail.indexOf('@'); 
    if (arroba >= -1) {
        if (arroba >= (mail.indexOf('.') + 1)){
            return true;
        }
    }
    else { 
        return true;
    }
}