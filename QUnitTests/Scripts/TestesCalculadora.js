/// <reference path="Calculadora.js" />;
module("calculadora");

test("Soma", function() {
  var c;
  c = new Calculadora();
  return equals(5, c.Soma(2, 3));
});
