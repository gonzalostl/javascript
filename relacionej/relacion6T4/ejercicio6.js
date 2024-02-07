var matrizcompleta = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function diagonalPrincipal(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (i != j) {
        matriz[i][j] = 0;
      }
    }
  }
  return matriz;
}

var matrizfinal = diagonalPrincipal(matrizcompleta);
console.log(matrizfinal);
