const d = new Date();
const fechaNavidad = new Date(d.getFullYear(), 11, 25);
const tiempoRestante = fechaNavidad - d;
//Lo divido entre eso porque al restar las fechas te da la diferencia en milisegundos y así lo transformo en días
const diasRestantes = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
document.write("Faltan "+ diasRestantes+ " días para navidad ");