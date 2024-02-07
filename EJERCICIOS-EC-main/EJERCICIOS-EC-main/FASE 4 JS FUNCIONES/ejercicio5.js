//primero creamos la matriz con sus elementos
let matriz = [1, , 5, 6, 7, 8, 19, 3, 5, 3];
//creamos la cadena
let cadena = "";
//creamos un bucle para que vayan pasando todos los elemstos de la matriz
for (let i in matriz) {
    //cuando van pasando se van añadiendo a la cadena
    cadena = cadena + matriz[i].toString() + " ,";
}
//sacamos por pantalla la cadena
document.write(cadena);


