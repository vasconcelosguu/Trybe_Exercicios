//Exercicio 7

const nota = 80

if (nota >= 90) {
  console.log ("A");
} else if (nota >= 80) {
  console.log ("B");
} else if (nota >= 70) {
  console.log ("C");
} else if (nota >= 60) {
  console.log ("D");
} else if (nota >= 50) {
  console.log ("E");
} else if (nota <0 || nota>100) {
  console.log ("Nota invalida");
} else {
  console.log ("F");
}

//Exercicio 8

const valor1 = 1;
const valor2 = 5;
const valor3 = 2;

let par

if ((valor1 % 2 == 0) || (valor2 % 2 == 0) || (valor3 % 2 == 0)) {
  par = true;
}else {
par = false;
}  

console.log (par);

//Exercicio 9

const elementoA = 2;
const elementoB = 52;
const elementoC = 32;

let impar

if (elementoA % 2 !== 0 || elementoB % 2 !== 0 || elementoC % 2 !== 0) {
  impar = true;
}else {
impar = false;
}
console.log (impar);

//Exercicio 10

const valorCusto = 10;
const valorVenda = 15;

if (valorCusto >= 0 && valorVenda >= 0) {
  const valorCustoTotal = valorCusto + (valorCusto * 0.2);
  const lucro = valorVenda - valorCustoTotal;

  console.log(lucro * 1000);
} else {
  console.log("Error");
}

//Exercicio 11




