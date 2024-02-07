let mensaje = "inserta la cadena:";

let cadena = prompt(mensaje);

cadena = cadena.toLowerCase();

for (i = 0; i <= cadena.length; i++) {
    if (cadena.substring(i, i + 1) == " ") {
        cadena = cadena.substring(0, i) + cadena.substring(i + 1)
    }
}

let cadena2 = "";

for (i = cadena.length; i >= 0; i--) {
    cadena2 = cadena2 + cadena.substring(i, i + 1);
}

if (cadena == cadena2) {
    document.write("Es un palíndromo");
}

else {
    document.write("No es un palíndromo")
}