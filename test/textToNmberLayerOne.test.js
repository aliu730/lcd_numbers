const lcdNumberLayerOne = require('../src/lcdNumberLayerOne.js');

test('Should render layer no horizontal line', () => {
    expect(lcdNumberLayerOne(1)).toBe('   ');
});

test('Should render layer one horizontal line for 2', () => {
    expect(lcdNumberLayerOne(2)).toBe(' _ ');
});

test('Should render layer one horizontal line for 3', () => {
    expect(lcdNumberLayerOne(3)).toBe(' _ ');
});

test('Should render layer no horizontal line 4', () => {
    expect(lcdNumberLayerOne(4)).toBe('   ');
});

test('Should render layer no horizontal line 5', () => {
    expect(lcdNumberLayerOne(5)).toBe(' _ ');
});

test('Should render layer no horizontal line 6', () => {
    expect(lcdNumberLayerOne(6)).toBe(' _ ');
});

test('Should render layer no horizontal line 7', () => {
    expect(lcdNumberLayerOne(7)).toBe(' _ ');
});

test('Should render layer no horizontal line 8', () => {
    expect(lcdNumberLayerOne(8)).toBe(' _ ');
});

test('Should render layer no horizontal line 9', () => {
    expect(lcdNumberLayerOne(9)).toBe(' _ ');
});

test('Should render layer no horizontal line 0', () => {
    expect(lcdNumberLayerOne(0)).toBe(' _ ');
});