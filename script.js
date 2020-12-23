'use strict';


const defaultMsg = "Start guessing...";
const defaultNum = "?";
const defaultScore = 20;
const defaultHighest = 0;
const rangeUP = 20;
const rangeDWN = 1;

const messageClass = document.querySelector('.message');
const numberClass = document.querySelector('.number');
const bodyClass = document.querySelector('body');
const scoreClass = document.querySelector('.score');
const guessClass = document.querySelector('.guess');
const highscoreClass = document.querySelector('.highscore');

let score = defaultScore;
let gameState = 'game';
let highestScore = defaultHighest;
let defaultSecret = Math.trunc(rangeUP*Math.random()) + rangeDWN;
let guess;

function checkLoss(score){
    if(score === 0) {
        messageClass.textContent = "You loss the game 😭 Play again?";
        bodyClass.style.backgroundColor = 'rgb(168, 63, 63)'; 
        gameState = 'loss';
    }
}

function clickHandler(){
    guess = guessClass.value; 
    if (!guess) {
        messageClass.textContent = "😧No number";
    } else if (gameState === 'loss'){
        return
    } else if (gameState === 'win') {
        return;
    } else{
        let guessNum = Number(guess);
        if (guessNum === defaultSecret){
            messageClass.textContent = "You win!🥇 Play again?";
            gameState = 'win';   
            numberClass.textContent = defaultSecret;   
            bodyClass.style.backgroundColor = '#60b347'; 
            numberClass.style.width = '30rem';
            if (score > highestScore) {
                highestScore = score;
            }
            highscoreClass.textContent = highestScore;
        } else if (guessNum < defaultSecret){
            messageClass.textContent = "Too low!"        
            score--;
            checkLoss(score);
            scoreClass.textContent = score;           
        } else if (guessNum > defaultSecret){
            messageClass.textContent = "Too high!"        
            score--;
            checkLoss(score);
            scoreClass.textContent = score;           
        }

    }

}

function againHandler(){
    guessClass.value = '';
    bodyClass.style.backgroundColor = '#222';
    numberClass.style.width = '15rem';
    messageClass.textContent = 'Start guessing...';
    scoreClass.textContent = defaultScore;
    numberClass.textContent = defaultNum;
    defaultSecret = Math.trunc(rangeUP*Math.random()) + rangeDWN;
    score = defaultScore;
    gameState = 'game';
}




document.querySelector('.check').addEventListener('click', 
clickHandler);
document.querySelector('.again').addEventListener('click', 
againHandler);

