const stringCalculator = require('./string_calculator');
const { assert } = require('chai');

describe('stringCalculatorMust', () => {
    it('take empty string and return zero', () => {
        const result = stringCalculator("");
        assert.strictEqual(result, 0);
    });
    it('take a string and return an interger', () => {
        const result = stringCalculator("4");
        assert.strictEqual(result, 4);
    });
    it('take two numbers as strings and return sum as interger', () => {
        const result = stringCalculator("1,2");
        assert.strictEqual(result, 3);
    });
    it('accept an unknown amount of numbers and return its sum as an interger', () => {
        const result = stringCalculator("1,2,3,4,5,6,7,8,9");
        assert.strictEqual(result, 45);
    });
});