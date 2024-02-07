// Función para verificar que el input por teclado es un número
function es_num(input) {
    // Inicializo un booleano que asume que input es número
    let es_num = true;
    // Inicializo un contador que me recorrerá el input
    let i = 0;
    // Inicializo un contador para la cantidad de puntos que hayan en el input. Se admitirá un máximo de 1.
    let cant_puntos = 0;
    // Bucle que recorre el input mientras el contador se encuentre dentro del mismo y además input sea número
    while (i < input.length && es_num) {
        // Si el caracter actual no es un número
        if (isNaN(input.charAt(i))) {
            // Si no es punto, o la cantidad de puntos ya se encuentra en el límite, es_num = false
            if (input.charAt(i) != "." || cant_puntos == 1) es_num = false;
            // En otro caso, se ha alcanzado el límite de puntos
            else cant_puntos++;
        }
        i++;
    }
    // Devuelvo el booleano
    return es_num;
}

// Función para verificar que el input por teclado es un número entero
function es_int(input) {
    // Inicializo un booleano que asume que input es número
    let es_num = true;
    // Inicializo un contador que me recorrerá el input
    let i = 0;
    // Bucle que recorre el input mientras el contador se encuentre dentro del mismo y además input sea número
    while (i < input.length && es_num) {
        // Si en algún momento el caracter no es un número, es porque: 
        // 1) El input no es número. 
        // 2) El input es un número decimal (no entero)
        // Por tanto es_num = false
        if (isNaN(input.charAt(i))) es_num = false;
        i++;
    }
    // Devuelvo el booleano
    return es_num;
}



// Función para calcular la potencia con la base y exponente recibidos
function potencia(base, exponente) {
    let resultado;
    // Caso base: Si el exponente es 0, el resultado es 1
    if (exponente == 0) resultado = 1;
    // Caso recursivo: Si no, el resultado es igual a: base * potencia(base, exponente - 1)
    else resultado = base * potencia(base, exponente - 1);
    // Devuelvo el resultado
    return resultado;
}

// Pruebo el código

let base = prompt("Introduzca la base cuya potencia desea calcular.");
while (!es_num(base)) {
    base = prompt("ERROR: No se ha introducido un número válido. Por favor, vuelva a intentarlo.\n\nIntroduzca la base cuya potencia desea calcular.");
}
console.log("Base: " + base + ".");

let exponente = prompt("Introduzca el exponente. Tenga en cuenta que debe ser entero.");
while (!es_int(exponente)) {
    exponente = prompt("ERROR: No se ha introducido un número válido. Por favor, vuelva a intentarlo.\n\nIntroduzca el exponente. Tenga en cuenta que debe ser entero.");
}
console.log("Exponente: " + exponente + ".");

let resultado = potencia(base, exponente);
console.log("Resultado: " + resultado + ".");
alert("El resultado de la operación " + base + "^" + exponente + " es: " + resultado + ".");