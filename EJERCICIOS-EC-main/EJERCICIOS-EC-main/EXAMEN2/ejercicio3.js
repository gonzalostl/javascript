//creo la funcion anonima
const invertida = function (texto) {
  let reversa = "";
  //creamos la frase al reves con un for recorriendo la cadena al reves y guardándola
  for (i = texto.length; i >= 0; i--) {
    reversa = reversa + texto.substring(i, i + 1);
  }
  document.write(reversa);
};

invertida("almadraba");
