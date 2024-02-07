function ValorMasAlto(numeros) {
    return Math.max(...numeros);
  }
  
  let array = [20,9,12];
  let valorMasAlto = ValorMasAlto(array);
  document.write('El valor más alto entre estos 3 números es :' + valorMasAlto);