//creamos el array
var array = [1,5,6,12,24,2];
let multi = 1;
//creamos un bucle para que vaya multiplicando cada numero del array
for(i=0; i< array.length; i++){
    multi = multi * array[i];
}
//sacamos por pantalla el resultado
document.write(multi);