function diagonalPrinc(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (i != j) {
        matriz[i][j] = 0;
      }
      document.write(matriz[i][j]);
    }
    document.write("<br>");
  }
}

diagonalPrinc([
  [6, 4, 3],
  [1, 2, 3],
  [5, 8, 9],
]);
