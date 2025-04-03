'use strict';

let secNumber = Math.trunc(Math.random()*50)+1;
let score = 10;
let highscore = 0;

document.querySelector('.btnCheck').addEventListener('click', function(){
    const guess = Number(document.querySelector('.number').value);
    console.log(guess);
    if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number'
    }
    else if( score === 1){
        document.querySelector('.message').textContent = '😭 You lost the game!'
        document.querySelector('#score').textContent = score - 1;
    }
    else if (guess === secNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number'
    document.querySelector('.mid').textContent = secNumber;
    document.querySelector('body').style.backgroundColor =  '#52006A'
    ;
    console.log(highscore);
    if (score> highscore) {
        highscore=score;
        document.querySelector('#highscore').textContent = highscore;
    }
    }
    else if (guess > secNumber) {
        if((guess-secNumber)<5){
            document.querySelector('.message').textContent = '📈 High!'
            score--;
            document.querySelector('#score').textContent  = score;
        }else{
            document.querySelector('.message').textContent = '📈 Too High!'
            score--;
            document.querySelector('#score').textContent  = score;
        }

    }
    else if (guess < secNumber) {
        if((secNumber-guess)<5){
            document.querySelector('.message').textContent = '📉 Low!'
            score--; 
            document.querySelector('#score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '📉 Too Low!'
            score--; 
            document.querySelector('#score').textContent = score;
        }

    }
});
document.querySelector('.btn').addEventListener('click', function(){
    secNumber = Math.trunc(Math.random()*20)+1;
    score = 20; 
    document.querySelector('.message').textContent = 'Start Guessing....'
    document.querySelector('#score').textContent = score;
    document.querySelector('.mid').textContent = '?' ;
    document.querySelector('body').style.backgroundColor =  '#151515' ;

});
