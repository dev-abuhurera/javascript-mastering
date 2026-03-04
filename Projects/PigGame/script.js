'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0; 
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


//Rolling dice functionality
btnRoll.addEventListener('click', () => {

    if(playing){
        // 1. Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1; // Value between 1 - 6
        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `./images/dice-${dice}.png`;
        // 3. Check the rolled 1
        if(dice !== 1){ 
            //if not then add the dice to the current sore
            currentScore = currentScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore; //dynamic selection
        } else{
            // if true, switch to next player 
            switchPlayer();      
        }
    }

})


btnHold.addEventListener('click', () => {
    if(playing){

    // 1. add the currentScore to the totalScore

        scores[activePlayer] += currentScore;
        // scores[1 = scores[1] + currentScore

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. if the Score >= 100 ----> current player wins else switch

        if(scores[activePlayer] >= 10){
           
            // finish the game 
            playing = false;
            console.log(diceEl.classList.add('hidden'));
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        }else{
        switchPlayer();
        }

    }

})