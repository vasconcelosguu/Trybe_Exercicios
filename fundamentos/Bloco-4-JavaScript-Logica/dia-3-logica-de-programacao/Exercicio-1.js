// let number = 10;
// let fatorial = number;


// for (let i = number -1; i > 1; i--) {
//   fatorial *= i;
// }
//   console.log(fatorial);


//exercicio 2 //

// let word = "ate cubanos";
// let invert ="";

// for (let i = word.length - 1; i >= 0; i--) {
//   invert += word[i];
// }


// console.log(invert);


//Exercicio 3 //

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for (let i = 1; i < array.length; i++) {
//   if (array[i].length > maiorPalavra.length) {
//     maiorPalavra = array[i];
//   } else if (array[i].length < menorPalavra.length) {
//     menorPalavra = array[i];
//   };
// };
//
// console.log(menorPalavra, maiorPalavra);
//
//
//Exercicio 4 //
// let maiorPrimo = 0;
//
// for (let number = 3; number < 50; number++) {
//   for (let divisor = 2; divisor < number; divisor++) {
//     if (number % divisor === 0) break;
//     if (divisor == number -1) {
//       maiorPrimo = number;
//       console.log(maiorPrimo);
//     }
//   };
// };
//
// console.log(maiorPrimo);
//
//OUTRA SOLUÇÂO//
// let maiorPrimo;
//
// for (let number = 50; number > 2; number--) {
//   if (maiorPrimo) break;
//
//   for (let divisor = 2; divisor < number; divisor++) {
//     if (number % divisor === 0) break;
//     if (divisor == number -1) {
//       maiorPrimo = number; 
//       break;
//     }
//   };
// }
//
// console.log(maiorPrimo);