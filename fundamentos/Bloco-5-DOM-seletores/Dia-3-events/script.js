function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const holiday = [24, 25, 31];
const friday = [4, 11, 18, 25];

let acessoUl = document.querySelector('#days');

for (let index of dezDaysList) {
  let itensLista = document.createElement('li');
  itensLista.classList.add('day');
  for (let feriado of holiday) {
  if (feriado === index) {
    itensLista.classList.add('holiday');
    itensLista.innerText = feriado;
    acessoUl.appendChild(itensLista);
  }
  for (let sexta of friday) {
  if (index === sexta) {
    itensLista.classList.add('friday');
    itensLista.innerText = sexta;
    acessoUl.appendChild(itensLista);
  }
}
  acessoUl.appendChild(itensLista);
  itensLista.innerText = index;
}
}

let myDiv = document.querySelectorAll('div')[2];
const btnHolidays = (feriados) => {
  let butaoFeriados = document.createElement('button');
  butaoFeriados.id = 'btn-holiday';
  butaoFeriados.innerText = feriados;
  myDiv.appendChild(butaoFeriados);
}

btnHolidays('Feriado!!');

let myButton = document.querySelector('button');
// let corzinhaPrincipal = 'red';
// let corzinhaNova = 'rgb(238,238,238)';


const changeColorHoliday = (corzinhaPrincipal, corzinhaNova) => {
  myButton.addEventListener('click', () => {
    let listItensHolidays = document.querySelectorAll('.holiday');
    for (let index in holiday) {
      const caminho = listItensHolidays[index].style
    if (caminho.background === corzinhaPrincipal) {
      caminho.background = corzinhaNova;
    } else {
      caminho.background = corzinhaPrincipal;
    }
  }
  });
};

changeColorHoliday('red', 'rgb(238,238,238)' );

let fridayParty = (sextaFeira) => {
  let butaoSextinha = document.createElement('button');
  butaoSextinha.id = 'btn-friday';
  butaoSextinha.innerText = sextaFeira
  myDiv.appendChild(butaoSextinha);
}

fridayParty('Sextinha!!');

let buttonSexta = document.querySelector('#btn-friday');
// let newText = 'Sexta-feira';


const changeText = (newText) => {
 buttonSexta.addEventListener('click', () => {
  for (let i in friday){
    let listItensFridays = document.querySelectorAll('.friday')
    if (listItensFridays[i].innerText === newText) {
      listItensFridays[i].innerText = friday[i];  //array
    } else {
      listItensFridays[i].innerText = newText;
  }
}
})
};
changeText('Sextou Guys');

// EXERCICIO 6 

const myDays = document.querySelector('#days');

const zoomDays = () => {
  myDays.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '35px'
    event.target.style.fontWeight = '650';
    event.target.style.color = 'green';
  })
}

const ZoomOff = () => {
  myDays.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px'
    event.target.style.fontWeight = '200';
    event.target.style.color = 'gray';
  })
}
ZoomOff();
zoomDays();