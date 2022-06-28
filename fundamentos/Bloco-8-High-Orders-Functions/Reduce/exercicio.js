const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const flatten = arrays.reduce((acc, now) => acc.concat(now));
const reduceNames = () => books.reduce((acc, curr) => {return `${acc} ${curr.author.name},`}, '');
const averageAge = () => books.reduce((acc, curr) => {return acc + (curr.releaseYear - curr.author.birthYear)}, 0) / books.length;
const longestNamedBook = () => books.reduce((acc, curr) => curr.name.length > acc.name.length ? curr : acc)

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => acc + curr.split('').reduce((NewAcc, NewCurr) => {
    if(NewCurr === 'a' || NewCurr === 'A') return NewAcc + 1;
    return NewAcc;
  },0),0);
};

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(a, b) {
  return a.map((name, i) => {
    return {
      name,
      average: b[i].reduce((acc, curr) => (acc + curr), 0) /b[i].length,
    }
  })
};
 
console.log(studentAverage(students, grades));