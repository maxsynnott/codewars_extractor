function partsSums(ls) {
  const sums = [];

  sums[0] = ls.length > 0 ? ls.reduce((a, b) => a + b) : 0;
  
  for (let i = 0; i < ls.length; i++) {
    sums.push(sums[sums.length - 1] - ls[i]);
  }
  
  return sums;
}