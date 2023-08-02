const reverseString = require('./reversestring');

test('Reverses a string', () => {
  // Arrange
  const inputString = 'Argentina';

  // Act
  const result = reverseString(inputString);

  // Assert
  expect(result).toBe('anitnegrA');
});