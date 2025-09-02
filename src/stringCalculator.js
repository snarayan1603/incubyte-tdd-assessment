class StringCalculator {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }
    
    // Handle single number
    if (!numbers.includes(',') && !numbers.includes('\n')) {
      return parseInt(numbers);
    }
    
    // TODO: Handle other cases in future commits
    throw new Error('Method not implemented for multiple numbers');
  }
}

module.exports = StringCalculator;