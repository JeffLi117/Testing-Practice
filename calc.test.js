const calcPkg = require('./calc');

test('add 1', () => {
    expect(calcPkg.add(2,5)).toBe(7);
});
test('add 2', () => {
    expect(calcPkg.add(53,0)).toBe(53);
});

test('subtract 1', () => {
    expect(calcPkg.subtract(5,5)).toBe(0);
});
test('subtract 2', () => {
    expect(calcPkg.subtract(123,5)).toBe(118);
});
test('subtract 3', () => {
    expect(calcPkg.subtract(0,11)).toBe(-11);
});

test('divide 1', () => {
    expect(calcPkg.divide(6,2)).toBe(3);
});
test('divide 2', () => {
    expect(calcPkg.divide(144,12)).toBe(12);
});
test('divide 3', () => {
    expect(calcPkg.divide(12,0)).toBe(Infinity);
});

test('multiply 1', () => {
    expect(calcPkg.multiply(6,0)).toBe(0);
});
test('multiply 2', () => {
    expect(calcPkg.multiply(2,12)).toBe(24);
});

test('analyzing array 1', () => {
    expect(calcPkg.analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});
test('analyzing array 2, with negatives', () => {
    expect(calcPkg.analyzeArray([-1,33,0,4])).toStrictEqual({
        average: 9,
        min: -1,
        max: 33,
        length: 4
      });
});