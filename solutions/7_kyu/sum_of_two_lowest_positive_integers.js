function sumTwoSmallestNumbers(numbers) {  
  const smallestNumbers = numbers.sort((a, b) => a - b).slice(0, 2);
  
  return smallestNumbers.reduce((a, b) => a + b);
}