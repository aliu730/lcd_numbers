const lcdNumberLayerTwo = require('../src/lcdNumberLayerTwo.js');

// test('Should change numeric 1 to LCD 1', () => {
//    expect(lcdNumber("1")).toBe(" \n |\n |"); 
// });

// test('Should change numeric 2 to LCD 2', () => {
//     expect(lcdNumber("2")).toBe(" _\n _|\n|_"); 
// });

// test('Should change numeric 3 to LCD 3', () => {
//     expect(lcdNumber("3")).toBe(" _\n _|\n _|"); 
// });

// test('Should change numeric 4 to LCD 4', () => {
//     expect(lcdNumber("4")).toBe("\n|_|\n  |"); 
// });

// test('Should change numeric 5 to LCD 5', () => {
//     expect(lcdNumber("5")).toBe(" _\n|_\n _|"); 
// });

// test('Should change numeric 6 to LCD 6', () => {
//     expect(lcdNumber("6")).toBe(" _\n|_\n|_|"); 
// });

// test('Should change numeric 7 to LCD 7', () => {
//     expect(lcdNumber("7")).toBe(" _\n  |\n  |"); 
// });

// test('Should change numeric 8 to LCD 8', () => {
//     expect(lcdNumber("8")).toBe(" _ \n|_|\n|_|"); 
// });

// test('Should change numeric 9 to LCD 9', () => {
//     expect(lcdNumber("9")).toBe(" _\n|_|\n  |"); 
// });

// test('Should change numeric 0 to LCD 0', () => {
//     expect(lcdNumber("0")).toBe(" _\n| |\n|_|"); 
// });

test('Should render layer no horizontal line', () => {
    expect(lcdNumberLayerTwo(1)).toBe('  |');
});

test('Should render layer one horizontal line for 2', () => {
    expect(lcdNumberLayerTwo(2)).toBe(' _|');
});

test('Should render layer one horizontal line for 3', () => {
    expect(lcdNumberLayerTwo(3)).toBe(' _|');
});

test('Should render layer no horizontal line 4', () => {
    expect(lcdNumberLayerTwo(4)).toBe('| |');
});

test('Should render layer no horizontal line 5', () => {
    expect(lcdNumberLayerTwo(5)).toBe('|_');
});

test('Should render layer no horizontal line 6', () => {
    expect(lcdNumberLayerTwo(6)).toBe('|_');
});

test('Should render layer no horizontal line 7', () => {
    expect(lcdNumberLayerTwo(7)).toBe(' |');
});

test('Should render layer no horizontal line 8', () => {
    expect(lcdNumberLayerTwo(8)).toBe('|_|');
});

test('Should render layer no horizontal line 9', () => {
    expect(lcdNumberLayerTwo(9)).toBe('|_|');
});

test('Should render layer no horizontal line 0', () => {
    expect(lcdNumberLayerTwo(0)).toBe('| |');
});