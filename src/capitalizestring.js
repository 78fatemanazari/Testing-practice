function capitalizeString(inputString) {
    if (typeof inputString !== 'string') {
      throw new Error('Input must be a string.');
    }
  
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }
  module.exports = capitalizeString;