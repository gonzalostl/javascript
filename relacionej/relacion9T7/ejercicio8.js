let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let aciertos = 0;
let temporizador = false;
let timer = 0;
let tiempoRegresivoId = null;

let mostrarAciertos = document.getElementById("aciertos");
let mostrarTiempo = document.getElementById("t-restante");

let numeros = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
  13, 13, 14, 14, 15, 15,
];
numeros = numeros.sort(() => {
  return Math.random() - 0.5;
});

console.log(numeros);

function contarTiempo() {
  intervalo = setInterval(() => {
    timer++;
    mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
    if (aciertos == 15) {
      clearInterval(intervalo);
    }
  }, 1000);
}

function destapar(id) {
  if (temporizador == false) {
    contarTiempo();
    temporizador = true;
  }

  tarjetasDestapadas++;
  console.log(tarjetasDestapadas);

  if (tarjetasDestapadas == 1) {
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.innerHTML = primerResultado;

    tarjeta1.disabled = true;
  } else if (tarjetasDestapadas == 2) {
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = segundoResultado;

    tarjeta2.disabled = true;

    if (primerResultado == segundoResultado) {
      tarjetasDestapadas = 0;

      aciertos++;
      mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

      if (aciertos == 15) {
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos} fin del juego`;
        return;
      }
    } else {
      setTimeout(() => {
        tarjeta1.innerHTML = " ";
        tarjeta2.innerHTML = " ";
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
      }, 1000);
    }
  }
}
