//creamos la funcion
function remueve(array = [], num) {
    //definimos la variable longitud con el numero de numeros del array
    let longitud = array.length;
    //hacemos un bucle para que vaya recorriendo el array excepto el ultimo valor
    for (i = 0; i < longitud - 1; i++) {
        //cuando se encuentra el numero que se desea eliminar lo va desplazando una posición
        //hasta que al final queda ultimo
        if (array[i] == num) {
            let eliminar = array[i];
            array[i] = array[i + 1];
            array[i + 1] = eliminar;
        }

    }
    //si es el ultimo valor
    if (array[longitud - 1] == num) {
        //lo eliminamos
        array.pop();
        //sacamos el array por pantalla
        return array;
    }
    //si no es el ultimo valor significa que el numero no esta en el array
    //por lo tanto sacamos el array que sera igual al original
    else {
        return array;
    }
}
//prueba
document.write(remueve([2, 3, 8, 5, 6, 9], 3));