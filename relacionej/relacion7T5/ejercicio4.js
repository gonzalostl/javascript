/*Construye un objeto partiendo de Object y modifícalo al vuelo para modelar una matriz.
Sus propiedades serán nFilas, nColumnas y contenido, y sus métodos inicializarMatriz(valor),
que rellena toda la matriz con el mismo valor, aleatoriaMatriz(), que rellena la matriz con enteros
aleatorios entre 1 y 100, y verMatriz() que la muestre por consola.*/

class Matriz extends Object {
  constructor(nFilas, nColumnas) {
    super();
    this.nFilas = nFilas;
    this.nColumnas = nColumnas;
    this.contenido = new Array(nFilas);
    for (let i = 0; i < nFilas; i++) {
      this.contenido[i] = new Array(nColumnas);
    }
  }

  inicializarMatriz(valor) {
    for (let i = 0; i < this.nFilas; i++) {
      for (let j = 0; j < this.nColumnas; j++) {
        this.contenido[i][j] = valor;
      }
    }
  }

  aleatoriaMatriz() {
    for (let i = 0; i < this.nFilas; i++) {
      for (let j = 0; j < this.nColumnas; j++) {
        this.contenido[i][j] = Math.floor(Math.random() * 100) + 1;
      }
    }
  }

  verMatriz() {
    for (let i = 0; i < this.nFilas; i++) {
      let fila = "";
      for (let j = 0; j < this.nColumnas; j++) {
        fila += this.contenido[i][j] + " ";
      }
      console.log(fila);
    }
  }
}

let miMatriz = new Matriz(3, 3);

// Inicializo la matriz con un valor
miMatriz.inicializarMatriz(7);

// Visualizo la matriz
miMatriz.verMatriz();

// Inicializo la matriz con enteros aleatorios
miMatriz.aleatoriaMatriz();

// Visualizo la matriz por consola
miMatriz.verMatriz();
