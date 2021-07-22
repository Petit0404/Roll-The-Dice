let scores, roundScore, activePlayer, playGame;
let newGame = document.getElementById('newGame');
let startMenuOk = document.getElementById("start-menu-ok");
let gameMenu = document.getElementById("gameMenu");
let player1 = document.getElementById('name-1');
let player2 = document.getElementById('name-2');
let Name1 = document.getElementById("Player1-name");
let Name2 = document.getElementById("Player2-name");


document.querySelector('.btn-new').addEventListener('click', newGame);

//Initialisation du jeu avec valeurs remises à 0

function startNewGame() {
    scores = [0, 0];
    activePlayer = 1;
    roundScore = 0;
    playGame = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    document.querySelector('.player-1-frame').classList.remove('winner');
    document.querySelector('.player-2-frame').classList.remove('winner');
    document.querySelector('.player-1-frame').classList.remove('active');
    document.querySelector('.player-2-frame').classList.remove('active');
    document.querySelector('.player-1-frame').classList.add('active');

    player1.innerText = Name1.value;
    player2.innerText = Name2.value;
}

//les boutons de menu
newGame.onclick = () => {
    gameMenu.classList.add("is-active");
}

startMenuOk.onclick = () => {
    player1.innerText = Name1.value;
    player2.innerText = Name2.value;
    gameMenu.classList.remove("is-active");
    startNewGame();
}

//initialisation du jeu 
startNewGame();