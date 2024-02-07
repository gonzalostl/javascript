//creamos el array
var array = [1,5,6,12,24,2];
let suma = 0;
//creamos un bucle para que vaya sumanndo cada numero del array
for(i=0; i< array.length; i++){
    suma = suma + array[i];
}
//sacamos por pantalla el resultado
document.write(suma);