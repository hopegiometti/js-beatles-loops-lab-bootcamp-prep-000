// add solution here
function theBeatlesPlay(players, instruments) {
  var allPlayers = [];
  for (let i = 0; i < players.length; i++) {
    allPlayers.push(players[i] + " plays " + instruments[i])
  }
  return allPlayers
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
    while (i < facts.length) {
      newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    number += 1
  } while (number < 15);
  return array;
}
