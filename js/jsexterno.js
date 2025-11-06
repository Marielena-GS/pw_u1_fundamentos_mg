
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

function fundamentosJS(){
    /**Tipos de variables*/
    var nombre = "Edison"; //antigua, ya es considerada obsoleta

    let apellido = "Cayambe"; //variables cambiantes

    let apellido2 = 15;

    apellido2 = "Teran";

    let arreglo = [1, 2, 3, 4, 5, 6];

    let diaSemana = ['Lunes', 'Martes', '....'];

    const IVA = 12.8;

    console.log('Fundamentos de JS');
    console.log(nombre);
    console.log(IVA);
    console.log(arreglo);

    //Arreglos
    const arreglosDiasSemana = ['Lunes', 'Martes', 'Miércoles'];
    arreglosDiasSemana.push('Jueves');
    console.log(arreglosDiasSemana);

    arreglosDiasSemana.unshift('Días');
    console.log(arreglosDiasSemana);

    console.log(arreglosDiasSemana[0]);

    console.log('Manejo de nulos, undefined y vacío');

    arreglosDiasSemana.push(null);
    arreglosDiasSemana.push('');
    console.log(arreglosDiasSemana[5]);
    console.log(arreglosDiasSemana[6]);
    console.log(arreglosDiasSemana[7]);

    const numerosPares = [2,4,6,8];
    const numerosImpares = [1,3,5,7,9];

    const numerosTotales = numerosImpares.concat(numerosPares);
    console.log(numerosTotales);

    /*Sentencias de control */

    let edad = 19;
    if(edad >= 18){
        console.log('Es mayor de edad');

    }else{
        console.log('Es menor de Edad');
    }

    let dia = 'Lunes';

    switch(dia){

        case 'Lunes':
            console.log('Es Lunes');
            break;

        case 'Martes':
            console.log('Es Martes');
            break;

        default:
                console.log('No es ninguno de esos días');
    }

    for(let i = 0; i<= 5; i++){
        console.log(i);
    }

    const frutas = ['manzana', 'sandía', 'papaya', 'naranja'];

    for(let fruta of frutas){
        console.log(fruta);
    }
    
    /*Manejo de objetos*/

    const profesor = { 
        nombre: 'Edison', 
        apellido: 'Cayambe',
        edad: 36,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }

    console.log(profesor);

}