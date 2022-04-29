const listaZucchine = [
  {
    varieta: "varieta1",
    peso: 311,
    lunghezza: 35
  },
  {
    varieta: "varieta2",
    peso: 266,
    lunghezza: 25
  },
  {
    varieta: "varieta3",
    peso: 45,
    lunghezza: 13
  },
  {
    varieta: "varieta4",
    peso: 389,
    lunghezza: 20
  },
  {
    varieta: "varieta5",
    peso: 189,
    lunghezza: 35
  },
  {
    varieta: "varieta6",
    peso: 200,
    lunghezza: 84
  },
  {
    varieta: "varieta7",
    peso: 167,
    lunghezza: 300
  },
  {
    varieta: "varieta8",
    peso: 200,
    lunghezza: 50
  },
  {
    varieta: "varieta9",
    peso: 190,
    lunghezza: 31
  },
  {
    varieta: "varieta10",
    peso: 145,
    lunghezza: 78
  }
];


const longZucchina =[], shortZucchina =[];

for( let i in listaZucchine){
  const zucchina = listaZucchine[i];
  (zucchina, lunghezza >= 15) ? longZucchina.push(zucchina) : shortZucchina.push(zucchina);
};

let pesoTotaleLunghe = 0, pesoTotaleCorte = 0;

for(let zucchina in longZucchina){
  pesoTotaleLunghe += parseInt(zucchina.peso);
}

for(let zucchina in shortZucchina){
  pesoTotaleCorte += parseInt(zucchina.peso);
}

console.log(pesoTotaleCorte);
console.log(pesoTotaleLunghe);