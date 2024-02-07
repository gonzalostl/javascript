class Fechas {
  constructor() {}

  diffFechas(fecha1, fecha2) {
    let date1 = new Date(fecha1);
    let date2 = new Date(fecha2);
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }

  maxFechas(fecha1, fecha2) {
    let date1 = new Date(fecha1);
    let date2 = new Date(fecha2);
    return date1 > date2 ? fecha1 : fecha2;
  }

  testFecha(fecha) {
    let date = new Date(fecha);
    return !isNaN(date.getTime());
  }

  ayerFecha(fecha) {
    let date = new Date(fecha);
    date.setDate(date.getDate() - 1);
    return date.toISOString().split("T")[0];
  }

  mañanaFecha(fecha) {
    let date = new Date(fecha);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split("T")[0];
  }
}

let fechaOps = new Fechas();
console.log(fechaOps.diffFechas("2021-03-01", "2021-03-10"));
console.log(fechaOps.maxFechas("2021-03-01", "2021-03-10"));
console.log(fechaOps.testFecha("2021-03-10"));
console.log(fechaOps.ayerFecha("2021-03-10"));
console.log(fechaOps.mañanaFecha("2021-03-10"));
