'use strict';

// Generate secret number (1-20)
const secret = Math.trunc(Math.random() * 20) + 1;

// Keep it hidden!
document.querySelector('.number').textContent = '?';

// Listen for check button click
document.querySelector('.btncheck').addEventListener('click', () => {
    
    // Get the guessed value and convert to number
    const guess = Number(document.querySelector('.guess').value);
    
    console.log(guess, typeof guess);

    // Check different scenarios
    if (!guess) {
        // No input or 0
        document.querySelector('.message').textContent = '⛔ No number!';
        
    } else if (guess === secret) {
        
        // Correct guess!
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secret;  // Reveal the number
        
    } else if (guess > secret) {
        // Too high
        let number = Number(document.querySelector('.Score').innerText);

        document.querySelector('.message').textContent = '📈 Too high!';
        
        number = number - 2;

        document.querySelector('.Score').innerText = number;
        
        
    } else if (guess < secret) {

        let number = Number(document.querySelector('.Score').innerText);
        // Too low
        document.querySelector('.message').textContent = '📉 Too low!';

        number = number - 2;

        document.querySelector('.Score').innerText = number;
    }

});

document.querySelector('.againBtn').addEventListener('click', () => {

    console.log("ButtonClicked!!!");
   
    document.querySelector('.Score').innerText = 20; 

});
