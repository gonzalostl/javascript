// Función para construir la cadena invertida de otra cadena recibida
const invertida = function(str) {
    // Inicializo la cadena invertida como vacía
    let str_inv = "";
    // Recorro la cadena recibida desde el final hacia el principio, escribiendo caracter por caracter en la invertida
    for (let i = str.length - 1; i >= 0; i--) {
        str_inv += str.charAt(i);
    }
    // Devuelvo la cadena invertida
    return str_inv;
}

let str = prompt("Introduzca la cadena a invertir.");
console.log("Cadena: " + str + ".");

let str_inv = invertida(str);
console.log("Cadena invertida: " + str_inv + ".");
alert("La cadena " + str + " invertida es: " + str_inv + ".");