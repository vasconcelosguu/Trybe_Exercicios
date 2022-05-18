// //Exercicio 5

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim',
// };

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// };

// for (let values in info) {
//   if (
//     values === 'recorrente' &&
//     info[values] === 'Sim' &&
//     info2[values] === 'Sim'
//   ) {
//     console.log('Ambos recorrentes');
//   } else {
//     console.log(info[values] + ' e ' + info2[values]);
//   }
// }


//Exercicio 6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// console.log("O livro favorito de " + leitor["nome"] + " " + leitor["sobrenome"]+ " se chama " + leitor.livrosFavoritos[0].titulo);


//Exercicio 7

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  },
);
// console.log(leitor.livrosFavoritos)

//Exercicio 8🚀 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
let favBook

if (leitor.livrosFavoritos = 2) {
  favBook = "2 livros Favoritos";
};
  console.log(leitor.nome + " tem " + favBook);