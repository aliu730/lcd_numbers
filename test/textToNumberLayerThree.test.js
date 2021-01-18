const lcdNumberLayerThree = require('../src/lcdNumberLayerThree.js');

test('Should render layer no horizontal line', () => {
    expect(lcdNumberLayerThree(1)).toBe('  |');
});

test('Should render layer one horizontal line for 2', () => {
    expect(lcdNumberLayerThree(2)).toBe('|_ ');
});

test('Should render layer one horizontal line for 3', () => {
    expect(lcdNumberLayerThree(3)).toBe(' _|');
});

test('Should render layer no horizontal line 4', () => {
    expect(lcdNumberLayerThree(4)).toBe('  |');
});

test('Should render layer no horizontal line 5', () => {
    expect(lcdNumberLayerThree(5)).toBe(' _|');
});

test('Should render layer no horizontal line 6', () => {
    expect(lcdNumberLayerThree(6)).toBe('|_|');
});

test('Should render layer no horizontal line 7', () => {
    expect(lcdNumberLayerThree(7)).toBe('  |');
});

test('Should render layer no horizontal line 8', () => {
    expect(lcdNumberLayerThree(8)).toBe('|_|');
});

test('Should render layer no horizontal line 9', () => {
    expect(lcdNumberLayerThree(9)).toBe('  |');
});

test('Should render layer no horizontal line 0', () => {
    expect(lcdNumberLayerThree(0)).toBe('|_|');
});