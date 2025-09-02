class StringCalculator {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }
    
    // Handle single number (no delimiters)
    if (!numbers.includes(',') && !numbers.includes('\n')) {
      return parseInt(numbers);
    }
    
    // Handle multiple numbers with any delimiter
    const delimiters = [',', '\n'];
    let numberString = numbers;
    
    // Split by any delimiter and filter out empty strings
    for (const delimiter of delimiters) {
      if (numberString.includes(delimiter)) {
        const numberArray = numberString.split(delimiter)
          .map(num => num.trim())
          .filter(num => num !== '')
          .map(num => parseInt(num));
        return numberArray.reduce((sum, num) => sum + num, 0);
      }
    }
    
    // Fallback for single number
    return parseInt(numbers);
  }
}

module.exports = StringCalculator;