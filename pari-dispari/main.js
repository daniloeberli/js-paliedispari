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

const userChoice = prompt("Inserisci: pari oppure dispari").toLocaleLowerCase();
const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
let min = 1;
let max = 5;
let computerNumber = getRndInteger(min,max);  
let sum = userNumber + computerNumber;

if(userNumber < 1 || userNumber > 5){
    alert("ERRORE INSERIMENTO, AGGIORNA LA PAGINA")
}else{
    //console.log(userNumber);
    console.log(computerNumber);
    //console.log(sum);
    console.log(pariDispari(sum));
    if((userChoice==='pari' && pariDispari(sum)==='pari') || (userChoice==='dispari' && pariDispari(sum)==='dispari')){
        console.log("ha vinto l'utente")
    }else{
        console.log("ha vinto il computer")
    }
}



