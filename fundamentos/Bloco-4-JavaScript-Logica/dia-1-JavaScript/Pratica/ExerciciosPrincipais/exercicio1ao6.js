//Exercicio-1

const a = 2;
const b = 3;

let adicao = (a + b);
let subtracao = (a - b);
let multiplicacao = (a * b);
let divisao = (a / b);
let modulo = (a % b);

//exercicio 2

const elementoA = 1;
const elementoB = 2;

if (elementoA > elementoB) {
  console.log(elementoA);
} else {
  console.log(elementoB);
}

//Exercicio 3

const valor1 = 1;
const valor2 = 2;
const valor3 = 3;

if (valor1 > valor2 && valor1 > valor3) {
  console.log (valor1);
}else if (valor2 > valor1 && valor2 > valor3) {
  console.log (valor2);
} else {
  console.log (valor3);
}

//Exercicio 4

const numero = 1;

if (numero > 0) {
  console.log (positive);
} else if (numero < 0) {
  console.log (negative);
} else {
  console.log (zero);
}

//Exercicio 5

const parte1 = 100;
const parte2 = 40;
const parte3 = 40;

if (parte1 && parte2 && parte3 && parte1 + parte2 + parte3 == 180) {
  console.log (true);
} else {
  console.log (false);
}

//Exercicio 6

let peca = 'bispo';
const pecaEmMinusculo = peca.toLowerCase();

switch (pecaEmMinusculo) {
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break; 
   case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}

//Exercicio 7






