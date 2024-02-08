/*Crea una página HTML con un contenedor de una imagen. Debes tener preparadas diez imágenes
y en función de la tecla numérica que se pulse(0, 1, 2, 3, 4, 5, 6, 7, 8, 9) debe aparecer esa
imagen en el contenedor. Cuando se pulse otro número, debe vaciarse el contenedor y cargarse de nuevo
su imagen correspondiente*/

const imagenes = {
  0: "img/auto1.jpg",
  1: "img/auto2.jpg",
  2: "img/auto3.jpg",
  3: "img/auto4.jpg",
  4: "img/auto5.jpg",
  5: "img/auto6.jpg",
  6: "img/auto7.jpg",
  7: "img/auto8.jpg",
  8: "img/auto9.jpg",
  9: "img/auto10.jpg",
};

function cambiarImagen(tecla) {
  const contenedor = document.getElementById("imagenContainer");
  contenedor.innerHTML = "";

  if (tecla in imagenes) {
    const imagenSrc = imagenes[tecla];
    const imagen = document.createElement("img");
    imagen.src = imagenSrc;
    contenedor.appendChild(imagen);
  }
}
document.addEventListener("keydown", function (event) {
  const teclaPresionada = event.key;

  if (/[0-9]/.test(teclaPresionada)) {
    cambiarImagen(teclaPresionada);
  }
});
