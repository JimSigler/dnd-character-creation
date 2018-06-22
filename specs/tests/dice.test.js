const Die = require('../../src/models/adie').aDie;

let dieRoll = 0;
const dieSize = 6;

beforeAll(() => {
  const theDie = new Die(dieSize);
  dieRoll = theDie.roll();
});

test('should have a value greater than 1', () => {
  expect(dieRoll > 0).toBe(true);
});

test(`should have a value less than ${dieSize}`, () => {
  expect(dieRoll < (dieSize + 1)).toBe(true);
});

test('should default to a 6 sided die if input is non-numeric', () => {
  theDie = new Die('hello');
  expect(theDie.getSize() == 6).toBe(true);
});

test('should default to a 6 sided die if input is less than zero', () => {
  theDie = new Die(-4);
  expect(theDie.getSize() == 6).toBe(true);
});
