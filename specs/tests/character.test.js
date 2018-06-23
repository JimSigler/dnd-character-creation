const character = require('./../../src/models/character')();

let theCharacter = '';
beforeAll( () => {
    theCharacter = character.getCharacter();
    let theClass = theCharacter.character.class;

});

test('the character should have all six stats', () => {
    expect(Object.keys(theCharacter.character.stats).length == 6).toBe(true);
});

test('it should have a class', () => {
    expect(theCharacter.character.class != null).toBe(true);
});

// Normally we should only have one expect per test; however, these are all
// related and basically the same check over different values.
test('stats should be in range', () => {    
    expect(isInRange(theCharacter.character.stats['str'], 3, 18)).toBe(true);
    expect(isInRange(theCharacter.character.stats['dex'], 3, 18)).toBe(true);
    expect(isInRange(theCharacter.character.stats['con'], 3, 18)).toBe(true);
    expect(isInRange(theCharacter.character.stats['wis'], 3, 18)).toBe(true);
    expect(isInRange(theCharacter.character.stats['int'], 3, 18)).toBe(true);
    expect(isInRange(theCharacter.character.stats['cha'], 3, 18)).toBe(true);
});

test('class should be one of the allowed classes', () => {
    allowedClasses = character.getClasses();
    expect(isInArray(theCharacter.character.class, allowedClasses)).toBe(true);
});

function isInArray(theElement, theArray){
    let found = false;
    if(theArray.length > 0){
        theArray.forEach( (item) => {
            if(item === theElement){
                found = true;
            }
        })
    }
    return found;
}

function isInRange(number, min, max){
    return (max > number || min < number);
}