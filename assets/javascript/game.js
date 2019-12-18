// Setting variables for scoring, W/L, guess counters, and letters.
var wins = 0;
var losses = 0;
var guesses = 10;
var letters = 
    ["a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Setting computer choice peramaters
var randomLetterIndex = Math.floor(Math.random() * letters.length);
var compChoice = letters[randomLetterIndex];

console.log(compChoice)