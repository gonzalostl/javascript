//creamos la funcion
function tablaMulti(num){
    //creamos una bucle para sacar la tabla
    for (i=0;i<11;i++){
        //sacamos la multiplicacion
        document.write(num+" x "+i+" : ");
        //creamos el resultado
        multiplicacion = num*i;
        //lo sacamos por pantalla
        document.write(multiplicacion+"<br>");
    }
}

tablaMulti(7);