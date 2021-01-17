// const lcdNumber = require('textToNumber');

test('Should change numeric 1 to LCD 1', () => {
   expect(lcdNumber("1").toBe(" \n |\n |")); 
});

test('Should change numeric 2 to LCD 2', () => {
    expect(lcdNumber("2").toBe("_\n_|\n|_")); 
});

test('Should change numeric 3 to LCD 3', () => {
    expect(lcdNumber("3").toBe("_\n_|\n|_")); 
});

test('Should change numeric 4 to LCD 4', () => {
    expect(lcdNumber("4").toBe("|_|\n |\n |")); 
});

test('Should change numeric 5 to LCD 5', () => {
    expect(lcdNumber("5").toBe("|_|\n |\n |")); 
});

test('Should change numeric 6 to LCD 6', () => {
    expect(lcdNumber("6").toBe("_\n_|\n|_|")); 
});

test('Should change numeric 7 to LCD 7', () => {
    expect(lcdNumber("7").toBe("_\n |\n |")); 
});

test('Should change numeric 8 to LCD 8', () => {
    expect(lcdNumber("7").toBe("_\n|_|\n|_|")); 
});

test('Should change numeric 9 to LCD 9', () => {
    expect(lcdNumber("9").toBe("_\n|_|\n |")); 
});

test('Should change numeric 0 to LCD 0', () => {
    expect(lcdNumber("0").toBe("_\n| |\n|_|")); 
});