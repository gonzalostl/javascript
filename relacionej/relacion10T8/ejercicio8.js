function logomitsubishi() {
  let lienzo = document.getElementById("lienzo");
  if (lienzo.getContext) {
    let rombo = lienzo.getContext("2d");

    rombo.lineWidth = 5;

    rombo.strokeStyle = "rgb(255, 0, 0)";

    rombo.fillStyle = "rgb(255, 0, 0)";

    rombo.beginPath();

    rombo.moveTo(250, 35);

    rombo.lineTo(300, 115);

    rombo.lineTo(250, 200);

    rombo.lineTo(200, 115);

    rombo.closePath();

    rombo.stroke();

    rombo.fill();
  }
  if (lienzo.getContext) {
    let rombo2 = lienzo.getContext("2d");

    rombo2.lineWidth = 5;

    rombo2.strokeStyle = "rgb(255, 0, 0)";

    rombo2.fillStyle = "rgb(255, 0, 0)";

    rombo2.rotate((-58 * Math.PI) / 180);

    rombo2.beginPath();

    rombo2.moveTo(-40, 323);

    rombo2.lineTo(10, 403);

    rombo2.lineTo(-40, 498);

    rombo2.lineTo(-90, 413);

    rombo2.closePath();

    rombo2.stroke();

    rombo2.fill();
  }

  if (lienzo.getContext) {
    let rombo3 = lienzo.getContext("2d");

    rombo3.lineWidth = 5;

    rombo3.strokeStyle = "rgb(255, 0, 0)";

    rombo3.fillStyle = "rgb(255, 0, 0)";

    rombo3.rotate((116 * Math.PI) / 180);

    rombo3.beginPath();

    rombo3.moveTo(305, -100);

    rombo3.lineTo(355, -20);

    rombo3.lineTo(305, 65);

    rombo3.lineTo(255, -20);

    rombo3.closePath();

    rombo3.stroke();

    rombo3.fill();
  }
}
logomitsubishi();
