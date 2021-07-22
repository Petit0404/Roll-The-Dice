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

    // Récupération des noms de joueurs
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

//Le bouton Roll

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (playGame) {
        // Numéro aléatoire entre 1 et 6
        var dice = Math.floor(Math.random() * 6) + 1;

        // Résultat
        var diceResult = document.querySelector('.dice');
        diceResult.style.display = 'block';
        diceResult.src = '/images/dice-' + dice + '.png';


        // MAJ du score du round si le dé n'est pas 1
        if (dice !== 1) {
            //Ajout du score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Joueur suivant
            nextPlayer();
        }
    }
});

// Le bouton hold

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (playGame) {
        // Ajout du score courant au global
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // requête pour savoir si le joueur est vainqueur
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-frame').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-frame').classList.remove('active');
            playGame = false;
        } else {
            //Joueur suivant
            nextPlayer();
        }
    }
});

//Fonction joueur suivant

function nextPlayer() {

    if (activePlayer === 1) {
        activePlayer = 2;

    } else {
        activePlayer = 1;
    }

    roundScore = 0;

    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';

    document.querySelector('.player-1-frame').classList.toggle('active');
    document.querySelector('.player-2-frame').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}