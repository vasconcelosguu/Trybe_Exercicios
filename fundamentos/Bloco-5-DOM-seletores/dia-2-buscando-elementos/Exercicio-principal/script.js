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

//Exercicio 5
let leftSection = document.createElement('section');

leftSection.className = 'left-content';
main.appendChild(leftSection);


//Exercicio 6
let rightSection = document.createElement('section');

rightSection.className = 'right-content';
main.appendChild(rightSection);

//Exercicio 7
let image = document.createElement('img');

image.src = 'https://picsum.photos/200';
image.className = 'small-image';
leftSection.appendChild(image);

//Exercicio 8
let list = document.createElement('ul');
rightSection.appendChild(list);
let  numbers  = ['um', 'dois', 'três','quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let value in numbers) {
    const listinha = document.createElement('li');
    listinha.innerText = numbers[value];
    list.appendChild(listinha);
  }
