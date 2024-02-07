//le pedimos que inserte la cadena y la guardamos
let mensaje = "inserte una cadena";
let cadena  = prompt(mensaje);
//le pdimos que inserte la subcadena y la guardamos
let mensaje2 = "iserte la subcadena";
let subcadena = prompt(mensaje2);
//le pedimos que inserte la posicion
let mensaje3 = "iserte la posición";
let posicion = prompt(mensaje3);

//formamos la clase
let cadenaTotal = cadena.substring(0,posicion)+ subcadena + cadena.substring(posicion);
//la mostramos por pantalla
document.write(cadenaTotal);