let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] % 2 !==0) impares ++;
} 

if (impares == 0) {
   console.log("Não possuem valores impares");
} else console.log(impares);