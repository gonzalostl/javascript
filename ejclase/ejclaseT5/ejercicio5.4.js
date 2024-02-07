/*crea una clase llamada Trigonometría y encapsula en su interior los métodos relacionados 
con esta área de las matemáticas, de manera que puedas usar los métodos en español:
sin por seno, cos por coseno, tan por tangente, asin por arcoseno, acos por arcoseno y atan por arcotangente. 
Finalmente, instancia un objeto de la clase y utiliza cada método sacando resultados por consola.*/

class Trigonometría {
  constructor() {
    // No se requiere ningún atributo en este ejemplo
  }

  seno(angulo) {
    return Math.sin(angulo);
  }

  coseno(angulo) {
    return Math.cos(angulo);
  }

  tangente(angulo) {
    return Math.tan(angulo);
  }

  arcoseno(valor) {
    return Math.asin(valor);
  }

  arcocoseno(valor) {
    return Math.acos(valor);
  }

  arcotangente(valor) {
    return Math.atan(valor);
  }
}

// Instanciar un objeto de la clase Trigonometría
const trigonometriaCalculadora = new Trigonometría();

// Utilizar cada método y mostrar resultados por consola
const angulo = Math.PI / 4; // Ángulo de 45 grados en radianes

console.log(`Seno(${angulo}): ${trigonometriaCalculadora.seno(angulo)}`);
console.log(`Coseno(${angulo}): ${trigonometriaCalculadora.coseno(angulo)}`);
console.log(`Tangente(${angulo}): ${trigonometriaCalculadora.tangente(angulo)}`);
console.log(`Arcoseno(0.7071): ${trigonometriaCalculadora.arcoseno(0.7071)}`);
console.log(`Arcocoseno(0.7071): ${trigonometriaCalculadora.arcocoseno(0.7071)}`);
console.log(`Arcotangente(1): ${trigonometriaCalculadora.arcotangente(1)}`);
