function ValorMasAlto(matriz) {
    if (matriz.length === 0) {
      return "La matriz está vacía.";
    }
    return Math.max(...matriz);
  }
  
  let array = [20,9,12,63,54];
  let valorMasAlto = ValorMasAlto(array);
  document.write('El valor más alto en este array es :' + valorMasAlto);