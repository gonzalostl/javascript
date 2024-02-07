// Inicializo las constantes del ejercicio
const min_letras_palabra = 6;
const min_palabras = 8;

// Función que verifica si una palabra introducida cumple la condición del ejercicio
function es_valida(palabra) {
    return (palabra.length >= min_letras_palabra);
}

// Función que inicializa el array de palabras que se usará en el juego
function init_array_palabras(num_palabras) {
    // Lo inicializo como array
    let arr_palabras = [];
    // Bucle para pedir por teclado las palabras y meterlas en el array
    for (let i = 0; i < num_palabras; i++) {
        let palabra = prompt("Introduzca la palabra nº " + (i + 1) + "!");
        // Mientras la palabra actual no cumpla la condición del ejercicio, la vuelvo a pedir
        while (!es_valida(palabra)) {
            palabra = prompt("Ups! Esa palabra es inválida. Debe contener al menos " + min_letras_palabra + " letras!");
        }
        console.log("Palabra nº " + (i+1) + ": " + palabra + ".");
        // Agrego la palabra al array de palabras
        arr_palabras.push(palabra);
    }
    // Devuelvo el array de palabras
    return arr_palabras;
}

// Función para comenzar el juego. Las alertas explican bien el procedimiento que se sigue...
function adivina_adivinador() {
    alert("Bienvenido al juego de adivina adivinador!\nEl juego consiste en introducir una serie de palabras, y luego adivinar cuál de ellas te presentamos.");
    alert("Por cierto... Abrir la consola es hacer trampa!!! >:C");

    let num_palabras = prompt("Primero, debes introducir cuántas palabras quieres introducir. Ten en cuenta que deben ser al menos " + min_palabras + "!");
    while (num_palabras < min_palabras) {
        num_palabras = prompt("Ups! El número introducido no es mayor que " + min_palabras + "! Inténtalo de nuevo.");
    }
    console.log("Número de palabras a introducir: " + num_palabras + ".");

    alert("Ahora deberás introducir las palabras. Ten en cuenta que cada palabra deberá tener al menos " + min_letras_palabra + " letras!");
    let arr_palabras = init_array_palabras(num_palabras);

    alert("Muy bien... Todo listo! Ahora eligiremos una palabra al azar, y deberás adivinar cuál es de todas las que has introducido!\nNo te preocupes, si vemos que se te dificulta, te daremos pistas...");
    let palabra_elegida = arr_palabras[Math.floor(Math.random() * num_palabras)]; // Genero un número aleatorio entero entre 0 y num_palabras y elijo la palabra en ese índice del array de palabras
    console.log("Palabra elegida: " + palabra_elegida + ".");
    let pistas = palabra_elegida.charAt(0); // La pista inicia con el primer caracter de la palabra elegida

    alert("Que comience el juego!!");
    let victoria = false; // Si se ha ganado o no
    let i = 0; // Inicializo contador
    // Bucle que se ejecutará mientras no se haya ganado, o el contador que recorre la palabra elegida sea menor que la longitud de la palabra - 1
    while (i < palabra_elegida.length - 1 && !victoria) {
        let intento = prompt("La pista actual es..!\n" + pistas + "\nCuál crees que sea..?");
        console.log("Intento nº " + (i+1) + ": " + intento + ".");
        // Si se ha acertado, se ha ganado
        if (intento == palabra_elegida) victoria = true;
        // Incremento el contador y le añado la siguiente letra a las pistas
        i++;
        pistas += palabra_elegida.charAt(i);
    }
    
    if (victoria) alert("Felicidades, has ganado!");
    else alert("Ups... Se han acabado tus intentos...\nLa palabra correcta era: " + palabra_elegida + ".\nMejor suerte para la próxima..!");
}
// Ejecución de las funciones
adivina_adivinador();