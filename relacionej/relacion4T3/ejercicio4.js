function DiferenciaEnDias(fecha1, fecha2) {
    let Dia = 24 * 60 * 60 * 1000; 
    let primeraFecha = new Date(fecha1);
    let segundaFecha = new Date(fecha2);
  
    let Milisegundos = Math.abs(primeraFecha - segundaFecha);
    return Math.round(Milisegundos / Dia);
  }
  

  let fecha1 = new Date('2022-10-12');
  let fecha2 = new Date('2023-09-02');
  let diferencia = DiferenciaEnDias(fecha1, fecha2);
  document.write("La diferencia de días entre " + fecha1 + " y " + fecha2 + " es: " + diferencia + "días");