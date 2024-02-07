/*Elabora un programa que permita añadir filas a una tabla HTML*/
function addRow() {
  var table = document.getElementById("tabla");

  var newRow = table.insertRow(1);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);

  var textNode1 = document.createTextNode("Nuevo pais");
  var textNode2 = document.createTextNode("Nueva ciudad");

  cell1.appendChild(textNode1);
  cell2.appendChild(textNode2);
}
