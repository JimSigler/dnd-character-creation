const dndClasses = require('../../models/dndClasses').DnDClasses;

let theClass = "Fighter";
const anotherClass = new dndClasses();

test(`should have match ${theClass}`, () => {
  expect(anotherClass.getStat(theClass)).toBe("STR");
});

test('should give the proper class based on stat', () => {
  expect(anotherClass.getClass(0)).toBe('Fighter');
});

test('List of classes should contain rogue', () => {
  expect(anotherClass.classList()).toContain('Rogue');
});

test('List of classes should contain elements', () => {
  expect(anotherClass.classList().length).toBeGreaterThan(0);
});
