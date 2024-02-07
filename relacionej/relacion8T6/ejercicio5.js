/*Escribe un programa que vaya interrogando al usuario sobre una lista de ingredientes. Por cada ingrediente
se debe añadir un elemento a una lista desordenada. La petición de ingredientes finalizará cuando el usuario
pulse el botón Cancelar*/

function agregarIngrediente() {

    let ingrediente = prompt("Añade un ingrediente:");

    if (ingrediente === null) {
        alert("Lista finalizada.");
    } else {
        let lista = document.getElementById("listaIngredientes");
        let elementoLista = document.createElement("li");
        elementoLista.textContent = ingrediente;
        lista.appendChild(elementoLista);

        agregarIngrediente();
    }
}

agregarIngrediente();
