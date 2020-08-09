function longest(str) {
  let longestString = '';
  let currentString = '';
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= str[i - 1]) {
      currentString += str[i];
    } else {
      currentString = str[i];
    }
    
    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
  }
  
  return longestString;
}