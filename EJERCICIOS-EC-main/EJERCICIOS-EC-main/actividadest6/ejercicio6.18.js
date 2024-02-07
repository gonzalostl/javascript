function agregarFila() {
  let tabla = document.getElementById("tabla");

  let nuevaFila = tabla.insertRow();
  let celda1 = nuevaFila.insertCell(0);
  let celda2 = nuevaFila.insertCell(1);

  celda1.innerHTML = "nueva fila";
  celda2.innerHTML = "nueva fila";
}
