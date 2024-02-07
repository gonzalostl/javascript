//creamos la funcion
function letraDNI(num) {
  //guardamos el array con las letras
  var letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];
  //calcula el resto
  let resto = num % 23;
  //lo compara con la letra y si es correcto lo saca por pantalla

  document.write("La letra del dni es " + letras[resto]);
}
letraDNI(45381705);
