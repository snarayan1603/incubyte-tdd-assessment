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
  });
});
