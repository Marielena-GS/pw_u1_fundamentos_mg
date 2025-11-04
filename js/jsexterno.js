
function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}

function agregarElemento(idelementopadre, html) {
    document.getElementById(idelementopadre).innerHTML += html;
}
function construirH1() {
    return '<h1 id="id_calculadora">Calculador</h1>';
}

function eliminarElemento(idElemento) {
    document.getElementById(idElemento).remove();

}

function ocultarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'none';

}

function mostrarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'block';

}

function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_n_1').value);
    let num2 = parseFloat(document.getElementById('id_n_2').value);

    let resultado = 0;
    let idlabel = "";

    if (tipo === '+') {
        resultado = sumar(num1, num2);
        idlabel = "id_resultadosum";
    }
    else if (tipo === '-') {
        resultado = restar(num1, num2);
        idlabel = "id_resultadores";
    }
    else if (tipo === '*') {
        resultado = multiplicar(num1, num2);
        idlabel = "id_resultadomul";
    }
    else if (tipo === '/') {
        resultado = dividir(num1, num2);
        idlabel = "id_resultadodiv";
    }
    document.getElementById(idlabel).innerText = "Resultado: " + resultado;
}

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num2 !== 0 ? num1 / num2: "Error al Dividir por 0";
}