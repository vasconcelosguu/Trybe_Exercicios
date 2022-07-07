const rectangleArea = (width, height) => width * height;
const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];
rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle)
  console.log(rectangle[0] * rectangle[1]);
});
const sum = (...numbers) => numbers.reduce(((acc, curr) => acc + curr), 0);
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};
const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];
const filterPeople = (val) => val.filter(({nationality, bornIn}) => {nationality === 'Australian' && bornIn > 1900 && bornIn < 2000});
const myList = [1, 2, 3];
const swap = ([x, y, z]) => [z, y, x]; 
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
const toObject = ([car, brand, year]) => ({car, brand, year});
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];
const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`
const greet = (name, greeting = 'hi') => `${greeting} ${name}`
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
const {spring, summer, autumn, winter} = yearSeasons;
const months = [...spring, ...summer, ...autumn, ...winter];
