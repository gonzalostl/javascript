/* Se pide un programa que pida un número n por teclado y devuelva en la página HTML un patrón de
asteriscos de manera que con n=5:
*****
 ****
  ***
   **
    *
*/

// Pedimos el número por teclado
let n = prompt("Introuzca el número n deseado.");
// Bucle para la escritura de cada línea del patrón
for (let i = 0; i < n; i++) {   // Donde i corresponde al número de línea
    document.write("<p>");
    for (let espacios = 0; espacios < i; espacios++) document.write("\n&nbsp\n");  // Los espacios que se deben escribir corresponden al número de línea, empezando por la línea 0
    for (let j = 0; j < n-i; j++) document.write("*");  // Los asteriscos que se deben escribir corresponden al número n menos el número de línea
    document.write("</p>");
}