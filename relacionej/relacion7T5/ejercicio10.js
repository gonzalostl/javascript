let precio = /^(\d+(\.\d{1,2})?|(\d+(\.\d{1,2})?,\d{1,2}))\s€$/;

console.log(precio.test("7,36 €"));
console.log(precio.test("7.896 €"));
console.log(precio.test("7 €"));
console.log(precio.test("7,345 €"));
