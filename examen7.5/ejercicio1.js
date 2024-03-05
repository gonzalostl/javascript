/** En este juego se compite contra la "banca" para obtener una puntuación lo más cercana a 7.5 sin pasarse.
Se utilizan las cartas del 1 al 7 que tienen el valor de la misma carta y las figuras que son 8, 9, 10 tienen el valor de 0.5.
El valor de las cartas numeradas es su propio valor, mientras que el valor de las figuras es de 0.5. 
(Se os pasa la imágenes en un archivo comprimido en la tarea de entrega.)

El jugador saca una carta y decide si quiere arriesgarse a sacar otra o prefiere plantarse. Si el jugador se planta comienza el turno de la
banca , que está obligada a sacar una puntuación mayor o igual que la del jugador. El jugador gana si no se pasa de 7.5 y la banca se pasa.
 
Debe realizar las siguientes funciones:
- Obtener de forma aleatoria, una vez que se obtenga esa carta no vuelva a aparecer en esa jugada.
- El usuario podrá elegir una nueva carta haciendo doble click en el montón de cartas restantes o haciendo click plantarse, la banca jugará
 siempre hasta superar al usuario o hasta pasarse ed 7.5 con las cartas restantes del montón.
- Se debe llevar un contador de ambos.
- Se debe ir añadiendo a sus respectivas lista (mediante el manejo del DOM) las cartas que ha sacado tanto el jugador como la banca.
- Si el usuario presiona la tecla f, la página debe recargarse.
- Se debe notificar quién gana.
- Se debe añadir la medalla al ganador.
- Crea una cookie que registra si ha ganado el jugador o si ha ganado la banca y que expire en 5 minutos.
 */
document.addEventListener("DOMContentLoaded", function () {
  let manoJugador = [];
  let manoBanca = [];

  // Función para generar la carta con la imagen ya preparada.
  function generarCarta(numeroAleatorio2) {
    const cartas = ["Bastos", "Oros", "Copas", "Espadas"];
    let numeroAleatorio1 = Math.floor(Math.random() * 3);

    let carta = `cartas/${numeroAleatorio2}${cartas[numeroAleatorio1]}.jpg`;
    return carta;
  }

  // Función para calcular la puntuación de la mano que se pase por parámetro. Y poner los valores de 0.5 si las cartas son figuras.
  function calcularPuntuacion(mano) {
    let puntuacion = 0;
    for (let i = 0; i < mano.length; i++) {
      if (mano[i] >= 8 && mano[i] <= 10) {
        puntuacion += 0.5;
      } else {
        puntuacion += mano[i];
      }
    }
    return puntuacion;
  }

  // Funcion para saber si ha perdido.
  function haPerdido(puntuacion) {
    return puntuacion > 7.5;
  }

  function manejoDobleClick() {
    if (!haPerdido(calcularPuntuacion(manoJugador))) {
      let imagenCartaJugador = document.createElement("img");
      let numeroAleatorio2 = Math.floor(Math.random() * 10 + 1);
      let cartaJugador = numeroAleatorio2;
      imagenCartaJugador.src = generarCarta(numeroAleatorio2);
      document.getElementById("juegoJugador").appendChild(imagenCartaJugador);
      manoJugador.push(cartaJugador);
      if (haPerdido(calcularPuntuacion(manoJugador))) {
        manejoClickPlantarse();
      }
    }
  }

  // Función para manejar el click de plantarse y además
  function manejoClickPlantarse() {
    while (
      calcularPuntuacion(manoBanca) <= calcularPuntuacion(manoJugador) &&
      !haPerdido(calcularPuntuacion(manoJugador))
    ) {
      let imagenCartaBanca = document.createElement("img");
      let numeroAleatorio2 = Math.floor(Math.random() * 10 + 1);
      let cartaBanca = numeroAleatorio2;
      imagenCartaBanca.src = generarCarta(numeroAleatorio2);
      document.getElementById("juegoBanca").appendChild(imagenCartaBanca);
      manoBanca.push(cartaBanca);
    }
    determinarGanador();
  }

  function determinarGanador() {
    let puntuacionJugador = calcularPuntuacion(manoJugador);
    let puntuacionBanca = calcularPuntuacion(manoBanca);
    console.log(puntuacionJugador);
    console.log(puntuacionBanca);

    if (!haPerdido(puntuacionJugador) && (haPerdido(puntuacionBanca) || puntuacionJugador > puntuacionBanca)) {
      alert("¡El jugador gana!");
    } else {
      alert("¡La banca gana!");
    }

    let ganador =
      !haPerdido(puntuacionJugador) && (haPerdido(puntuacionBanca) || puntuacionJugador > puntuacionBanca)
        ? "jugador"
        : "banca";
    let medalla = document.createElement("img");
    medalla.src = `cartas/medalla.jpg`;
    document.getElementById("medalla").appendChild(medalla);

    // Crear cookie
    crearCookie(ganador, "ganador", 5);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key == "f") {
      location.reload();
    }
  });

  // Asignar event listener al botón de doble click
  if (document.getElementById("pedirCarta")) {
    document.getElementById("pedirCarta").addEventListener("dblclick", manejoDobleClick);
  }

  // Asignar event listener al botón de plantarse
  if (document.getElementById("btnPlantarse")) {
    document.getElementById("btnPlantarse").addEventListener("click", manejoClickPlantarse);
  }

  // Crear cookie
  function crearCookie(nombre, valor, minutos) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + minutos * 60 * 1000);
    let expira = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expira + ";path=/";
  }
});
