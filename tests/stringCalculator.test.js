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

    test('should return sum for two comma-separated numbers', () => {
      // Arrange
      const input = '1,2';
      const expected = 3;

      // Act
      const result = calculator.add(input);

      // Assert
      expect(result).toBe(expected);
    });

    test('should return sum for multiple comma-separated numbers', () => {
      // Arrange
      const input = '1,2,3,4,5';
      const expected = 15;

      // Act
      const result = calculator.add(input);

      // Assert
      expect(result).toBe(expected);
    });

    test('should handle newlines between numbers', () => {
      // Arrange
      const input = '1\n2,3';
      const expected = 6;

      // Act
      const result = calculator.add(input);

      // Assert
      expect(result).toBe(expected);
    });

    test('should support custom delimiters', () => {
      // Arrange
      const input = '//;\n1;2';
      const expected = 3;

      // Act
      const result = calculator.add(input);

      // Assert
      expect(result).toBe(expected);
    });
  });
});
