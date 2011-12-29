#* coffee-compile-options: bare: true

`/// <reference path="Calculadora.js" />`

module "calculadora"

test "Soma", ->
	c = new Calculadora()
	equals(5, c.Soma(2, 3))