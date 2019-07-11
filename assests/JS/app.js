
// global variables
let wins = 0;
let numberOfGuesses = 9;
let lettersGuessed = "";

//Show names, randomly selecting them and converting them to -
let shows = ["Dark", "StrangerThings", "BlackMirror", "MoneyHeist"];
let answerArray = [];
let word = shows[Math.floor(Math.random() * shows.length)];

//This will loop through the shows and save a show under current show as ---- 

let currentWord = document.getElementById("current-word");

for (let i = 0; i < word.length; i++) {

    answerArray[i] = '_ ';

    let currWord = document.createElement("span");
    currWord.textContent = answerArray[i];
    currentWord.appendChild(currWord)
}

// adding number of guesses left to document

let remains = document.getElementById('guess-remains');

let remain = document.createElement("span");
remain.textContent = numberOfGuesses;
remains.appendChild(remain)

//Adding wins total to Document
let winsTotal = document.getElementById('wins');
let win = document.createElement("span");
win.textContent = wins;
winsTotal.appendChild(win);

// records keys that are entered and saves them to an empty array. 

document.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let buffer = [];

    document.addEventListener('keydown', event => {
        const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const key = event.key.toLowerCase();

        // we are only interested in alphanumeric keys
        if (charList.indexOf(key) === -1) return;

        buffer.push(key);
     
       

        //adds the keys strokes to document. Needs to be fixed, it adds all contents of the array every time.
        for (let i = 0; i < buffer.length; i++) {
            let guess = document.getElementById("guess");

            let guessLetters = document.createElement('span');

            guessLetters.textContent = buffer;

            guess.appendChild(guessLetters)
        }


        (function(){
            var shouldHandleKeyDown = true;
            document.onkeydown = function(){
              if (!shouldHandleKeyDown) return;
              shouldHandleKeyDown = false;
              // HANDLE KEY DOWN HERE
            }
            document.onkeyup = function(){
              shouldHandleKeyDown = true;
            }
        })();

    });

});


let remainingLetters = shows.length;

//if (remainingLetters > 0) {
//    console.log(answerArray.join(" "));

//  }



console.log(answerArray)
