//creamos la funcion
function palabra_busqueda (cadena,busqueda){
    //guardamos las palabras
    var palabras = cadena.split(' ');
    var cont = 0;
    //recorrremos las palabras y si la palabra coincide el contador aumenta
    for (let i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        if (palabra == busqueda){
            cont++;
        }
    }
    //sacamos por pantalla
    document.write(busqueda + " se encontró "+ cont + " veces");
}


palabra_busqueda('juan el panca juan  frey juan ', 'juan');
