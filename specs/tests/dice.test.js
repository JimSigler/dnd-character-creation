const Die = require('../../models/aDie');

let dieRoll = 0;
const dieSize = 6;

beforeAll(() => {
  const theDie = new Die(dieSize);
  dieRoll = theDie.roll();
});

test(`should have a value between 1 and ${dieSize}`, () => {
  expect(dieRoll > 0).toBe(true);
  expect(dieRoll < (dieSize + 1)).toBe(true);
});
