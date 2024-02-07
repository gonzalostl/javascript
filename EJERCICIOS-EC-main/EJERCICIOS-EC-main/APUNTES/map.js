// 1. Introducción a .map():
const nuevoArray = arrayOriginal.map(function (elemento) {
  // Código de transformación
  return nuevoElemento;
});

// 2. Sintaxis Básica con Arrow Functions:
const nuevoArray = arrayOriginal.map((elemento) => {
  // Código de transformación
  return nuevoElemento;
});

// 3. Ejemplo Simple - Duplicar Cada Elemento:
const numeros = [1, 2, 3, 4];
const duplicados = numeros.map((numero) => numero * 2);
// duplicados = [2, 4, 6, 8]

// 4. Manteniendo la Longitud del Array - .map() vs .forEach():
const numeros = [1, 2, 3, 4];

// Usando .map()
const duplicados = numeros.map((numero) => numero * 2);
// duplicados = [2, 4, 6, 8]

// Usando .forEach()
numeros.forEach((numero, indice, array) => {
  array[indice] = numero * 2;
});
// numeros = [2, 4, 6, 8]

// 5. Transformación de Objetos en un Array:
const personas = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Maria", edad: 25 },
  { nombre: "Pedro", edad: 35 },
];

const edades = personas.map((persona) => persona.edad);
// edades = [30, 25, 35]

// 6. Utilizando .map() para Filtrar Elementos:
const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros
  .map((numero) => {
    if (numero % 2 === 0) {
      return numero;
    } else {
      return null; // o cualquier otro valor que indique filtrado
    }
  })
  .filter((numero) => numero !== null);
// numerosPares = [2, 4]

// 7. Importancia de la Inmutabilidad:
// - .map() devuelve un nuevo array sin modificar el original, manteniendo la inmutabilidad.

// 8. Uso de .map() con Promesas:
// - Se puede usar eficientemente con funciones que devuelven promesas.

// 1. Introducción a .filter():
// - El método .filter() se utiliza en arrays para filtrar elementos según una condición proporcionada.

// 2. Sintaxis Básica:
const nuevoArray = arrayOriginal.filter(function (elemento) {
  // Condición de filtrado
  return condicion;
});

// 3. Uso de Arrow Functions:
const nuevoArray = arrayOriginal.filter((elemento) => {
  // Condición de filtrado
  return condicion;
});

// 4. Ejemplo Simple - Filtrar Números Pares:
const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
// numerosPares = [2, 4]

// 5. Filtrar Elementos Basados en Propiedades de Objetos:
const personas = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Maria", edad: 25 },
  { nombre: "Pedro", edad: 35 },
];

const mayoresDe30 = personas.filter((persona) => persona.edad > 30);
// mayoresDe30 = [{ nombre: 'Juan', edad: 30 }, { nombre: 'Pedro', edad: 35 }]

// 6. Filtrar Elementos Basados en Subcadenas (Strings):
const palabras = ["manzana", "banana", "kiwi", "pera"];
const resultado = palabras.filter((palabra) => palabra.includes("na"));
// resultado = ['banana']

// 7. Filtrar Elementos con .filter() y .map():
const numeros = [1, 2, 3, 4, 5];
const cuadradosDeNumerosPares = numeros
  .filter((numero) => numero % 2 === 0)
  .map((numero) => numero ** 2);
// cuadradosDeNumerosPares = [4, 16]

// 8. Filtrar Elementos Únicos en un Array:
const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5];
const numerosUnicos = [...new Set(numerosRepetidos)];
// numerosUnicos = [1, 2, 3, 4, 5]

// 9. Filtrar Elementos por Longitud de Cadena:
const frutas = ["manzana", "banana", "kiwi", "pera"];
const frutasConCincoLetras = frutas.filter((fruta) => fruta.length === 5);
// frutasConCincoLetras = ['kiwi', 'pera']

// 10. Filtrar Elementos Falsy (valores que se evalúan como false):
const valores = [0, 1, "", "Hola", null, undefined, NaN];
const valoresTruthy = valores.filter(Boolean);
// valoresTruthy = [1, 'Hola']
