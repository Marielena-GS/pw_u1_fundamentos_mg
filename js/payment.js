function guardar() {
    limpiarMensaje();
    validarCampos();
}

function validarCampos() {
    let cardholder = document.getElementById("id_card_holder").value;
    if(cardholder === "" || cardholder === null){
        mostrarMensaje('Card Holder necesario');
        mostrarAsterisco('id_error_card_holder');
        return;
    }

    let number = document.getElementById("id_number").value;
     
    if(number === "" || number === null){
        mostrarMensaje('Number necesario');
        mostrarAsterisco('id_error_number');
        return;
    }

    let fecha = document.getElementById("exp").value;
     
    if(fecha === "" || fecha === null){
        mostrarMensaje('Fecha necesaria');
        mostrarAsterisco('id_error_fecha');
        return;
    }

    let cvv = document.getElementById("id_cvv").value;
     
    if(cvv === "" || cvv === null){
        mostrarMensaje('CVV necesario');
        mostrarAsterisco('id_error_cvv');
        return;
    }

    mostrarMensaje("Formulario válido ✔");
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
