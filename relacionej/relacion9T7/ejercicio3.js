function eliminarElemento(event) {
  event.target.parentNode.remove();
}

const botonesEliminar = document.querySelectorAll(".eliminar");
botonesEliminar.forEach((boton) => {
  boton.addEventListener("click", eliminarElemento);
});

function agregarElemento() {
  const nuevoTexto = document.getElementById("nuevoElemento").value;
  if (nuevoTexto.trim() !== "") {
    const lista = document.getElementById("lista");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nuevoTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.classList.add("eliminar");
    botonEliminar.addEventListener("click", eliminarElemento);
    nuevoElemento.appendChild(botonEliminar);
    lista.appendChild(nuevoElemento);
    document.getElementById("nuevoElemento").value = "";
  } else {
    alert("Texto inválido, introducelo de nuevo");
  }
}
