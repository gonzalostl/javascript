/*

### Examen de JavaScript

#### Ejercicio 1: Manejo de Errores en JavaScript (10 puntos)
Escribe una función `dividirNumeros` que tome dos números como parámetros y los divida. Sin embargo, esta función debe manejar cualquier error que pueda ocurrir durante la división y mostrar un mensaje de error adecuado.
*/

function dividirNumeros(a, b) {
  // Completa el código aquí
}

// Ejemplos de uso:
console.log(dividirNumeros(10, 2)); // Debería mostrar 5
console.log(dividirNumeros(10, 0)); // Debería mostrar "Error: No se puede dividir por cero"

/*
  #### Ejercicio 2: Dibujar Señal de Tráfico con Canvas (15 puntos)
  Utiliza la API Canvas para dibujar una señal de tráfico simple. La señal debe tener un círculo rojo en el centro y tres líneas verticales blancas que lo atraviesan.
  
  #### Ejercicio 3: Asincronía y Sincronía (15 puntos)
  Escribe una función `procesarDatos` que simule procesar datos de forma asíncrona. La función debe tomar un número como parámetro y devolver una promesa que se resuelva después de 2 segundos. Dentro de la promesa, imprime el número recibido y luego resuélvela con el doble de ese número.
  
  Luego, escribe un código para usar esta función, imprimir el resultado y mostrar que JavaScript sigue ejecutando otras tareas mientras espera la resolución de la promesa.
  
  #### Ejercicio 4: AJAX con Fetch (20 puntos)
  Utiliza la función `fetch` para obtener información de una API pública. Realiza una solicitud GET a la siguiente URL: `https://jsonplaceholder.typicode.com/todos/1`. Luego, imprime en la consola el título del objeto JSON obtenido.
  
  ---
  
  ### Instrucciones Generales:
  - Cada ejercicio debe ir claramente separado con comentarios.
  - Se valorará la claridad del código, el manejo de errores, el uso adecuado de la API Canvas, la correcta implementación de la asincronía y la utilización apropiada de `fetch` para AJAX.
  - Puedes agregar funciones adicionales si lo consideras necesario para completar los ejercicios.
  - El examen tiene un total de 60 puntos.
  
  ¡Buena suerte!
  
  ---
  
  #### Solución:*/

// Ejercicio 1: Manejo de Errores en JavaScript (10 puntos)
function dividirNumeros(a, b) {
  try {
    if (b === 0) {
      throw new Error("Error: No se puede dividir por cero");
    }
    return a / b;
  } catch (error) {
    return error.message;
  }
}

console.log(dividirNumeros(10, 2)); // Debería mostrar 5
console.log(dividirNumeros(10, 0)); // Debería mostrar "Error: No se puede dividir por cero"

// Ejercicio 2: Dibujar Señal de Tráfico con Canvas (15 puntos)
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(150, 200);
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(120, 150);
ctx.lineTo(180, 150);
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(135, 135);
ctx.lineTo(165, 165);
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(135, 165);
ctx.lineTo(165, 135);
ctx.strokeStyle = "white";
ctx.stroke();

// Ejercicio 3: Asincronía y Sincronía (15 puntos)
function procesarDatos(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Número recibido:", numero);
      resolve(numero * 2);
    }, 2000);
  });
}

console.log("Inicio del programa");
procesarDatos(5).then((resultado) => {
  console.log("Resultado:", resultado);
});
console.log("Fin del programa");

// Ejercicio 4: AJAX con Fetch (20 puntos)
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log("Título:", data.title))
  .catch((error) => console.error("Error al obtener datos:", error));

// Ejercicio 3: Asincronía y Sincronía (15 puntos)
function procesarDatos(numero) {
  return new Promise((resolve, reject) => {
    console.log("Inicio del procesamiento de datos...");
    setTimeout(() => {
      console.log("Número recibido:", numero);
      const resultado = numero * 2;
      console.log("Procesamiento completado. El resultado es:", resultado);
      resolve(resultado);
    }, 2000);
  });
}

console.log("Inicio del programa");

// Llamada a la función procesarDatos
procesarDatos(5)
  .then((resultado) => {
    console.log("El resultado final es:", resultado);
    console.log("Fin del programa");
  })
  .catch((error) => {
    console.error("Ocurrió un error durante el procesamiento:", error);
  });

console.log("Fin del código principal, continuando con otras tareas...");

// Ejercicio 4: AJAX con Fetch (20 puntos)
function obtenerDatos() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo obtener los datos");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Datos obtenidos:");
      console.log("ID:", data.id);
      console.log("Título:", data.title);
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
}

console.log("Inicio del programa");

// Llamada a la función para obtener los datos
obtenerDatos();

console.log("Fin del programa");
