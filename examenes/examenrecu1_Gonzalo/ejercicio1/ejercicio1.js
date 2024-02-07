/*Escribe en JavaScript un programa modularizaado con funciones que pida por teclado
un número(debes comprobar que ese número es un entero positivo mayor que 2, y seguir 
pidiendo dicho que sea válido o hasta que el usuario inserte 0 con lo que el programa finaliza).
Según el número n que se el usuario ha insertado por teclado, crearás una matriz de tamaño nxn; 
la cuál irás rellenando con algún número en dos de sus celdas libres(este número no se puede repetir
en más de dos celdas, indica la forma en la que lo evitarías). Comprueba que tienes toda la matriz completa.
En caso de estarlo, pide al usuario que introduzca diferentes posiciones de la matriz para que encuentre una
pareja, si la encuentra (en un máximo de 5 intentos) muestra un mensaje de que "lo ha logrado" y si no lo consigue
muestra un mensaje de "Otra vez será" pintado en el html la matriz completa para que el usuario compruebe donde
estaban las diferentes parejas.*/

// Función para comprobar si el número es un entero positivo mayor que 2
function esNumeroValido(numero) {
  return Number.isInteger(numero) && numero > 2;
}

// Función para pedir un número por teclado y validar
function pedirNumero() {
  let numero;
  do {
    numero = prompt("Introduce un número entero positivo mayor que 2 o introduce 0 para salir:");
    numero = parseInt(numero);

    if (numero === 0) {
      console.log("Programa finalizado.");
      return null;
    }

    if (!esNumeroValido(numero)) {
      console.log("Número no válido. Debe ser un entero positivo mayor que 2. Inténtalo de nuevo.");
    }
  } while (!esNumeroValido(numero));

  return numero;
}

// Función para crear la matriz de tamaño nxn
function inicializarMatriz(n) {
  const matriz = [];
  for (let i = 0; i < n; i++) {
    matriz.push([]);
    for (let j = 0; j < n; j++) {
      matriz[i][j] = 0;
    }
  }
  return matriz;
}

// Función para llenar la matriz con un número en dos celdas que estén libres
function llenarMatriz(matriz, numero) {
  const n = matriz.length;
  const celdasLibres = [];

  // Obtengo las celdas libres
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matriz[i][j] === 0) {
        celdasLibres.push({ fila: i, columna: j });
      }
    }
  }

  // Verifico si hay por lo menos dos celdas libres
  if (celdasLibres.length < 2) {
    console.log("No hay celdas libres para colocar el número.");
    return;
  }

  // Selecciono dos celdas aleatorias y coloco el número
  for (let k = 0; k < 2; k++) {
    const indexAleatorio = Math.floor(Math.random() * celdasLibres.length);
    const celda = celdasLibres.splice(indexAleatorio, 1)[0];
    matriz[celda.fila][celda.columna] = numero;
  }
}
// Función para verificar si la matriz se encuentra completa
function esMatrizCompleta(matriz) {
  const n = matriz.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matriz[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
}

// Función para buscar una pareja en la matriz
function buscarPareja(matriz) {
  const intentosMaximos = 5;
  let intentos = 0;

  while (intentos < intentosMaximos) {
    const fila1 = prompt("Introduce la primera celda (fila):");
    const columna1 = prompt("Introduce la primera celda (columna):");
    const fila2 = prompt("Introduce la segunda celda (fila):");
    const columna2 = prompt("Introduce la segunda celda (columna):");

    const valor1 = matriz[fila1][columna1];
    const valor2 = matriz[fila2][columna2];

    if (valor1 === valor2) {
      console.log("¡Lo has logrado!");
      return;
    } else {
      console.log("Otra vez será. Intento número: " + (intentos + 1));
    }

    intentos++;
  }

  console.log("Has agotado tus intentos.");
}

// Función principal para llamar a las funciones anteriores
function main() {
  let numero, n;
  do {
    n = pedirNumero();

    if (n !== null) {
      console.log("Número ingresado:", n);

      const matriz = inicializarMatriz(n);
      numero = pedirNumero();

      if (numero !== null) {
        console.log("Número ingresado:", numero);
        llenarMatriz(matriz, numero);

        console.log("Matriz final:");
        for (let i = 0; i < n; i++) {
          console.log(matriz[i]);
        }
        if (esMatrizCompleta(matriz)) {
          buscarPareja(matriz);
        } else {
          console.log("La matriz está incompleta.");
        }
      }
    }
  } while (numero !== null);
}

main();
