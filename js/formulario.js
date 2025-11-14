function guardar() {
    limpiarMensaje();
    validarCampos();
}

function validarCampos() {
    let nombre = document.getElementById("id_nombre").value;

    //no se debe hacer X
    if(nombre === "" || nombre === null){
        //el uso de alert introduce una vulnerabilidad
        //esto es incorrecto
        /*alert('Campo incompleto');*/
        mostrarMensaje('Nombre necesario');
        mostrarAsterisco('id_error_nombre');
        return;
    }

    let apellido = document.getElementById("id_apellido").value;
     
    if(apellido === "" || apellido === null){
        mostrarMensaje('Apellido necesario');
        mostrarAsterisco('id_error_apellido');
        return;
    }

    let fecha = document.getElementById("id_fecha").value;
     
    if(fecha === "" || fecha === null){
        mostrarMensaje('Fecha necesaria');
        mostrarAsterisco('id_error_fecha');
        return;
    }

      let email = document.getElementById("id_email").value;
      
       if(email==="" || email === null){
        mostrarMensaje("Email Necesario");
        mostrarAsterisco('id_error_email');
        return;
       }

      if(!validarEmail(email)){       
        
        mostrarMensaje("Email Incorrecto");
        mostrarAsterisco('id_error_email');
        return;
        }
        
    let password = document.getElementById("id_password").value;
     
    if(password === "" || password === null){
        mostrarMensaje('Password necesaria');
        mostrarAsterisco('id_error_password');
        return;
    }
}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento){
    let asterisco = document.getElementById(idElemento).innerText = '*';
}

function limpiarMensaje() {
  let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = "";
    mensaje.style.display = "none";

    const erroresAsterisco = document.querySelectorAll('.error_asterisco');
    erroresAsterisco.forEach(e => e.innerText = '');
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}

