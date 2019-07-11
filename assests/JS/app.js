document.addEventListener('DOMContentLoaded', () => {

    'use strict';
    // records keys that are entered and saves them to an empty array. 
    let buffer = [];

    document.addEventListener('keydown', event => {
        const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const key = event.key.toLowerCase();

        // we are only interested in alphanumeric keys
        if (charList.indexOf(key) === -1) return;

        buffer.push(key);
        console.log(buffer);
    });


let loop = (arr) => {
    for (let i=0; i<arr.length; i++){
        arr[i]
    }
}

    // global variables
    let wins = "0";
    let numberOfGuesses = "9";
    let lettersGuessed = "";

    //Show names, randomly selecting them and converting them to -
    let shows = ["Dark", "Stranger Things", "Black Mirror", "13 Reasons Why"];
    let answerArray = [];
    let randomShow = shows[Math.floor(Math.random() * shows.length)];

    for (let i = 0; i < shows.length; i++) {

        answerArray[i] = '_';

    }
    
    let guess= document.getElemenetsByClassName("guess");
    guess.ineerHtml = "smthn";

    let remainingLetters = shows.length;

    //if (remainingLetters > 0) {
    //    console.log(answerArray.join(" "));

  //  }

    for (let j = 0; j<shows.length; j++){
        if (shows[j] === loop(buffer)) {
            answerArray[j] = loop(buffer);
            remainingLetters--;
        }
    }

   console.log(answerArray)
});