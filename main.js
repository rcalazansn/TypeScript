// para compilar tsc arquivo.ts
//JS
var minhaVar = 'minha variavel';
function minhaFuncao(x, y) {
    return x + y;
}
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
//ES6 (ES2015)
var num = 2;
var PI = 3.14;
numeros.map(function (valor) { return valor * 2; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'nome';
var n2 = 123;
n2 = 'texto';
