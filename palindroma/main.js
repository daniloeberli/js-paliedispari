"use strict";

function isPalindrome(str){
    for(let i = 0; i <= str.length; i++){
        if(str[i] === str[str.length - 1]){
            return "Palindroma"
        }else{
            return "Non è palindroma"
        }
    }
}

const parola = prompt('Inserisci una parola').toLocaleLowerCase();

console.log(isPalindrome(parola));