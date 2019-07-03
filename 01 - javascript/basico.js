// Como declarar variaveis com as palavras let, const e var
let a = 1;
var b = 2;
const c = 3;


/* Principais tipos de variaveis: 

Tipos primitivos: undefined, null, boolean, number, string e symbol,
todo o resto é object.

String, integer, decimal, Boolean, Array e objetos */

var teste;
console.log("Variavel declarada sem atribuir valor é do tipo: ", typeof(teste));
console.log("undefined é um tipo: ", typeof(undefined));
console.log("null é um objeto: ", typeof(null))


var nome = "Jorge"; // String
var idade = 35; // Integer
var peso = 89.5; // Decimal
var dev = true; // Boolean
var array = [
        'Jorge',
        'Thiago',
        2,
        true,
        { obj: 1 },
        function() { console.log('Funcao dentro do array') }
    ] // Vetores - Permite tipos diferentes
var objeto = { // objetos
    nome: "Jorge",
    idade: 35,
    peso: 89.5,
    dev: true
}

array[5]();



console.log(nome);

console.log(`
Nome: ${nome}
Idade: ${idade}
Peso: ${peso}
Dev: ${dev}
Array: ${array},
Objeto: ${objeto}
`);

// Acessando o array
console.log('Array na posição 0 e 3:', array[0], array[3]);

console.log('String do objeto: ', JSON.stringify(objeto));
console.dir(objeto);
console.log(objeto.nome);


// Coerção explícita vs implícita
const x = 10;
const explicit = String(x);
const implicit = x + "";

// Comparação == vs ===
const abc = 123
const def = '123'

console.log('==: ', abc == def)
console.log('===: ', abc === def)

//Falsy
if (undefined || null || false || +0 || -0 || NaN) {

} else {
    console.log('Falsy');
}


//Truthy {}, [] e o resto
if ({} && [] && 2) {
    console.log('Truthy');
}



// Operadores lógicos
// AND, OR, NOT: && || !
if (dev) {
    console.log("dev é true")
} else {
    console.log("dev é falso")
}

console.log(dev ? "Developer" : "Usuario")

// estruturas de repetição
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

var j = 0;
while (j <= 100) {
    console.log(j);
    j++;
}

// função
function soma(num1, num2) {
    return num1 + num2;
}

var funcaoExibeAlgo = () => { console.log('Hello world!') }


// executa uma vez após o tempo (3 segundos)
setTimeout(funcaoExibeAlgo, 3000)
    // imprime a cada 1 segundo
setInterval(funcaoExibeAlgo, 1000)