
var array = [5,6,7,8];
function ProductoMatriz(matriz) {
    if (matriz.length === 0) {
      return 0;
    }
    let producto = 1;
    for (let i = 0; i < matriz.length; i++) {
      producto *= matriz[i];
    }
    return producto;
  }
  
  let resultado = ProductoMatriz(array);
  document.write("El producto de esta matriz es: " + resultado);