function eliminarNoDuplicados(array) {
    //creamos un array de los no duplicados y uno de los duplicados
    let noduplicados = [];
    let duplicados = [];
    //guardamos los no duplicados como en el ejercicio 3
    for (let i = 0; i < array.length; i++) {
        if (noduplicados.indexOf(array[i])==-1) {
            noduplicados.push(array[i]);
        }
        //si no entran en el anterion array quiere decir que estan duplicados 
        //por lo que lo añadimos al array de los duplicados
        else{
            //volvemos a usar esta funcion para que solo nos aparezca una vez cada elemento 
            if (duplicados.indexOf(array[i])==-1) {
                duplicados.push(array[i]);
            }
            
        }
    }
    //lo mostramos por pantalla
    document.write(duplicados);
}
eliminarNoDuplicados([1,2,3,4,5,6,7,8,9,9,9,7,7,2,4,5]);