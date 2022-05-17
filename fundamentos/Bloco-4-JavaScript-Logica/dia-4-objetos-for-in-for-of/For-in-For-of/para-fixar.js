let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (const name in names) {
  console.log("Olá, " + names[name]);
  }



  //EXERCICIO 2//

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (const key in car) {
    console.log(key, car[key]);
    }

//Utilização for-of//


let numbers =[1, 2, 5, 6];

  for (const number of numbers) {
    console.log(number);
}