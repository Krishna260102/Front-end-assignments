// Generate a random number between 0 and 99
const randomNumber = Math.floor(Math.random() * 100);

// Initialize variables
let userGuess;
const userGuesses = [];

// Print the random number for testing purposes
console.log(randomNumber);

// Loop to keep prompting the user for guesses
while (true) {
    // Prompt the user for a guess
    userGuess = parseInt(prompt("Enter your guess: "));
    
    // Check if the guess is correct
    if (userGuess === randomNumber) {
        alert('Congratulations! You guessed the number..');
        alert('Number of guesses taken = '+userGuesses.length+'\nThe guesses were '+userGuesses);
        break;
    }
    
    // Provide hints based on the guess
    else if (randomNumber - userGuess > 0) {
        alert("Too low! Try again.");
    } else {
        alert("Too high! Try again.");
    }

    // Keep track of the guesses
    userGuesses.push(userGuess);
}