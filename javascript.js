
init();

function init (){
    var button = document.getElementById("botonCalcular");
    button.addEventListener( "click", operacion );
    
}


function operacion(){
    var num1 = +document.getElementById("primerNumero").value;
    var num2 = +document.getElementById("segonNumero").value;
    var op = document.getElementById("operador").value;
    var resultat = calcular(num1, num2, op);

    mostrarResultado(resultat);
}


function calcular(num1, num2, op){
       switch(op){
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;
        
        case "*":
            return num1 * num2;
        
        case "/":
            return num1 / num2;
        
           default:
               return "";
    }
}

function mostrarResultado(resultat){
    
    document.getElementById("resultat").innerHTML ="Resultat: "+ resultat;
    
    if (resultat < 0 )
        document.getElementById("resultat").style.color = "RGB(255,0,0)";
    else if (resultat > 0)
        document.getElementById("resultat").style.color = "RGB(0,255,0)";
    else
        document.getElementById(resultat).style.color = "RGB(65,65,65)";
}