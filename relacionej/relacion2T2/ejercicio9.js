
let dateHoy = new Date();
let dateNavidad = new Date('December 24, 2023 00:00:00');


let diferenciaMS = dateNavidad.getTime() - dateHoy.getTime();
let numeroDias = Math.trunc(diferenciaMS/1000/60/60/24);


document.write("Quedan " + numeroDias + " días para navidad");

