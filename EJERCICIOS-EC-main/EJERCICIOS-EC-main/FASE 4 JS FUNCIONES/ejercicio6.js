//creamos el array
var array = [29,5,46,12,24,30];
let alto = array[0];
//creamos un bucle para que vaya comparando los numeros y vaya guardando el mas alto
for(i=1; i< array.length; i++){

    if(alto < array[i]){
        alto = array[i];
    }
}
//sacamos por pantalla el numero más alto
document.write(alto);
