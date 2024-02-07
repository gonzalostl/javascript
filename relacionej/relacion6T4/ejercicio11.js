let mensaje1 = "Introduce un numero : ";
let numero1 = prompt(mensaje1);
let mensaje2 = "Introduce otro numero : ";
let numero2 = prompt(mensaje2);
let mensaje3 = "Introduce otro numero : ";
let numero3 = prompt(mensaje3);
let mensaje4 = "Introduce otro numero : ";
let numero4 = prompt(mensaje4);

function suma() {
  document.write(Number(numero1) + Number(numero2) + Number(numero3) + Number(numero4));
}
function mediaAritmetica() {
  document.write(
    "<br>" + (Number(numero1) + Number(numero2) + Number(numero3) + Number(numero4)) / 4
  );
}
function multiplicacion() {
  document.write("<br>" + numero1 * numero4);
}
function division() {
  document.write("<br>" + numero2 / numero3);
}

suma();
mediaAritmetica();
multiplicacion();
division();
