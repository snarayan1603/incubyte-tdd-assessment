class StringCalculator {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }
    
    // Handle single number
    if (!numbers.includes(',') && !numbers.includes('\n')) {
      return parseInt(numbers);
    }
    
    // Handle multiple comma-separated numbers
    if (numbers.includes(',')) {
      const numberArray = numbers.split(',').map(num => parseInt(num.trim()));
      return numberArray.reduce((sum, num) => sum + num, 0);
    }
    
    // TODO: Handle other cases in future commits
    throw new Error('Method not implemented for newline delimiters');
  }
}

module.exports = StringCalculator;