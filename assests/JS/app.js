// global variables
let wins = 0;
let numberOfGuesses = 13;
const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
let shows = ["Dark", "Stranger Things", "Black Mirror", "Money Heist"];

// Simple way to get object item
const videos = {
  "Dark": "https://www.youtube.com/embed/BZ5OCIJVErw",
  "Stranger Things": "https://www.youtube.com/embed/mnd7sFt5c3A",
  "Black Mirror": "https://www.youtube.com/embed/V0XOApF5nLU",
  "Money Heist": "https://www.youtube.com/embed/hMANIarjT50",  
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
  
  correctGuesses = [];
  buffer = [];
  numberOfGuesses = 13;
  selectRandomWord();
  updateGuesses();
  updateCurrentWord();
  hideBtn();
  showPicture()
  hideVideo()
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
      endGameWin();
      updateVideo();
      showBtn();
      resetGame();
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

function endGameWin(){
 
  winsTotal.innerHTML=""
  win.textContent ++;
  winsTotal.appendChild(win);
}



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
      showBtn();
      resetGame();
      
    }
  }
}

//hide and show button

function showBtn(){
  document.getElementById("end-game-btn").style.visibility = "visible";
}

function hideBtn(){
  document.getElementById("end-game-btn").style.visibility ="hidden"

}


function resetGame(){
  document.getElementById("end-game-btn").addEventListener('click', function(){
    reset();
  })
}


//hidepicture and show picture

function hidePicture() {
  document.getElementById("main-img").style.display ="none"
};

function showPicture() {
  document.getElementById("main-img").style.display ="block"
};



//hide and show video

function showVideo(){
  document.getElementById("new-video").style.display ="block"
};

function hideVideo() {
  document.getElementById("new-video").style.display ="none"
};

//hiding picture and displaying video once game ends

function updateVideo(){
  hidePicture();
  showVideo();
  const newUrl = videos[word];
  updateVideoSource (newUrl);
};


function updateVideoSource(sourceString){
  document.getElementById("new-video").setAttribute('src', sourceString);
};

// records keys that are entered and saves them to an empty array. 

document.addEventListener('DOMContentLoaded', () => {

    let guess = document.getElementById("guess");


    document.addEventListener('keydown', event => {
        
      const key = event.key.toLowerCase();
      updateGuessedLetters(key);

    });

});