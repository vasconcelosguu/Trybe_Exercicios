// let n = 5
// let ast = ""


// for (let index = 0; index <= n ; index++) {
//     ast += "*"
// }
// for (let sec = 0; sec < ast.length; sec++) {
//   console.log(ast);
// }

//EXERCICIO 2

// let n = 5 ;
// let ast = "";


// for (let i = 0; i < n; i++) {
//   ast += "*";
//   console.log(ast);
// }


//EXERCICIO 3

// let n = 5;

// for (let line = 0; line < n; line++) {
//   let lineCont = "";

//   for (let col = 0; col < n; col++) {
//     if (col + line >= n - 1) { 
//       lineCont += "*";
//     } else lineCont += " ";
//   }
//   console.log(lineCont);
// }

//EXERCICIO 4


// let n = 5;
// const mid = (n + 1) /2;

// for (let line = 1; line <= mid; line++) {
//   let lineCont = "";

//   for (let col = 1; col <= n; col++) {
//     if (Math.abs(mid - col) < line) { 
//       lineCont += "*";
//     } else lineCont += " ";
//   }
//   console.log(lineCont);
// }

//EXERCICIO 5//


let n = 5;
const mid = (n + 1) /2;

for (let line = 1; line <= mid; line++) {
  let lineCont = "";

  for (let col = 1; col <= n; col++) {
    if (Math.abs(mid - col) == line +1) { 
      lineCont += "*";
    } else lineCont += "-";
  }
  console.log(lineCont);
}