let mensaje1 = "Introduce un numero : ";
let numero = prompt(mensaje1);

function tablaMultiplicar(numero) {
  document.write("Tabla de multiplicar del " + numero + ": ");
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write(" " + numero + "x" + i + "=" + resultado + " ");
  }
}

tablaMultiplicar(numero);
