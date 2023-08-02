const capitalizeString = require('./capitalizestring');

test('Capitalizes first letter of a string', () => {
  // Arrange
  const inputString = 'italia';

  // Act
  const result = capitalizeString(inputString);

  // Assert
  expect(result).toBe('Italia');
});