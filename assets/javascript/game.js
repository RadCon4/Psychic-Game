var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

var updateGuessesLeft = function() {

  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};
var updateGuessesSoFar = function() {

  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event) {
  guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

  if (userGuess == letterToGuess){
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("Good guess.  You might be Psyhic!  Keep playing to know for sure.");
            reset();
        }
    if(guessesLeft == 0){

        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Well, no luck this time.  It doesn't mean you aren't psychic, keep trying!");

        reset();
    }
};