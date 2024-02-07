//primero hacemos que inserte la cadena
let cadena = "Escribe una cadena de texto";
let cadenamen = prompt(cadena);
//le pedimos que inserte el numero de inicio de la cadena
let inserte = "Inserte el numero de caracteres del inicio de la cadena";
let inicio = prompt(inserte);
//le pedimos que inserte el numero del final de la cadena
let inserta = "Inserte el numero de caracteres del final de la cadena";
let final = prompt(inserta);
//sacamos por pantalla lo que nos ha pedido usando el substring
document.write(cadenamen.substring(inicio,final));