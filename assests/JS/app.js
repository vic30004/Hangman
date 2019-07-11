document.addEventListener('DOMContentLoaded', () => {


// global variables

let wins= 0;
let numberOfGuesses= 9;
let lettersGuessed = "";

//Show names, randomly selecting them and converting them to -
let shows= ["Dark","Stranger Things", "Black Mirror", "13 Reasons Why"];		
let answerArray=[];
let randomShow = shows[Math.floor(Math.random()*shows.length)]

for (let i=0; i<shows.length; i++){
	
  answerArray[i]= '_';

}
console.log(answerArray)

let remainingLetters = shows.length;

while (remainingLetters >0){
    console.log(answerArray.join(" "));

}

document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    console.log(key);
});

});