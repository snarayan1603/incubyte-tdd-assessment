const StringCalculator = require('../src/stringCalculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  describe('add method', () => {
    test('should return 0 for empty string', () => {
      // Arrange
      const input = '';
      const expected = 0;

      // Act
      const result = calculator.add(input);

      // Assert
      expect(result).toBe(expected);
    });

    test('should return the number for single number input', () => {
      // Arrange
      const input = '1';
      const expected = 1;

      // Act
      const result = calculator.add(input);

      // Assert
      expect(result).toBe(expected);
    });
  });
});
