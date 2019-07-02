// Como declarar variaveis com as palavras let, const e var


/* Principais tipos de variaveis: String, integer, decimal, Boolean, Array e objetos */

var nome = "Jorge"; // String
var idade = 35; // Integer
var peso = 89.5; // Decimal
var dev = true; // Boolean
var array = ['Jorge', 'Thiago', 2, true, { obj: 1 }] // Vetores - Permite tipos diferentes
var objeto = { // objetos
    nome: "Jorge",
    idade: 35,
    peso: 89.5,
    dev: true
}

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
console.log(soma(4, 3));