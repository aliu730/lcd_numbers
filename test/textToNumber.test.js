const numberToLcd = require('../src/textToNumber.js');

test('Should lcd style single digit number', () => {
    expect(numberToLcd("1")).toBe("   \n  |\n  |")
}) 

test('Should lcd style multiple digit numbers', () => {
    expect(numberToLcd("12")).toBe("    _ \n  | _|\n  ||_ ");
});

test('Should output nothing if no numbers', () => {
    expect(numberToLcd("")).toBe("")
}) 
