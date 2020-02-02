/* Mohamed Emad Khalifa
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var maxScore = 20;
var score=[0,0]
var currentScore = 0;
var activePlayer = 0;
var isGameAvailable=true;

document.getElementById("score-0").innerHTML= 0;
document.getElementById("score-1").innerHTML = 0;      
document.getElementById("current-0").innerHTML = 0;  
document.getElementById("current-1").innerHTML = 0;
  
         
document.getElementById("diceGame").style.display="none";

var btnroll = document.querySelector('.btn-roll');
var btnnew = document.querySelector('.btn-new');
var btnhold = document.querySelector('.btn-hold');

btnroll.addEventListener('click',()=>{
    if (isGameAvailable){
        var randomNum = Math.floor((Math.random() * 6)) + 1;

        currentScore += randomNum;

        var imgdic = document.getElementById("diceGame");
        imgdic.style.display = "block";
        imgdic.src = 'dice-' + randomNum + '.png';

        document.getElementById("current-" + activePlayer).innerText = currentScore;
    }  

});


btnhold.addEventListener('click',()=>{
    if (isGameAvailable) {
        score[activePlayer] += currentScore;
        currentScore = 0;
        document.getElementById("score-" + activePlayer).innerText = score[activePlayer];

        if (score[activePlayer] >= maxScore) {
            document.getElementById('name-' + activePlayer).innerText = 'Winner!';
            document.getElementById('current-' + activePlayer).innerText = '0';
            document.getElementById('diceGame').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            isGameAvailable = false;
        }
        else{
        moveToNextPlayer();
            }
    }

});



function moveToNextPlayer(){
    currentScore=0;
    document.getElementById('current-' + activePlayer).innerText = currentScore;
    document.getElementById('diceGame').style.display = 'none';

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}


btnnew.addEventListener('click',()=>{

    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    isGameAvailable = true;

    document.getElementById('name-0').innerText = 'Player 1';
    document.getElementById('name-1').innerText = 'Player 2';

    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.getElementById('diceGame').style.display = 'none';
    document.getElementById('score-0').innerText = '0';
    document.getElementById('score-1').innerText = '0';
    document.getElementById('current-0').innerText = '0';
    document.getElementById('current-1').innerText = '0';
});










