const stringPkg = require('./string');

test('Capitalization 1', () => {
  expect(stringPkg.capitalize("lowercase stuff")).toBe("Lowercase stuff");
});
test('Capitalization 2', () => {
    expect(stringPkg.capitalize("the other one")).toBe("The other one");
});

test('Reversal 1', () => {
    expect(stringPkg.reverseString("hello")).toBe("olleh");
});
test('Reversal 2', () => {
    expect(stringPkg.reverseString("Weird Stuff")).toBe("ffutS drieW");
});

test('caesarCipher 1', () => {
    expect(stringPkg.caesarCipher("defend the east wall of the castle", 1)).toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
})
test('caesarCipher 2, higher shift', () => {
    expect(stringPkg.caesarCipher("something something special text", 3)).toBe("vrphwklqj vrphwklqj vshfldo whaw");
})
test('caesarCipher 4, with upper case letters', () => {
    expect(stringPkg.caesarCipher("TeST", 1)).toBe("UfTU");
})
test('caesarCipher 3, with negative key value', () => {
    expect(stringPkg.caesarCipher("bcdefghijklmnopqrstuvwxyza", -1)).toBe("abcdefghijklmnopqrstuvwxyz");
}) 

