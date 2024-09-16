const tiles = document.querySelectorAll('.tile');
const keyboard = document.querySelectorAll('.key');
let currentGuess = '';
let guessIndex = 0;
const wordToGuess = 'apple'; // Placeholder; will be randomized in the backend

// Helper function to check guess
function checkGuess(guess) {
    const guessArray = guess.split('');
    guessArray.forEach((letter, i) => {
        let tile = tiles[guessIndex + i];

        if (letter === wordToGuess[i]) {
            tile.classList.add('correct');
        } else if (wordToGuess.includes(letter)) {
            tile.classList.add('present');
        } else {
            tile.classList.add('absent');
        }
    });
    guessIndex += 5;
    currentGuess = '';
}

// Add keyboard functionality
keyboard.forEach(key => {
    key.addEventListener('click', () => {
        const keyLetter = key.textContent;

        if (keyLetter === 'ENTER') {
            if (currentGuess.length === 5) {
                checkGuess(currentGuess);
            }
        } else if (keyLetter === 'DEL') {
            if (currentGuess.length > 0) {
                currentGuess = currentGuess.slice(0, -1);
                tiles[guessIndex + currentGuess.length].textContent = '';
            }
        } else {
            if (currentGuess.length < 5) {
                tiles[guessIndex + currentGuess.length].textContent = keyLetter;
                currentGuess += keyLetter;
            }
        }
    });
});