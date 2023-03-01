"use strict";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function pariDispari(total){
    if(total % 2 === 0){
        return "pari"
    }else{
        return "dispari"
    }
}

const userChoice = prompt("Inserisci: pari oppure dispari");
const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
let min = 1;
let max = 5;
let computerChoice = getRndInteger(min,max);  
let sum = userNumber + computerChoice;

if((userChoice==='dispari' && userNumber%2===0) || (userChoice==='pari' && userNumber%2 !==0) || (userNumber < 1 || userNumber > 5)){
    alert("ERRORE INSERIMENTO, AGGIORNA LA PAGINA")
}else{
    //console.log(userNumber);
    //console.log(computerChoice);
    //console.log(sum);
    console.log(pariDispari(sum));
}



