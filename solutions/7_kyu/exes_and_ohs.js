function XO(str) {
  str = str.toLowerCase();
  
  let xCount = 0;
  let oCount = 0;
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    if (char == 'x') {
      xCount ++;
    } else if (char == 'o') {
      oCount ++;
    }
  }
  
  return xCount == oCount;
}