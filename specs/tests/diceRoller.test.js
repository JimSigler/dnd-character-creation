const Die = require('../../src/models/diceRoller').DiceRoller;

let dieRoll = 0;
let numberOfRolls = 0;
let count = 0;
let size = 0;
let theRolls = [];

// size and count of die to test
const dieSize = 20;
const dieCount = 50;

beforeAll(() => {
  // setup the diceROller and roll the dice
  const theDie = new Die(dieCount, dieSize);
  theDie.rollDice();
  dieRoll = theDie.getTotal();
  numberOfRolls = theDie.getRolls().length;
  count = theDie.count;
  size = theDie.size;
  theRolls = theDie.getRolls();
});

test(`should have a value between ${dieCount} and ${dieSize}`, () => {
  expect((dieRoll > (dieCount - 1)) && (dieRoll < ((dieSize * dieCount) + 1))).toBe(true);
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

test('no die roll should be less than one', () => {
  theRolls.forEach((dieFace) => {
    expect(dieFace > 0).toBe(true);
  });
});

test(`no die roll should be greater than ${dieSize} + 1`, () => {
  theRolls.forEach((dieFace) => {
    expect(dieFace < (dieSize + 1)).toBe(true);
  });
});
