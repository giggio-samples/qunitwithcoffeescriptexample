(function() {
  var Calculadora;

  Calculadora = (function() {

    function Calculadora() {}

    Calculadora.prototype.Soma = function(a, b) {
      return a + b;
    };

    return Calculadora;

  })();

  window.Calculadora = Calculadora;

}).call(this);
