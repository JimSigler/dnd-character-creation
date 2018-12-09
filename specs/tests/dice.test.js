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
    expect(theDie.getSize() === 20).toBe(true);
  });
  
  test('should default to a 6 sided die if input is non-numeric', () => {
    theDie = new Die();
    theDie.ofSize("hello");
    expect(theDie.getSize() === 6).toBe(true);
  });
  
  test('should default to a 6 sided die if input is less than zero', () => {
    theDie = new Die();
    theDie.ofSize(-4);
    expect(theDie.getSize() === 6).toBe(true);
  });

  test('if size is not set and the die is rolled, it should default to d6', () => {
    let crazyDie = new Die();
    crazyDie.roll();
    expect(crazyDie.getSize() === 6).toBe(true);
  });

  describe('specific sizes', () => {
    test('d4 should give a correct value', () => {
      let aD4 = new Die();
      let theRoll = aD4.d4().roll().getValue();
      let dieSize = aD4.getSize();
      expect(theRoll > 0 && theRoll < 5).toBe(true);
      expect(dieSize === 4).toBe(true);
    });

    test('d6 should give a correct value', () => {
      let aD6 = new Die();
      let theRoll = aD6.d6().roll().getValue();
      let dieSize = aD6.getSize();
      expect(theRoll > 0 && theRoll < 7).toBe(true);
      expect(dieSize === 6).toBe(true);
    });

    test('d8 should give a correct value', () => {
      let aD8 = new Die();
      let theRoll = aD8.d8().roll().getValue();
      let dieSize = aD8.getSize();
      expect(theRoll > 0 && theRoll < 9).toBe(true);
      expect(dieSize === 8).toBe(true);
    });

    test('d10 should give a correct value', () => {
      let aD10 = new Die();
      let theRoll = aD10.d10().roll().getValue();
      let dieSize = aD10.getSize();
      expect(theRoll > 0 && theRoll < 11).toBe(true);
      expect(dieSize === 10).toBe(true);
    });

    test('d12 should give a correct value', () => {
      let aD12 = new Die();
      let theRoll = aD12.d12().roll().getValue();
      let dieSize = aD12.getSize();
      expect(theRoll > 0 && theRoll < 13).toBe(true);
      expect(dieSize === 12).toBe(true);
    });

    test('d20 should give a correct value', () => {
      let aD20 = new Die();
      let theRoll = aD20.d20().roll().getValue();
      let dieSize = aD20.getSize();
      expect(theRoll > 0 && theRoll < 21).toBe(true);
      expect(dieSize === 20).toBe(true);
    });

    test('percentile should give a correct value', () => {
      let aDP = new Die();
      let theRoll = aDP.percentile().roll().getValue();
      let dieSize = aDP.getSize();
      expect(theRoll > 0 && theRoll < 101).toBe(true);
      expect(dieSize === 100).toBe(true);
    });
  });
});
