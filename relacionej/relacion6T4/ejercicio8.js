var matriz1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

var matriz2 = [
  [1, 3, 2, 4],
  [8, 6, 7, 5],
  [9, 11, 10, 12],
  [16, 14, 15, 13],
];

function MatrizFinal(matriz1, matriz2) {
  var matrizFinal = Array.from({ length: 4 }, () => Array(4).fill(0));

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (matriz1[i][j] == matriz2[i][j]) {
        matrizFinal[i][j] = matriz1[i][j];
      }
    }
  }

  return matrizFinal;
}

const matrizFinal = MatrizFinal(matriz1, matriz2);
console.log(matrizFinal);
