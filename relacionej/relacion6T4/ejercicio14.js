function fibo(numero) {
  if (numero < 2) return 1;
  else return fibo(numero - 1) + fibo(numero - 2) + fibo(numero - 3);
}
function sucesion(numero) {
  for (let i = 0; i < numero; i++) {
    document.write(fibo(i));
  }
}
sucesion(10);
