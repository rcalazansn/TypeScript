// para compilar tsc arquivo.ts

//JS
var minhaVar = 'minha variavel';

function minhaFuncao(x, y){
    return x + y;
}

var numeros = [1, 2, 3];
numeros.map(function (valor){
    return valor * 2;
});

//ES6 (ES2015)
let num = 2;
const PI = 3.14;

numeros.map(valor => valor * 2);

class Matematica{
    soma (x , y){
        return x + y;
    }
}

var n1 : string = 'nome';
var n2 : any = 123;
n2 = 'texto';