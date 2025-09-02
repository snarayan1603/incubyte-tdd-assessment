class StringCalculator {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }
    
    // Check for custom delimiter
    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      if (delimiterEndIndex !== -1) {
        const customDelimiter = numbers.substring(2, delimiterEndIndex);
        const numbersPart = numbers.substring(delimiterEndIndex + 1);
        
        // Split by custom delimiter and filter out empty strings
        const numberArray = numbersPart
          .split(customDelimiter)
          .map(num => num.trim())
          .filter(num => num !== '')
          .map(num => parseInt(num));
        
        // Check for negative numbers
        const negativeNumbers = numberArray.filter(num => num < 0);
        if (negativeNumbers.length > 0) {
          throw new Error(`negative numbers not allowed [${negativeNumbers.join(', ')}]`);
        }
        
        return numberArray.reduce((sum, num) => sum + num, 0);
      }
    }
    
    // Handle single number (no delimiters)
    if (!numbers.includes(',') && !numbers.includes('\n')) {
      const num = parseInt(numbers);
      if (num < 0) {
        throw new Error(`negative numbers not allowed [${num}]`);
      }
      return num;
    }
    
    // Handle multiple numbers with mixed delimiters
    // First split by newlines, then by commas
    const lines = numbers.split('\n');
    const allNumbers = [];
    
    for (const line of lines) {
      if (line.includes(',')) {
        const commaNumbers = line.split(',').map(num => num.trim()).filter(num => num !== '');
        allNumbers.push(...commaNumbers);
      } else if (line.trim() !== '') {
        allNumbers.push(line.trim());
      }
    }
    
    // Convert to integers and check for negative numbers
    const numberArray = allNumbers.map(num => parseInt(num));
    const negativeNumbers = numberArray.filter(num => num < 0);
    
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed [${negativeNumbers.join(', ')}]`);
    }
    
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;