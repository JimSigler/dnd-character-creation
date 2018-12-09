const Die = require('../../src/models/adie');

let dieRoll = 0;
let dieSize = 6;

describe('variable size die test', () => {
  beforeAll(() => {
    let theDie = new Die();
    dieRoll = theDie.ofSize(dieSize).roll().getValue();
  });
  
  test('should have a value greater than 1', () => {
    expect(dieRoll > 0).toBe(true);
  });
  
  test(`should have a value less than ${dieSize}`, () => {
    expect(dieRoll < (dieSize + 1)).toBe(true);
  });
  
  test('should allow positive integer die size', () => {
    theDie = new Die();
    theDie.ofSize(20);
    expect(theDie.getSize() == 20).toBe(true);
  });
  
  test('should default to a 6 sided die if input is non-numeric', () => {
    theDie = new Die();
    theDie.ofSize("hello");
    expect(theDie.getSize() == 6).toBe(true);
  });
  
  test('should default to a 6 sided die if input is less than zero', () => {
    theDie = new Die();
    theDie.ofSize(-4);
    expect(theDie.getSize() == 6).toBe(true);
  });
});
