function reverseString(inputString) {
    if (typeof inputString !== 'string') {
      throw new Error('Input must be a string.');
    }
  
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString.charAt(i);
    }
  
    return reversedString;
  }
  
  module.exports = reverseString;