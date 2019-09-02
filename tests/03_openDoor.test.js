const { openDoor } = require('../03_openDoor');

function makeItem(name, hasCoffee) {
  item = new Object();
  item.name = name;
  item.hasCoffee = hasCoffee;
  return item;
}

describe('openDoor', () => {
  let hash = [];
  test('should return true if "Simon" and hasCoffee with single object', () => {
    hash = [];
    hash.push(makeItem('Simon', true));
    expect(openDoor(hash)).toBe(true);
  });
  test('should return true if "Simon" and hasCoffee with multiple objects', () => {
    hash = [];
    hash.push(makeItem('Simon', true));
    hash.push(makeItem('Scott', true));
    expect(openDoor(hash)).toBe(true);
  });
  test('should return false if !"Simon" and hasCoffee', () => {
    hash = [];
    hash.push(makeItem('Scott', true));
    expect(openDoor(hash)).toBe(false);
  });
  test('should return false if "Simon" and !hasCoffee', () => {
    hash = [];
    hash.push(makeItem('Simon', false));
    expect(openDoor(hash)).toBe(false);
  });
  test('should return false if empty array passed', () => {
    hash = [];
    expect(openDoor(hash)).toBe(false);
  });
});
