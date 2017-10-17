const Die = require('../../models/diceRoller');

let dieRoll = 0;
let numberOfRolls = 0;
let count = 0;
let size = 0;

// size and count of die to test
const dieSize = 20;
const dieCount = 2;

beforeAll(() => {
  const theDie = new Die(dieCount, dieSize);
  theDie.rollDice();
  dieRoll = theDie.getTotal();
  numberOfRolls = theDie.getRolls().length;
  count = theDie.count;
  size = theDie.size;
});

test(`should have a value between ${dieCount} and ${dieSize}`, () => {
  expect( (dieRoll > (dieCount - 1)) && (dieRoll < ((dieSize * dieCount) + 1))).toBe(true);
});

test(`should have ${dieCount} number of rolls`, () => {
  expect(numberOfRolls).toBe(dieCount);
});

test(`should have count of ${dieCount}`, () => {
  expect(count).toBe(dieCount);
});

test(`should have size ${dieSize}`, () => {
  expect(size).toBe(dieSize);
});
