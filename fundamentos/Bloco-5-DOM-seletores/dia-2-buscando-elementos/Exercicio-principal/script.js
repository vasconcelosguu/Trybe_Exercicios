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