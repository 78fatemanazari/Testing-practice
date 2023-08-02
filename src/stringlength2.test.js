const stringLength2 = require('./stringlength2');

test("Determines a string's length", () => {
  // Arrange
  const b = 'Disneyland';

  // Act
  const result = stringLength2(b);

  // Assert
  expect(result).toBe(10);
});

test('check empty string', () => {
  // Arrange
  const b = '';

  // Assert
  expect(() => stringLength2(b)).toThrowError('String must be between 1 and 10 characters long.');
});

test('check string with more than 10 characters', () => {
  // Arrange
  const b = 'ThisStringIsTooLong';

  // Assert
  expect(() => stringLength2(b)).toThrowError('String must be between 1 and 10 characters long.');
});