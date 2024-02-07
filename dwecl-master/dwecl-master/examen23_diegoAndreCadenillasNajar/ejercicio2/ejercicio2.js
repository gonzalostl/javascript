/* Se pide utilizar la estructura map para almacenar la información sobre módulos impartidos en
segundo de modulo_buscado en el IES Mar de Cádiz (como mínimo debes incluir 4 módulos).  No están permitdas las
conversiones de tipos de mapas a otras estructuras.
Por ejemplo: ("DWEC", "Desarrollo Web en Entorno Cliente").
Añade la información con posterioridad a la creación de la estructura:
    a. Muestra cuántos módulos hay almacenados.
    b. Muestra contenido de la estructura.
    c. Devuelve las abreviaturas de todos los módulos guardados.
    d. Devuelve el nombre completo de todos los módulos.
    e. Consulta si está el módulo modulo_buscado.
    f. Si está, cambia el nombre completo del módulo añadiendo un 2 al final.
    g. Si está, elimínalo y vuelve a mostrar todos los módulos para comprobar el borrado.
*/

/* Creación del mapa */
let modulos = new Map([
    ["DWECL", "Desarrollo Web en Entorno Cliente"],
    ["DWESE", "Desarrollo Web en Entorno Servidor"],
    ["DIWEB", "Diseño de Interfaces Web"],
    ["DAWEB", "Despliegue de Aplicaciones Web"]
]);

/* Información pedida */
let cadena_respuesta = "a. Muestra cuántos módulos hay almacenados.\n\n";
// Atributo size, devuelve el nñumero de elementos del mapa
cadena_respuesta += "Número de módulos almacenados en el mapa: " + modulos.size + ".";
console.log(cadena_respuesta);

cadena_respuesta = "b. Muestra el contenido de la estructura.\n\n";
cadena_respuesta += "Contenido del mapa de módulos:\n\n";
// Bucle que recorre los elementos del mapa, tener en cuenta que son arrays
for (let [abreviatura, nombre_completo] of modulos) cadena_respuesta += "Abreviatura: " + abreviatura + "; Nombre completo: " + nombre_completo + ".\n";
console.log(cadena_respuesta);

cadena_respuesta = "c. Devuelve las abreviaturas de todos los módulos guardados.\n\n";
cadena_respuesta += "Abreviaturas de los módulos guardados:\n\n";
// keys() devuelve iterativo conteniendo las claves del mapa, en este caso las abreviaturas
for (abreviatura of modulos.keys()) cadena_respuesta += abreviatura + "\n";
console.log(cadena_respuesta);

cadena_respuesta = "d. Devuelve el nombre completo de todos los módulos.\n\n";
cadena_respuesta += "Nombres completos de los módulos guardados:\n\n";
// values() por otro lado devuelve el contenido o valor de las claves
for (nombre_completo of modulos.values()) cadena_respuesta += nombre_completo + "\n";
console.log(cadena_respuesta);

// Creo una variable con el valor del módulo buscado para facilitar pruebas sobre el código
let modulo_buscado = "DAW";
cadena_respuesta = "e. Consulta si está el módulo \"" + modulo_buscado + "\".\n\n";
cadena_respuesta += "¿Existe el módulo " + modulo_buscado + "?\n\n";
// has() devuelve true si existe un elemento con la clave indicada
if (modulos.has(modulo_buscado)) cadena_respuesta += "Si existe el módulo " + modulo_buscado + ".";
else cadena_respuesta += "No existe el módulo " + modulo_buscado + ".";
console.log(cadena_respuesta);

cadena_respuesta = "f. Si está, cambia el nombre completo del módulo añadiendo un 2 al final.\n\n";
// Verifico primero si existe el módulo buscado
if (modulos.has(modulo_buscado)) {
    // Si existe, utilizo el método set() para asignar un valor nuevo a dicha clave, que será el actual (obtenido con get()) concatenado con un 2 al final.
    modulos.set(modulo_buscado, modulos.get(modulo_buscado).concat("2"));   
    cadena_respuesta += "Se ha cambiado correctamente el nombre completo del módulo " + modulo_buscado + ". Ahora es: " + modulos.get(modulo_buscado) + ".";
}
else {
    // Si no existe lo indico por consola
    cadena_respuesta += "No se ha encontrado el módulo " + modulo_buscado + ".";
}
console.log(cadena_respuesta);

cadena_respuesta = "g. Si está, elimínalo y vuelve a mistrar todos los módulos para comprobar el borrado.\n\n";
// delete() busca y elimina el elemento cuya clave sea la indicada. Devuelve true si lo ha encontrado y eliminado, y false si no existe
if (modulos.delete(modulo_buscado)) {
    cadena_respuesta += "Se ha eliminado el módulo " + modulo_buscado + " correctamente. A continuación se muestran los módulos guardados.\n\n"
    // Nuevamente recorro los elementos del mapa en un bucle
    for (let [abreviatura, nombre_completo] of modulos) cadena_respuesta += "Abreviatura: " + abreviatura + "; Nombre completo: " + nombre_completo + ".\n";
}
else cadena_respuesta += "No se ha eliminado el módulo " + modulo_buscado + " dado que no existe.";
console.log(cadena_respuesta);