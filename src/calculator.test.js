// import { add, subtract, divide, multiply } from "./calculator";
const Calculator = require('./calculator');

test('Calculates a sum of two numbers', () => {
  // Arrange
  Calculator1 = new Calculator();
  const first = 10;
  const second = 16;

  // Act
  const result = Calculator1.add(first, second);

  // Assert
  expect(result).toBe(26);
});

test('Calculates a subtraction of two numbers', () => {
  // Arrange
  Calculator2 = new Calculator();
  const first = 20;
  const second = 12;

  // Act
  const result = Calculator2.subtract(first, second);

  // Assert
  expect(result).toBe(8);
});

test('Multiplies two numbers', () => {
  // Arrange
  Calculator3 = new Calculator();
  const first = 25;
  const second = 12;

  // Act
  const result = Calculator3.multiply(first, second);

  // Assert
  expect(result).toBe(300);
});

test('Divides two numbers', () => {
  // Arrange
  Calculator4 = new Calculator();
  const first = 25;
  const second = 5;

  // Act
  const result = Calculator4.divide(first, second);

  // Assert
  expect(result).toBe(5);
});