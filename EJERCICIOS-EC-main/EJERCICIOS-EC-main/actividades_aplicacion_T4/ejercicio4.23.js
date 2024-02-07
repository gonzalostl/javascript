//creamos la funcion
function esBisiesto(anio){
    //si esl año es bisiesto su módulo entre 4 será igual a 0
    if (anio % 4 == 0) {
        document.write(anio+" ES UN AÑO BISIESTO");
    }
    else {
        document.write(anio+" NO es un año bisiesto");
    }
}
esBisiesto(2016);