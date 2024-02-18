function switchCase(opcion) {
  switch (opcion) {
    case 1:
      try {
        throw new EvalError("Hola");
      } catch (e) {
        console.log(e instanceof EvalError);
        console.log(e.message);
        console.log(e.name);
      }
      break;
    case 2:
      function loop(x) {
        if (x >= 1000000000000) return;

        loop(x + 1);
      }
      loop(0);

      // InternalError: demasiada recursividad

      break;
    case 3:
      function check(n) {
        if (!(n >= -100 && n <= 100)) {
          throw new RangeError("El número debe estar entre -100 y 100.");
        }
      }

      try {
        check(1000);
      } catch (error) {
        if (error instanceof RangeError) {
        }
      }

      break;
    case 4:
      try {
        let a = VariableIndefinida;
      } catch (e) {
        console.log(e instanceof ReferenceError);
        console.log(e.message);
        console.log(e.name);
      }

      break;
    case 5:
      try {
        throw new SyntaxError("Hola");
      } catch (e) {
        console.log(e instanceof SyntaxError);
        console.log(e.message);
        console.log(e.name);
        console.log(e.stack);
      }

      break;
    case 6:
      try {
        null.f();
      } catch (e) {
        console.log(e instanceof TypeError);
        console.log(e.message);
        console.log(e.name);
      }

      break;
    case 7:
      try {
        decodeURIComponent("%");
      } catch (e) {
        console.log(e instanceof URIError);
        console.log(e.message);
        console.log(e.name);
      }

      break;
    default:
      console.log("Opción inválida");
  }
}

let opcionSeleccionada = 1;
switchCase(opcionSeleccionada);
