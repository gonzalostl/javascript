/*En este ejercicio haremos una version del ahorcado de un unico jugador.De forma que tendra que adivinar
la palabra que se ha elegido de forma aleatoria de un array inicial.

Ademas, dispondrá de una zona donde clicar las diferentes letras(o que las introduzca),una 
lista con letras fallidas, la palabra con los huecos y letras adivinadas, y un boton de ayuda que dará la letra
mas repetida en la palabra(aunque esta reste dos intentos). Por otro lado el usuario podra resetear la partida
y almacenará una cookie con si ha ganado o no.
Y será notificado mediante un mensaje si ha ganado o ha perdido.
funciones:
- deberas rellenar un array con 10 palabras que el usuario inserte por teclado.
- se seleccionara de forma aleatoria una de dichas palabras y tendras que pintar en la pagina web de la 
forma que creas la forma en la que representar las letras
- Contador de intentos restantes; partimos con cinco intentos para adivinarlos. Se debe mostrar
el contador de intentos restantes y ademas se os proporciona en la tarea imagenes para representar el ahorcado.
-zona donde se puede hacer click para seleccionar dicha letra.
-si la letra seleccionada la tiene la palabra, se mostrará en la palabra oculta. Si no se le resta el intento
y se inserta en la lista de fallidas
-debe haber un boton de AYUDA con el doble clic nos dará como pista la letra mas repetida de la palabra, aunque restará dos intentos
- Lista de letras fallidas, mostradas en la pagina web
-Debe haber un boton para COMPROBAR palabra el cuál va a tomar la palabra introducida por el usuario en campo
y si es correcta el jugador ha ganado finalizando el juego, si es incorrecta pero tiene intentos puede seguir jugando.
-si el usuario pulsa "f" el juego se reinicia, seleccionando otra palabra nueva
-si el jugador gana o pierde debes dejarlo en la web con un mensaje de enhorabuena o de ánimo para la siguiente
-crea una cookie que expire a los 8 minutos con si el usuario ha ganado o perdido
*/

document.addEventListener("DOMContentLoaded", function () {
  let intentosRestantes = 5;
  let letrasAdivinadas = Array(palabraSeleccionada.length).fill("_");
  let letrasFallidas = [];
  let palabraCompletada = false;
  let palabras = [];

  for (let i = 0; i < 10; i++) {
    let palabra = prompt("Introduce una palabra");

    if (palabra.length == 0) {
      alert("Introduza una palabra porfavor.");
    }
  }

  console.log(palabras);

  let aleatorio = Math.floor(Math.random() * palabras.length);
  let palabraSeleccionada = palabras[aleatorio];

  document.write(palabraAleatoria);

  function actualizarElementos() {
    document.getElementById("letras-adivinadas").textContent = letrasAdivinadas.join(" ");
    document.getElementById("intentos").textContent = `Intentos restantes: ${intentosRestantes}`;
    document.getElementById("letras").textContent = "Letras fallidas: " + letrasFallidas.join(", ");
  }

  function comprobarLetra(letra) {
    if (palabraSeleccionada.includes(letra)) {
      for (let i = 0; i < palabraSeleccionada.length; i++) {
        if (palabraSeleccionada[i] === letra) {
          letrasAdivinadas[i] = letra;
        }
      }
    } else {
      letrasFallidas.push(letra);
      intentosRestantes--;
    }
  }

  function comprobarPalabra() {
    if (letrasAdivinadas.join("") === palabraSeleccionada) {
      palabraCompletada = true;
    }
  }

  document.getElementById("letras").addEventListener("click", function (event) {
    if (event.target.tagName === "") {
      let letra = event.target.textContent.toLowerCase();
      if (!letrasFallidas.includes(letra) && !letrasAdivinadas.includes(letra)) {
        comprobarLetra(letra);
        comprobarPalabra();
        actualizarElementos();
      }
    }
  });

  document.getElementById("AYUDA").addEventListener("dblclick", function () {
    let letrasRepetidas = palabraSeleccionada.split("").reduce((arr, letra) => {
      arr[letra] = (arr[letra] || 0) + 1;
      return arr;
    }, {});

    let letraMasRepetida = Object.keys(letrasRepetidas).reduce((a, b) =>
      letrasRepetidas[a] > letrasRepetidas[b] ? a : b
    );

    if (
      !letrasFallidas.includes(letraMasRepetida) &&
      !letrasAdivinadas.includes(letraMasRepetida)
    ) {
      comprobarLetra(letraMasRepetida);
      comprobarPalabra();
      actualizarElementos();
    }

    intentosRestantes -= 2;
  });

  document.getElementById("COMPROBAR").addEventListener("click", function () {
    let palabraUsuario = prompt("Introduce la palabra:");
    if (palabraUsuario && palabraUsuario.toLowerCase() === palabraSeleccionada) {
      palabraCompletada = true;
    } else {
      intentosRestantes = 0;
    }

    actualizarElementos();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key == "f") {
      location.reload();
    }
  });

  function juagarJuego() {
    actualizarElementos();

    let bucleJuego = setInterval(function () {
      if (intentosRestantes === 0) {
        document.getElementById("mensaje").textContent = "¡Has perdido! Vuelve a intentarlo.";
        clearInterval(bucleJuego);
        guardarCookie(false);
      } else if (palabraCompletada) {
        document.getElementById("mensaje").textContent = "¡Has ganado!";
        clearInterval(bucleJuego);
        guardarCookie(true);
      }
    }, 100);
  }

  function guardarCookie(ganado) {
    const date = new Date();
    date.setTime(date.getTime() + 8 * 60 * 1000);
    document.cookie = `ahorcado=${ganado};Expira=${date.toUTCString()};path=/`;
  }

  window.onload = juagarJuego;
});
