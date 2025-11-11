let num1 = 0;
let num2 = 0;

function mostrarDisplay(valor){

    let elemento = document.getElementById('display');

    elemento.innerText = elemento.innerText + valor;
}

function clearDisplay(){
    let elemento = document.getElementById('display');
    elemento.innerText = "";
}

function calcularResultado(){
    let display = document.getElementById('display');
    let expresion = display.innerText.replace(/\s+/g, '');

    try{

        if(/^[0-9+\-*/%.()]+$/.test(expresion)){
            let resultado = Function('"Use strict"; return ('+ expresion + ')')();
            display.innerText = resultado;
        }else{
             display.innerText = "Error";
            setTimeout(()=>{
                display.innerText = "";
            },1000)
        }
    }
    catch (error){
         display.innerText = "Error";
            setTimeout(()=>{
                display.innerText = "";
            },1000)
    }
}

function borrarUltimo(){
    let display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

