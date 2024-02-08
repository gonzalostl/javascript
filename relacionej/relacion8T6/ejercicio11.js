/*Crea una lista desordenada con diez elementos. Luego pregunta al usuario si la quiere
ordenar. Si pulsa Aceptar la lista debe ordenarse alfabéticamente. Si pulsa Cancelar la lista
debe desordenarse aleatoriamente*/

function ordenarDesordenarLista() {
  var lista = document.getElementById("miLista");
  var elementos = Array.from(lista.children);

  var confirmacion = confirm("¿Quieres ordenar la lista?");

  if (confirmacion) {
    // Ordenar alfabéticamente
    elementos.sort(function (a, b) {
      return a.textContent.localeCompare(b.textContent);
    });
  } else {
    // Desordenar aleatoriamente
    elementos.sort(function () {
      return Math.random() - 0.5;
    });
  }

  lista.innerHTML = "";
  elementos.forEach(function (elemento) {
    lista.appendChild(elemento);
  });
}
