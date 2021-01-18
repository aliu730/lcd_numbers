const lcdNumberLayerTwo = require('../src/lcdNumberLayerTwo.js');

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
    expect(lcdNumberLayerTwo(4)).toBe('|_|');
});

test('Should render layer no horizontal line 5', () => {
    expect(lcdNumberLayerTwo(5)).toBe('|_ ');
});

test('Should render layer no horizontal line 6', () => {
    expect(lcdNumberLayerTwo(6)).toBe('|_ ');
});

test('Should render layer no horizontal line 7', () => {
    expect(lcdNumberLayerTwo(7)).toBe('  |');
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