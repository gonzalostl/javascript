document.addEventListener("DOMContentLoaded", function () {
  // Variables del juego
  var cartas = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  var jugadorCartas = [];
  var dealerCartas = [];
  var jugadorPuntos = 0;
  var dealerPuntos = 0;

  // Función para actualizar la interfaz de usuario
  function actualizarInterfaz() {
    document.getElementById("cartas-jugador").textContent =
      jugadorCartas.join(", ");
    document.getElementById("puntos-jugador").textContent =
      "Puntos: " + jugadorPuntos;

    document.getElementById("cartas-dealer").textContent =
      dealerCartas.join(", ");
    document.getElementById("puntos-dealer").textContent =
      "Puntos: " + dealerPuntos;
  }

  // Función para iniciar una nueva partida
  function nuevaPartida() {
    jugadorCartas = [];
    dealerCartas = [];
    jugadorPuntos = 0;
    dealerPuntos = 0;

    // Repartir cartas iniciales
    for (let i = 0; i < 2; i++) {
      pedirCarta(jugadorCartas, "puntos-jugador");
      pedirCarta(dealerCartas, "puntos-dealer");
    }

    // Habilitar/deshabilitar botones
    habilitarBotones(false, true, true);
  }

  // Función para pedir una carta
  function pedirCarta(participanteCartas, puntosId) {
    var carta = cartas[Math.floor(Math.random() * cartas.length)];
    participanteCartas.push(carta);

    // Calcular los puntos del participante
    var puntos = calcularPuntos(participanteCartas);

    // Actualizar la interfaz de usuario
    document.getElementById(puntosId).textContent = "Puntos: " + puntos;

    // Verificar si el jugador/dealer supera los 21 puntos
    if (puntos > 21) {
      terminarTurno();
    }
  }

  // Función para calcular los puntos de un participante
  function calcularPuntos(participanteCartas) {
    var puntos = 0;
    var asContador = 0;

    for (let carta of participanteCartas) {
      if (carta === "A") {
        puntos += 11;
        asContador++;
      } else if (carta === "K" || carta === "Q" || carta === "J") {
        puntos += 10;
      } else {
        puntos += parseInt(carta);
      }
    }

    // Ajustar los puntos por los As si es necesario
    while (asContador > 0 && puntos > 21) {
      puntos -= 10;
      asContador--;
    }

    return puntos;
  }

  // Función para terminar el turno
  function terminarTurno() {
    habilitarBotones(true, false, false);

    // Mostrar las cartas del dealer y calcular sus puntos
    while (calcularPuntos(dealerCartas) < 17) {
      pedirCarta(dealerCartas, "puntos-dealer");
    }

    // Determinar el ganador
    if (
      calcularPuntos(jugadorCartas) > 21 ||
      (calcularPuntos(dealerCartas) <= 21 &&
        calcularPuntos(dealerCartas) >= calcularPuntos(jugadorCartas))
    ) {
      alert("¡El dealer gana!");
    } else {
      alert("¡Felicidades, ganaste!");
    }
  }

  // Función para habilitar/deshabilitar botones
  function habilitarBotones(nuevaPartida, pedirCarta, terminarTurno) {
    document.getElementById("nueva-partida").disabled = nuevaPartida;
    document.getElementById("pedir-carta").disabled = pedirCarta;
    document.getElementById("terminar-turno").disabled = terminarTurno;
  }

  // Asociar eventos a los botones
  document.addEventListener("DOMContentLoaded", function () {
    // ... (código anterior)

    // Función para habilitar/deshabilitar botones
    function habilitarBotones(nuevaPartida, pedirCarta, terminarTurno) {
      document.getElementById("nueva-partida").disabled = !nuevaPartida;
      document.getElementById("pedir-carta").disabled = !pedirCarta;
      document.getElementById("terminar-turno").disabled = !terminarTurno;
    }

    // ... (resto del código)

    // Asociar eventos a los botones
    document
      .getElementById("nueva-partida")
      .addEventListener("click", function () {
        nuevaPartida();
        habilitarBotones(false, true, true);
      });

    document
      .getElementById("pedir-carta")
      .addEventListener("click", function () {
        pedirCarta(jugadorCartas, "puntos-jugador");
      });

    document
      .getElementById("terminar-turno")
      .addEventListener("click", function () {
        terminarTurno();
      });

    // Iniciar una nueva partida al cargar la página
    nuevaPartida();
  });
});
