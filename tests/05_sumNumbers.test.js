const { findWinner } = require('../05_sumNumbers');

class Player {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }
}

let players = [];
describe('findWinner', () => {
  test('Should return the winner when winner is first in array', () => {
    players = [new Player('James', [50, 100, 85]), new Player('Nathan', [40, 90, 86])];
    expect(findWinner(players)).toBe('James');
  });
  test('Should return the winner when winner is second in array', () => {
    players = [new Player('James', [40, 90, 86]), new Player('Nathan', [50, 100, 85])];
    expect(findWinner(players)).toBe('Nathan');
  });
  test('Should return the first player when both players are tied', () => {
    players = [new Player('Nathan', [50, 100, 85]), new Player('James', [50, 100, 85])];
    expect(findWinner(players)).toBe('Nathan');
  });
});
