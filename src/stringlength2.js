function stringLength2(inputString) {
    if (typeof inputString !== 'string') {
      throw new Error('Input must be a string.');
      return;
    }
  
    if (inputString.length < 1 || inputString.length > 10) {
      throw new Error('String must be between 1 and 10 characters long.');
      return;
    }
  
    return inputString.length;
  }
  
  module.exports = stringLength2;