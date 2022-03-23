// carne - 400 p/ pessoa + de 6 horas = 650 p/ pessoa 
// cerveja - 1200 ml p/ pessoa + de 6 horas = 2000 ml /p pessoa 
// Refrigerante - 1000 ml p/ pessoa + de 6 horas = 1500 ml /p pessoa 
// Criança valem 0,5 

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qtdTotalcarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalcerveja = cervejaPP(duracao) * adultos;
    let qtdTotalbebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p>${qtdTotalcarne}g de Carne</p>`
    resultado.innerHTML += `<p>${qtdTotalcerveja}ml de Cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalbebidas}ml de Bebidas</p>`
}

 function carnePP (duracao){
     if (duracao >= 6) {
         return 650;
     } else {
         return 400;
     }
 }

 function cervejaPP (duracao){
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP (duracao){
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}