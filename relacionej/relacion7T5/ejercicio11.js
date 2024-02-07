let horas = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

console.log(horas.test("06:29"));
console.log(horas.test("15:30"));
console.log(horas.test("23:59"));
console.log(horas.test("24:00"));
console.log(horas.test("4:60"));
console.log(horas.test("8:8"));
