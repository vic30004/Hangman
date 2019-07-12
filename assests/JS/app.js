// global variables
let wins = 0;
let numberOfGuesses = 13;
const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
let shows = ["Dark", "Stranger Things", "Black Mirror", "Money Heist"];

// Simple way to get object item
const videos = {
  "Dark": "show",
  addUrl: function addingUrl(){
    let hidePic = document.getElementById("main-img");
    hidePic.style.visibility="hidden";
    let newUrl = document.getElementById("new-video");
    newUrl.setAttribute('src',"https://www.youtube.com/embed/BZ5OCIJVErw" )},
  

  strangerThings: {
  "Stranger Things": "show",
  addUrl: function addingUrl(){
    let hidePic = document.getElementById("main-img");
    hidePic.style.visibility="hidden";
    let newUrl = document.getElementById("new-video");
    newUrl.setAttribute('src',"https://www.youtube.com/watch?v=mnd7sFt5c3A" )
},

}
}

 //let newVideoUrl = videos[word];
// updateVideo(newVideoUrl);

let word;
let buffer = [];
let correctGuesses = [];

const resetButton = document.getElementById("reset-btn");


let testString = ""

selectRandomWord();
updateGuesses();
updateCurrentWord();

// recently added
function reset(){
  // add hidden class to button element
  correctGuesses = [];
  buffer = [];
  numberOfGuesses = 13;
  selectRandomWord();
  updateGuesses();
  updateCurrentWord();
  updateGuessedLetters(key);
  
}

function selectRandomWord(){
  //This will loop through the shows and save a show under current show as ---- 
  word = shows[Math.floor(Math.random() * shows.length)];
  word.split("").forEach(c => testString += "_");
  console.log(testString)
}


function updateCurrentWord(){
  let currentWord = document.getElementById("current-word");
  currentWord.innerHTML = ""; //this clears the content of the html element
  testString = '';

  for (let i = 0, l = word.length; i < l; i++) {
      let currentLetter = word[i];
      let letterToUse = "_";
      if(currentLetter === " "){
        letterToUse = " ";
      } else if(correctGuesses.indexOf(word[i].toLowerCase()) !== -1){
        letterToUse = word[i];
      }
      let currWord = document.createElement("span");
      currWord.classList.add("current-word-letter");
      currWord.textContent = letterToUse;
      testString += letterToUse;
      currentWord.appendChild(currWord)
    }

    // Perform endgame check
    console.log(testString);
    console.log(word === testString)

    const gameIsOver = !testString.includes("_");   
    if ( gameIsOver ) {
      
      reset();
     return wins++;
      }
      
      console.log('GAME OVER')
    
  
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
      reset()
      
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