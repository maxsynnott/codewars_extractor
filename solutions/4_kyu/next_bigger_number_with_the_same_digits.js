function nextBigger(n) {
  const digits = n.toString().split('').map(num => parseInt(num));
  
  if (digits.join('') == digits.slice().sort().reverse().join('')) {
    return -1;
  } else {
    for (let i = digits.length - 1; i >= 0; i -= 1) {
      if (digits[i] > digits[i - 1]) {
        const start = digits.slice(0, i - 1);
        const end = digits.slice(i - 1);
        
        const first = Math.min(...end.filter(e => e > end[0]));

        end.sort();
        
        end.unshift(end.splice(end.indexOf(first), 1)[0]);
        
        const num = parseInt(start.concat(end).join(''));

        return num;
      };
    };
  };
};
