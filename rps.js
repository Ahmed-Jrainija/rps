let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function update () {
  document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


/*
if (score === null) { or you can write if (!score)
score = {
  wins: 0,
  losses: 0,
  ties: 0
};
}
*/

function playGame(playermove) {
let move = pickpc();

let result = '';

if (playermove === 'Rock') {
  if (move === 'Rock') {
  result = 'Tie';
} else if (move === 'Paper') {
  result = 'Lose';
} else {
  result = 'Win';
}
} 
else if (playermove === 'Paper') {
  if (move === 'Rock') {
  result = 'Win';
} else if (move === 'Paper') {
  result = 'Tie';
} else {
  result = 'Lose';
}
} 
else if (playermove === 'Scissors') {
  if (move === 'Rock') {
  result = 'Lose';
} else if (move === 'Paper') {
  result = 'Win';
} else {
  result = 'Tie';
}
}

if (result === 'Win') {
  score.wins += 1;
} else if (result === 'Tie') {
  score.ties += 1;
} else if (result === 'Lose') {
  score.losses += 1;
}

//localStorage only works with strings.
localStorage.setItem('score', JSON.stringify (score));

if (result === 'Win' || result === 'Lose') {
  document.querySelector('.result').innerHTML = `You ${result}.`;
} else if (result === 'Tie') {
  document.querySelector('.result').innerHTML = `${result}.`;
}

document.querySelector(`.decisions`).innerHTML = `You <img class="pic" src="${playermove}-emoji.png"> - <img class="pic" src="${move}-emoji.png"> Computer`;

update();
}

function pickpc () {
  let move = '';
  const xbox = Math.random ();
  if(xbox>=0 && xbox<1/3) {
    move = 'Rock';
  } else if (xbox >= 1/3 && xbox <2/3) {
    move = 'Paper';
  } else {
    move = 'Scissors';
  }
  return move;
}