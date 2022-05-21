//1
const atual = document.getElementById('elementoOndeVoceEsta');
console.log(atual);

//2
const father = document.getElementById('elementoOndeVoceEsta').parentElement;
father.style.color = 'red';

//3
let firstSonOfSon = elementoOndeVoceEsta.firstElementChild;
firstSonOfSon.innerText = 'Lontras fofas';

//4
const firstSon = father.firstElementChild;

//5
const firstSon2 = atual.previousElementSibling;
console.log(firstSon2);

//6
const atencao = atual.parentNode.nextSibling;
console.log(atencao);

//7
const thirdSon = atual.nextElementSibling
console.log(thirdSon);

//8
const thirdSon2 = father.lastChild;
console.log(thirdSon2);


