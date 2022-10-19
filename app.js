const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const winningScoreSelector = document.querySelector('#playTo');
let p1Score = 0;
let p2Score = 0;

let gameOver = false;
let winningScore = 3;

p1Button.addEventListener('click', function(){
    if (!gameOver){
    p1Score++;
    p1Display.innerText = p1Score;
    if (p1Score === winningScore){
        gameOver = true;
        p1Display.classList.add('has-text-success');
        p2Display.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
    }
})

p2Button.addEventListener('click', function(){
    if (!gameOver){
    p2Score++;
    p2Display.innerText = p2Score;
    if (p2Score === winningScore){
        gameOver = true;
        p2Display.classList.add('has-text-success');
        p1Display.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
    }
})

resetButton.addEventListener('click',reset);

winningScoreSelector.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    //If a player changes the winningScore, reset the game.
    reset();
})

function reset(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled = false;
        p2Button.disabled = false;
};

