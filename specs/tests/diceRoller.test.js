const Die = require('../../src/models/diceRoller');

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
  const theDie = new Die();
  theDie.withCount(dieCount).ofSize(dieSize).rollDice();
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

test('if the die count is set to zero, it should be one', () => {
  theDie = new Die();
  let dieInfo = theDie.withCount(0).ofSize(dieSize).values();  
  expect(dieInfo.diceCount === 1).toBe(true);
});

test('if the die size is set to zero or less, it should default to six', () => {
  theDie = new Die();
  let dieInfo = theDie.withCount(dieCount).ofSize(-1).values();
  expect(dieInfo.diceSize == 6).toBe(true);
});

test('dice is rolled without setting count or size, it should default to size of 6 and count of 1', () => {
  let aRoller = new Die();
  let dieInfo = aRoller.rollDice().values();
  expect(dieInfo.diceCount === 1).toBe(true);
  expect(dieInfo.diceSize === 6).toBe(true);
});

test('the dice info should be correct after die roll', () => {
  let aRoller = new Die();
  let dieInfo = aRoller.withCount(1).ofSize(4).rollDice().values();
  expect(dieInfo.total > 0 && dieInfo.total < 5).toBe(true);
});

test('the count should be correct', () => {
  let roller = new Die();
  let count = roller.withCount(dieCount).ofSize(6).getCount();
  expect(count === dieCount);
});

test('the size should be correct', () => {
  let die = new Die();
  let size = die.withCount(dieCount).ofSize(dieSize).getSize();
  expect(size === dieSize);
})