// "import" the sum function from operations.js
const {sum} = require('./operations')

//TODO: uncomment the next line
const {subtract} = require('./operations')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
});

test('adds 0 + 4 to equal 4', () => {
    expect(sum(0, 4)).toBe(4)
});

test('adds -1 + (-7) to equal -8', () => {
    expect(sum(-1, -7)).toBe(-8)
});

test('subtracts 5 from 9 to equal 4', () => {
    expect(subtract(9, 5)).toBe(4);
})

test('subtracts -5 from 12 to equal 17', () => {
    expect(subtract(12, -5)).toBe(17);
})

test('subtracts 2 from 10 to equal 8', () => {
    expect(subtract(10, 2)).toBe(8);
})
