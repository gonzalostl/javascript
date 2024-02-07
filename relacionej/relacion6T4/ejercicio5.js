let mensaje = "Introduce tu DNI (solo la parte numérica)";
let dni = prompt(mensaje);

function calcularLetra(numero) {
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

  let resultado = numero % 23;
  document.write("La letra de este dni es " + letras[resultado]);
}

calcularLetra(dni);
