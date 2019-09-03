// Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// npm test

function findWinner(players) {
  return players.reduce((winner, p) => {
    const player = p;
    player.totalScore = p.scores.reduce((total, score) => total + score, 0);
    return winner.totalScore < player.totalScore ? player : winner;
  }, { totalScore: 0 }).name;
}

module.exports = {
  findWinner,
};
