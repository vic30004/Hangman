// global variables
let wins = 0;
let numberOfGuesses = 9;
const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
//Show names, randomly selecting them and converting them to _
let shows = ["Dark", "Stranger Things", "Black Mirror", "Money Heist"];
let word;
let buffer = [];
let correctGuesses = [];


selectRandomWord();
updateGuesses();
updateCurrentWord();

function reset(){
  correctGuesses = [];
  buffer = [];
  numberOfGuesses = 9;
  selectRandomWord();
  updateGuesses();
  updateCurrentWord();
}

function selectRandomWord(){
  //This will loop through the shows and save a show under current show as ---- 
  word = shows[Math.floor(Math.random() * shows.length)];
}

function updateCurrentWord(){
  let currentWord = document.getElementById("current-word");
  currentWord.innerHTML = ""; //this clears the content of the html element
  for (let i = 0; i < word.length; i++) {
      let currentLetter = word[i];
      let letterToUse = "_";
      if(currentLetter === " "){
        letterToUse = "  ";
      } else if(correctGuesses.indexOf(word[i].toLowerCase()) !== -1){
        letterToUse = word[i];
      }
      let currWord = document.createElement("span");
      currWord.classList.add("current-word-letter");
      currWord.textContent = letterToUse;
      currentWord.appendChild(currWord)
  }
}

function updateGuesses(){
  // adding number of guesses left to document
  let remains = document.getElementById('guess-remains');
  remains.innerHTML = "";

  let remain = document.createElement("span");
  remain.textContent = numberOfGuesses;
  remains.appendChild(remain);
}



//Adding wins total to Document
let winsTotal = document.getElementById('wins');
let win = document.createElement("span");
win.textContent = wins;
winsTotal.appendChild(win);

function updateGuessedLetters(key){
  // we are only interested in alphanumeric keys
  if (charList.indexOf(key) === -1 || numberOfGuesses === 0) {
    return;
  }

  if(word.toLowerCase().replace(/ /g, "").indexOf(key) !== -1){
    correctGuesses.push(key);
    updateCurrentWord();
  } else if (!buffer.includes(key)){
    buffer.push(key);
    guess.innerHTML = "";

    let guessLetters = document.createElement('span');
  
    guessLetters.textContent = buffer.join(",");
  
    guess.appendChild(guessLetters);
    numberOfGuesses--;
    updateGuesses();
    if(numberOfGuesses === 0){
      //you lost
    }
  }
}

// records keys that are entered and saves them to an empty array. 

document.addEventListener('DOMContentLoaded', () => {

    let guess = document.getElementById("guess");

    document.addEventListener('keydown', event => {
        
      const key = event.key.toLowerCase();
      updateGuessedLetters(key);

    });

});