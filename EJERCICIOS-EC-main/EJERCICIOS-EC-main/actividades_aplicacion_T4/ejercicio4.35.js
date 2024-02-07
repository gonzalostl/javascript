//creamos la funcion
function dados(num) {
  ganador = 0;
  for (i = 0; i < num; i++) {
    //creamos la tirada de los dados
    dado1 = parseInt(Math.random() * 6 + 1);
    dado2 = parseInt(Math.random() * 6 + 1);
    suma = Number(dado1) + Number(dado2);
    if (ganador < suma) {
      ganador = suma;
    }
  }
  document.write("La tirada ganadora vale: " + ganador);
}

dados(5);
