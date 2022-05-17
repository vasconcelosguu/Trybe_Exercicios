let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem vinda, " + info.personagem);

// EXERCICIO 2

info["recorrent"] = "sim";

console.log(info);

// Execicio 3

for (const value in info) {
    console.log(value);
  }

// Exercicio 4

for (const value in info) {
  console.log(info[value]); 
  }



