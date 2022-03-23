// carne - 400 p/ pessoa + de 6 horas = 650 p/ pessoa 
// cerveja - 1200 ml p/ pessoa + de 6 horas = 2000 ml /p pessoa 
// Refrigerante - 1000 ml p/ pessoa + de 6 horas = 1500 ml /p pessoa 
// Criança valem 0,5 

let inputAdultos = document.getElementById ("adultos");
let inputCrianças = document.getElementById ("criancas");
let inputDuração = document.getElementById ("duracao");

let resultado = document.getElementById ("resultado")

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCrianças.value;
    let duracao = inputDuração.value;

    let quantidadetotalcarne = carneporpessoa (duracao) * adultos + (carneporpessoa(duracao) / 2 * criancas)
}
 function carneporpessoa (duracao){
     if (duracao >= 6) {
         return 650;
     } else {
         return 400;
     }
 }

 function cervejaporpessoa (duracao){
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}