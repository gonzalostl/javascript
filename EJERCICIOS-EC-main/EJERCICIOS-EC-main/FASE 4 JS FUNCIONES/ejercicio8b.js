// Definimos la matriz
let matriz = [1, 2, 3, 2, 2, 2, 4, 5, 4, 2, 2, 2];

// creamos la matriz contador
let contador = {};
//creamos la variable de maxima frecuencia
let maxFreq = 0;
//creamos la variable del maximo elemento
let maxElemento;

// creamos un bucle para que vayan pasando los elementos 
for (let i = 0; i < matriz.length; i++) {
    let elemento = matriz[i];
    //el contador de los elementos lo cuenta cada vez que pasa y si no tiene valor le asigna el 0
    contador[elemento] = (contador[elemento] || 0) + 1;
    //si el contador es mas grande que la frecuencia máxima
    //pasa a ser la máxima frecuencia y el elemento a ser el máximo
    if (contador[elemento] > maxFreq) {
        maxFreq = contador[elemento];
        maxElemento = elemento;
    }
}

//lo sacamos por pantalla
document.write("El elemento más frecuente es: ", maxElemento);
