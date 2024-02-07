function eliminarDuplicados(array) {
    //creamos el array que sera el  resultado
    let resultado = [];
    //creamos un for para que recorra el array
    for (let i = 0; i < array.length; i++) {
        //si no se encuentra en el array resultado lo añade
        //si lo encuentra no lo añade po lo tanto no habra repetidos
        if (resultado.indexOf(array[i])==-1) {
            resultado.push(array[i]);
        }
    }
    //sacamos el array por pantalla
    document.write(resultado);
}
eliminarDuplicados([2,3,4,5,6,7,8,2,5,4,5,6,7,4,5,6,7]);