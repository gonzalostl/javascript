//creamos la funcion
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Imprimir los primeros 10 números de la secuencia de Fibonacci
for (let i = 0; i < 10; i++) {
  document.write(fibonacci(i));
}
