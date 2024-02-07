//construyo el objeto partiendo de object
class Matriz extends Object {
  //creo el constructor
  constructor(nFilas, nColumnas) {
    super();
    this._nFilas = nFilas;
    this._nColumnas = nColumnas;
    this.contenido = [];
  }
  //creo los métodos
  inicializarMatriz(valor) {
    for (let i = 0; i < this._nFilas; i++) {
      this.contenido[i] = [];
      for (let j = 0; j < this._nColumnas; j++) {
        this.contenido[i][j] = valor;
      }
    }
    return this.contenido;
  }
  aleatoriaMatriz() {
    for (let i = 0; i < this._nFilas; i++) {
      this.contenido[i] = [];
      for (let j = 0; j < this._nColumnas; j++) {
        this.contenido[i][j] = Math.floor(Math.random() * 100) + 1;
      }
    }
    return this.contenido;
  }
  verMatriz() {
    console.log(this.contenido);
  }
}
//creo el objeto y pruebo los métodos
let matriz1 = new Matriz(3, 3);

console.log(matriz1.inicializarMatriz(3));
console.log(matriz1.aleatoriaMatriz());
matriz1.verMatriz();
