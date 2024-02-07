//le pedimos al usuario que inserte la cadena
let mensaje = "inserte el argumento";
//guardamos la variable
let cadena = prompt(mensaje);
//creamos un for para que recorra la cadena
let mayuscula = false;
let minuscula = false;
//le quitamos los espacios con un for
for (i = 0; i <= cadena.length; i++) {
    if (cadena[i] == " ") {
        cadena = cadena.substring(0, i) + cadena.substring(i + 1)
    }
}
//recorremos todas las letras y comprobamos y hay alguna mayuscula o minuscula
for (i=0; i<cadena.length;i++){
    if (cadena[i] == cadena[i].toUpperCase() ) {
        mayuscula = true;
    }
    if (cadena[i]== cadena[i].toLowerCase() ) {
        minuscula = true;
    }
}
//segun lo que hayamos obtenindo sacamos un mensaje por pantalla
if(mayuscula&&minuscula){
    document.write("El argumento tiene mayúsculas y minúsculas");
}
else if(mayuscula){
    document.write("El argumento tiene mayúsculas");
}
else{
    document.write("El argumento tiene minusculas");
}
