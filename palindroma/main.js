"use strict";

function isPalindrome(str){
    for(let i = 0; i <= str.length; i++){
        if(str[i] !== str[str.length - 1]){
            return "Non è Palindroma"
        }
    }return "Palindroma"
}

const parola = prompt('Inserisci una parola').toLocaleLowerCase();

console.log(isPalindrome(parola));