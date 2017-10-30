const Die = require('../../models/aDie').aDie;

let dieRoll = 0;
const dieSize = 6;

beforeAll(() => {
  let theDie = new Die(dieSize);
  dieRoll = theDie.roll();
});

test(`should have a value between 1 and ${dieSize}`, () => {
  expect(dieRoll > 0).toBe(true);
  expect(dieRoll < (dieSize + 1)).toBe(true);
});

test('should default to a 6 sided die if input is non-numeric', () => {
  theDie = new Die("hello");
  expect(theDie.getSize() == 6).toBe(true);
});

test('should default to a 6 sided die if input is less than zero', () => {
  theDie = new Die(-4);
  expect(theDie.getSize() == 6).toBe(true);
});
