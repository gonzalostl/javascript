const operarFechas = {
  difFechas(fecha1, fecha2) {
    //restamos las fechas y nos daría la diferencia en milisegundos
    let diferencia = fecha2 - fecha1;
    //lo transformamos a días
    let diferencia_de_días = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    //lo sacamos por pantalla
    return diferencia_de_días;
  },
  maxFecha(fecha1, fecha2) {
    let fechaActual = new Date();

    let diferencia1 = Math.abs(fechaActual - fecha1);
    let diferencia2 = Math.abs(fechaActual - fecha2);

    return diferencia1 < diferencia2 ? fecha1 : fecha2;
  },
  testFecha(fecha) {
    let regex = /\d{2}-\d{2}-\d{4}/;
    if (!regex.test(fecha)) {
      return false;
    } else {
      return true;
    }
  },
  ayerFecha(fecha) {
    // Restamos un día a la fecha
    return new Date(fecha.getTime() - 24 * 60 * 60 * 1000);
  },
  mañanaFecha(fecha) {
    // Sumamos un día a la fecha
    return new Date(fecha.getTime() + 24 * 60 * 60 * 1000);
  },
};

//pruebo los métodos
console.log(
  operarFechas.difFechas(new Date("2023-10-10"), new Date("2023-10-15"))
);
console.log(
  operarFechas.maxFecha(new Date("2024-01-10"), new Date("2023-10-15"))
);
console.log(operarFechas.ayerFecha(new Date("2024-01-10")));
console.log(operarFechas.mañanaFecha(new Date("2024-01-10")));
console.log(operarFechas.testFecha("23-04-2023"));
console.log(Date());
