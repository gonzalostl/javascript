//le pedimos que inserte la cadena
let mensaje = "Escribe una cadena de texto";
let cadena =prompt(mensaje);
//guardamos las palabras en un array de palabras
let palabras = cadena.split(' ');
//creamos un bucle para que vaya pasando por todas las palabras
//hacemos que cuando pase por una palabra se ponga la primera letra en mayúscula y la 
//sacamos por pantalla
for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let palMayus = palabra[0].toUpperCase() + palabra.substring(1);
    document.write(palMayus + " ");
}
