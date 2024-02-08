/*Crea una página HTML con mucho contenido de prueba, y un programa que tras la carga
de la página espere 10 segundos y haga scroll hasta el final de la misma.*/

// Función para hacer scroll hacia el final de la página
function scrollToEnd() {
  window.scrollTo(0, document.body.scrollHeight);
}

// Espera 10 segundos antes de llamar a la función de scroll
setTimeout(scrollToEnd, 10000);
