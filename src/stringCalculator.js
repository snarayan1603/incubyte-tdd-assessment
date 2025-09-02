class StringCalculator {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }
    // TODO: Handle other cases in future commits
    throw new Error('Method not implemented for non-empty strings');
  }
}

module.exports = StringCalculator;