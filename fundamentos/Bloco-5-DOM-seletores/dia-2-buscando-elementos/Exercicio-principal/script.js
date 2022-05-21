//Exercicio 1
const body = document.querySelector('body');

let newH1 = document.createElement('h1');

newH1.innerText = 'Exercício 5.2 - JavaScript DOM';

body.appendChild(newH1);

//Exercicio 2
let newMain = document.createElement('main')

newMain.className = 'main-content';
body.appendChild(newMain);
console.log(newMain);

//Exercicio 3
const main = document.querySelector('main');
let newSection = document.createElement('section');

newSection.className = 'center-content';
main.appendChild(newSection);

//Exercicio 4
const section = document.querySelector('section');
let newP = document.createElement('p');

newP.innerText = 'Eu amo lontras';
section.appendChild(newP);