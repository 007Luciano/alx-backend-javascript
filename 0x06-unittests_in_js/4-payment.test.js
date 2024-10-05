const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should stub Utils.calculateNumber to return 10 and verify behavior', () => {

        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        const consoleSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);
        
        sinon.assert.calledWithExactly(consoleSpy, 'The total is: 10');

        calculateNumberStub.restore();
        consoleSpy.restore();
    });
});
