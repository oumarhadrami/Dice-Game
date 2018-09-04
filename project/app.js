/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

/*
//set text to dice
document.querySelector('#current-' + activePlayer).textContent = dice
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// get text from view
var x = document.querySelector('#current-0').textContent
console.log(x)
*/

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function () {
  // 1. get a random number
  var dice = Math.floor(6 * Math.random() + 1);

  // 2. Display results
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.setAttribute('src', 'dice-' + dice + '.png');

  // 3. update round score




});


/*if (scores[0] < 100 && scores[1] < 100) {
    activePlayer = updateScore(activePlayer, dice);
    document.getElementById('score-' + activePlayer).textContent =
      scores[activePlayer];
    console.log(activePlayer);
    console.log(scores);
  }*/

/*
function updateScore(activePlayer, dice) {
  if (activePlayer == 0)
    if (dice != 1) {
      roundScore += dice;
      document.getElementById('current-0').textContent = roundScore;
      dice = Math.floor(6 * Math.random() + 1);
    } else {
      activePlayer = 1;
      scores[0] += roundScore;
      roundScore = 0;
    }
  else {
    if (dice != 1) {
      roundScore += dice;
      document.getElementById('current-1').textContent = roundScore;
      dice = Math.floor(6 * Math.random() + 1);
    } else {
      activePlayer = 0;
      scores[1] += roundScore;
      roundScore = 0;
    }
  }
  return activePlayer;
}
*/