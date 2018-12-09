const dndClasses = require('../../src/models/dndClasses').DnDClasses;

let theClass = "Fighter";
const anotherClass = new dndClasses();

test(`should have match ${theClass}`, () => {
  expect(anotherClass.getStat(theClass)).toBe("STR");
});

test('should give the proper class based on stat', () => {
  expect(anotherClass.getClass(3).name).toBe('Mage');
});

test('List of classes should contain the name rogue', () => {
  let theName = anotherClass.classList().filter(aClass => {
    return aClass.name === 'Rogue';
  });
  expect(theName[0].name).toBe("Rogue");
});

test('List of classes should contain elements', () => {
  expect(anotherClass.classList().length).toBeGreaterThan(0);
});
