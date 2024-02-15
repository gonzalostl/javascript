/*En este juego se compite contra lal "banca" para obtener una puntuación lo mas cercana a 7.5
sin pasarse. Se utilizan las csartas del 1 al 7 y las figuras. El valor de las cartas numeradas es su 
propio valor, mientras que el valor de las figuras es de 0.5

EL jugador saca una carta y decide si quiere arriesgarse a sacar otra o prefiere plantarse. Si el 
jugador se planta comienza el turno de la banca, que esta obligada a sacar una puntuación mayor o igual
que la del jugador. El jugador gana si no se pasa de 7.5 y la banca se pasa

Como mínimo el programa debe realizar estas funciones:
-Obtener las cartas de forma aleatoria y que una vez que se obtenga esa carta no vuelva a aparecer en esa jugada.
-El usuario podrá elegir una nueva carta haciendo doble click en el montón de cartas restantes o haciendo
click plantarse, la banca jugará siempre hasta superar al usuario o hasta pasarse de 7.5 con las cartas
restantes del monton.
-Se debe llevar un contador de ambos
-Se debe ir añadiendo en su respectiva lista(mediante DOM) las cartas que ha sacado tanto el jugador
como la banca
-Si el usuario pulsa la tecla f, la página debe recargarse.
-Se debe notificar quién gana 
-se debe añadir la medalla al ganador
-crea una cookie que registra si ha ganado el jugador o si ha ganago la banca y que 
expire en 5 min.*/

function obtenerCarta() {
  const cartas = [1, 2, 3, 4, 5, 6, 7, 0.5, 0.5, 0.5];
  const cartaAleatoria = cartas[Math.floor(Math.random() * cartas.length)];
  return cartaAleatoria;
}

function elegircarta() {}

function recarga() {
    
}
function notificacion() {
  if (jugador < 7.5 && banca > 7.5) {
    alert("El jugador ha ganado");
  } else {
    alert("La banca ha ganado");
  }
}

document.cookie = "";
