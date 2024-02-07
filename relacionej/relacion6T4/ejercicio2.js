let mensaje1 = "Escribe un numero: ";
let numero = prompt(mensaje1);

function multiplo10(numero) {
  return numero % 10 == 0;
}

if (multiplo10(numero)) {
  document.write(numero + " es múltiplo de 10");
} else {
  document.write(numero + " no es múltiplo de 10");
}
