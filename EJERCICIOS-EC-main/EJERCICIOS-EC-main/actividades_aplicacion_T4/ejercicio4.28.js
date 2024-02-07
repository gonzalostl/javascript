function matrizIguales(matriz1, matriz2) {
  let matriz3 = [[], [], [], []];
  //recorremos las matrices
  for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1.length; j++) {
      if (matriz1[i][j] != matriz2[i][j]) {
        matriz3[i][j] = 0;
      } else {
        matriz3[i][j] = matriz1[i][j];
      }
      document.write(matriz3[i][j]);
    }
    document.write("<br>");
  }
}

matrizIguales(
  [
    [4, 3, 6, 1],
    [7, 3, 3, 1],
    [6, 5, 5, 2],
    [8, 9, 3, 6],
  ],
  [
    [7, 6, 2, 2],
    [7, 8, 3, 3],
    [6, 7, 5, 4],
    [1, 2, 8, 4],
  ]
);
