const biciclette = [
  {
    nome: monuntainbike,
    kg: 25
  },
  {
    nome: trailbike,
    kg: 28
  },
  {
    nome: streetbike,
    kg: 18
  },
  {
    nome: racebike,
    kg: 6
  },
  {
    nome: bmxbike,
    kg: 12
  },
]

let peso = biciclette[0].kg;
let biciPiuLeggera = {};

for(let bici of biciclette){
  const {kg} = bici;

  if( peso > kg){
    peso = kg;
    biciPiuLeggera = bici;
  }
}

console.log("Il peso minore", peso);

stampaBici(biciPiuLeggera);

function stampaBici(bici){
  const {nome, kg} = bici;
  document.querySelector(".container").innerHTML = `La bici con il peso minore e' ${biciPiuLeggera}`
}