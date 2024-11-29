const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should verify Utils.calculateNumber is called with correct arguments', () => {
    // Create a spy on Utils.calculateNumber method
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Execute the function to test
    sendPaymentRequestToApi(100, 20);

    // Check that the spy was called with specific arguments
    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);
    // Verify that the spy was called once
    sinon.assert.callCount(calculateNumberSpy, 1);

    // Restore the original method
    calculateNumberSpy.restore();
  });
});
