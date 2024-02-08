/*Crea una aplicación cuyo código HTML contenga únicamente una caja roja. Cada vez que 
el usuario pulse algunas de las teclas de los cursores(flecha arriba, flecha abajo, flecha a derecha, 
flecha izquierda), la caja debe desplazarse 10px en la dirección establecida por el cursor*/
window.onload = () => {
  const cubo = {
    element: document.getElementById("cubo"),
    topPosition: 0,
    leftPosition: 0,
    step: 10,
    move: function (direction) {
      switch (direction) {
        case "ArrowUp":
          this.topPosition -= this.step;
          this.element.style.top = this.topPosition + "px";
          break;
        case "ArrowDown":
          this.topPosition += this.step;
          this.element.style.top = this.topPosition + "px";
          break;
        case "ArrowRight":
          this.leftPosition += this.step;
          this.element.style.left = this.leftPosition + "px";
          break;
        case "ArrowLeft":
          this.leftPosition -= this.step;
          this.element.style.left = this.leftPosition + "px";
          break;
      }
    },
  };

  onkeydown = (key) => {
    cubo.move(key.code);
  };
};
