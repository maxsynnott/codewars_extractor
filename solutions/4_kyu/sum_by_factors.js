function sumOfDivided(lst) {
  const primeCounts = {};
  
  for (let i = 0; i < lst.length; i++) {
    const num = lst[i];
    const arr = [];
    
    let divisor = 2;
    let n = Math.abs(num);
    
    while (n >= 2) {
      if (n % divisor == 0) {
        if (!arr.includes(divisor)) arr.push(divisor);
        n /= divisor;
      } else {
        divisor++;
      };
    };
    
    [...new Set(arr)].forEach(prime => primeCounts[prime] = (primeCounts[prime] || 0) + num);
  };
  
  return Object.entries(primeCounts).map(arr => [+arr[0], arr[1]]);
}