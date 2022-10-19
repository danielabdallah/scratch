const p1 = {
    display: document.querySelector('#p1Display'),
button : document.querySelector('#p1Button'),
score : 0
}
const p2 = {
    display: document.querySelector('#p2Display'),
    button : document.querySelector('#p2Button'),
    score: 0
}

const winningScoreSelector = document.querySelector('#playTo');

let gameOver = false;
let winningScore = 3;

function updateScores(player, oponent){
    if (!gameOver){
        player.score++;
        player.display.innerText = player.score;
        if (player.score === winningScore){
            gameOver = true;
            player.display.classList.add('has-text-success');
            oponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            oponent.button.disabled = true;
        }
        }
}

p1.button.addEventListener('click', function(){
updateScores(p1,p2);
})

p2.button.addEventListener('click', function(){
    updateScores(p2,p1);
})

resetButton.addEventListener('click',reset);

winningScoreSelector.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    //If a player changes the winningScore, reset the game.
    reset();
})

function reset(){
    
    gameOver = false;
    for (p of [p1,p2]){
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false;

    };
};

