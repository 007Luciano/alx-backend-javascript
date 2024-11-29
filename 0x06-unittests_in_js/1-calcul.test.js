const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
        assert.strictEqual(calculateNumber('SUM',1.4, 4.5), 6);
    });

    it('should return -4 when inputs are 1.4 and 4.5', () => {
        assert.strictEqual(calculateNumber('SUBTRACT',1.4, 4.5), -4);
    });

    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
        assert.strictEqual(calculateNumber('DIVIDE',1.4, 4.5), 0.2);
    });

    it('should return Error when inputs are 1.4 and 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE',1.4, 0), 'Error');
    });
});
