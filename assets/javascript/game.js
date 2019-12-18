// Setting variables for scoring, W/L, guess counters, and letters.
var wins = 0;
var losses = 0;
var guesses = 10;
var guessedLetters = [];
var letters = 
    ["a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Setting computer choice parameters
var randomLetterIndex = Math.floor(Math.random() * letters.length);
var compLetter = letters[randomLetterIndex];

console.log(compLetter)

// Game mechanics
document.onkeyup = function (event) {
    var userLetter = event.key;

    console.log(userLetter)
    // Win condition
    if (userLetter === compLetter) {
        wins++;
        guesses = 10;
        guessedLetters = [];
        console.log(wins)
    }
    // Wrong guesses
    else {
        guesses--;
        guessedLetters.push(userLetter);
        document.getElementById("letters guessed").innerHTML = guessedLetters;
        console.log(guessedLetters)
        console.log(guesses)
    }
    // Fail
    if (guesses === 0) {
        losses++;
        guessedLetters = [];
        guesses = 10;
        console.log(losses)
    }

    // Write to HTML
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses remaining").innerHTML = guesses;
    

}