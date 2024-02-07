let mensaje = "inserta la cadena";
let cadena = prompt(mensaje);

let mayuscula = false;
let minuscula = false;

for (i = 0; i <= cadena.length; i++) {
    if (cadena[i] == " ") {
        cadena = cadena.substring(0, i) + cadena.substring(i + 1)
    }
}
for (i=0; i<cadena.length;i++){
    if (cadena[i] == cadena[i].toUpperCase() ) {
        mayuscula = true;
    }
    if (cadena[i]== cadena[i].toLowerCase() ) {
        minuscula = true;
    }
}
if(mayuscula&&minuscula){
    document.write("La cadena tiene mayúsculas y minúsculas");
}
else if(mayuscula){
    document.write("La cadena tiene mayúsculas");
}
else{
    document.write("La cadena tiene minusculas");
}
