function eliminarVocal(vocal) {
  const textoElemento = document.getElementById("texto");
  const texto = textoElemento.textContent;
  const nuevoTexto = texto.replace(new RegExp(vocal, "gi"), "");
  textoElemento.textContent = nuevoTexto;
}
