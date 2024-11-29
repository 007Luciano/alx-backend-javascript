function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }

  return Promise.reject(new Error('The API is down'));
}

module.exports = getPaymentTokenFromAPI;
