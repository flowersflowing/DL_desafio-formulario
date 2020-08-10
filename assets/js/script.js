function validar (){
    var nombre, apellidos, correo, usuario, clave, telefono;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("pass").value;
    telefono = document.getElementById("telefono").value;
    
    // VALIDACIONES:

    // validación nombre

    if (nombre === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (nombre.length > 30){
        alert("El nombre es muy largo");
        return false;
    }

    // IMPORTANTE: agregar typeof string

    // validación apellidos

    if (apellidos === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (apellidos.length > 80){
        alert("Los apellidos son muy largos");
        return false;
    }

    // validación correo electrónico

    if (correo === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (correo.length > 100){
        alert("El correo electrónico es muy largo");
        return false;
    }

    // IMPORTANTE: agregar lo del @ y el punto

    // validación usuario

    if (usuario === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (usuario.length > 20){
        alert("El nombre de usuario es muy largo");
        return false;
    }

    // validación clave

    if (clave === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }

    // validación teléfono

    if (telefono === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (telefono.length > 15){
        alert("El número de teléfono es muy largo");
        return false;
    }

    // else

    else {
        // alert("Los datos fueron ingresados correctamente");
        alert("Felicitaciones, acabas de registrarte existosamente. Bienvenid@ " + nombre + " " + apellidos + ". Tu nombre de usuario es " + usuario + ". Y contraseña " + clave);
    } 
}



