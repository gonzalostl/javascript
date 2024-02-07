/*programa que calcule el resultado de una potencia de forma recursiva. La base y el exponente
(se va a pedir que introduzca el exponente hasta que este sea un número positivo)
los introducira el usuario por teclado

La funcion recursiva potencia recibirá como parámetros la base y el exponente
y tendrá los siguientes casos: 
Caso base:
Si exponente = 0; devuelve 1

Caso recursivo:
En matemáticas podríamos expresar la potenciación de esta manera:
potencia = base * base elevado a (exponente -1)*/

var base = prompt("Introduzca la base: ");
var exponente = prompt("Introduzca el exponente: ");

function potencia(base, exponente) {
  if (exponente == 0) {
    return 1;
  } else {
    return base * potencia(base, exponente - 1);
  }
}
document.write(potencia(base, exponente) + "<br>");

if (exponente <= 0) {
  exponente = prompt("Introduzca un exponente positivo: ");
}
var resultado = potencia(base, exponente);
document.write(base + " elevado a " + exponente + " es: " + resultado);
