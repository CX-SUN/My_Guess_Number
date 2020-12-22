'use strict';


const defaultMsg = "Start guessing...";
const defaultNum = "?";
const defaultScore = 20;
const defaultHighest = 0;

let defaultSecret = Math.trunc(20*Math.random()) + 1;
let guess;
let score = defaultScore;
let gameState = 'game';
let highestScore = defaultHighest;

function checkLoss(score){
    if(score === 0) {
        document.querySelector('.message').textContent = "You loss the game 😭 Play again?";
        document.querySelector('body').style.backgroundColor = 'rgb(168, 63, 63)'; 
        gameState = 'loss';
    }
}

function clickHandler(){
    guess = document.querySelector('.guess').value; 

    if (!guess) {
        document.querySelector('.message').textContent = "😧No number";
    } else if (gameState === 'loss'){
        return
    } else if (gameState === 'win') {
        return;
    } else{
        let guessNum = Number(guess);
        if (guessNum === defaultSecret){
            document.querySelector('.message').textContent = "You win!🥇 Play again?";
            gameState = 'win';   
            document.querySelector('.number').textContent = defaultSecret;   
            document.querySelector('body').style.backgroundColor = '#60b347'; 
            document.querySelector('.number').style.width = '30rem';
            if (score > highestScore) {
                highestScore = score;
            }
            document.querySelector('.highscore').textContent = highestScore;
        } else if (guessNum < defaultSecret){
            document.querySelector('.message').textContent = "Too low!"        
            score--;
            checkLoss(score);
            document.querySelector('.score').textContent = score;           
        } else if (guessNum > defaultSecret){
            document.querySelector('.message').textContent = "Too high!"        
            score--;
            checkLoss(score);
            document.querySelector('.score').textContent = score;           
        }

    }

}

function againHandler(){
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = defaultScore;
    document.querySelector('.number').textContent = defaultNum;
    defaultSecret = Math.trunc(20*Math.random()) + 1;
    score = defaultScore;
    gameState = 'game';

}




document.querySelector('.check').addEventListener('click', 
clickHandler);
document.querySelector('.again').addEventListener('click', 
againHandler);

