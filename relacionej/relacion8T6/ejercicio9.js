/*Elabore un programa que le solicite al usuario el número de filas y columnas, y genere esa tabla
rellena con números aleatorios. Finalmente, el programa debe recorrer la tabla y mostrar en consola
cuántas filas y columnas ha detectado*/

function Tabla(filas, columnas) {
  var tabla = [];

  for (var i = 0; i < filas; i++) {
    var fila = [];
    for (var j = 0; j < columnas; j++) {
      fila.push(Math.floor(Math.random() * 100));
    }
    tabla.push(fila);
  }

  return tabla;
}

var filas = parseInt(prompt("Ingresa un número de filas:"));
var columnas = parseInt(prompt("Ingresa un número de columnas:"));

var miTabla = Tabla(filas, columnas);

console.log("Tabla :");
console.table(miTabla);

document.write("Nº filas: " + miTabla.length + "<br>");
document.write("Nº columnas: " + (miTabla.length > 0 ? miTabla[0].length : 0));
