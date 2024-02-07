//le pedimos que inserte la cadena
let mensaje = "inserte la cadena";
//guardamos la cadena
let cadena = prompt(mensaje);
//primero pasamos la frase a minúscula
cadena = cadena.toLowerCase();
//Ahora le quitamos los espacios con un for
for (i = 0; i <= cadena.length; i++) {
    if (cadena.substring(i, i + 1) == " ") {
        cadena = cadena.substring(0, i) + cadena.substring(i + 1)
    }
}
//creamos la variable en la que vamos a guardar la frase en reversa
let reversa = "";
//creamos la frase al reves con un for recorriendo la cadena al reves y guardándola
for (i = cadena.length; i >= 0; i--) {
    reversa = reversa + cadena.substring(i, i + 1);
}
//si las frases son iguales lo sacamos por pantalla
if (cadena == reversa) {
    document.write("la frase es un palíndromo");
}
//si no son iguales lo sacamos por pantalla
else {
    document.write("no es un palíndromo");
}