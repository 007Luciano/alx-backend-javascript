const request = require('request');
const { expect } = require('chai');

describe('index Page', () => {
  const url = 'http://localhost:7865';

  it('should return status 200', () => new Promise((done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return the correct message', () => new Promise((done) => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});
