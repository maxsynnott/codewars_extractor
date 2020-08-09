function sumStrings(a, b) {
  const arrLen = Math.max(a.length, b.length) + 1;
  const sum = new Array(arrLen).fill(0);

  const add = (n, i) => {
    const added = n + sum[i] + '';
    sum[i] = +added[added.length - 1];

    if (added.length == 2) add(+added[0], i - 1);
  }

  [a, b] = [a, b].map(s => s.padStart(arrLen, '0'));

  for (let i = a.length - 1; i >= 0; i--) {
    add(+a[i] + +b[i], i);
  };
  
  while (sum[0] == 0) sum.splice(0, 1);
  
  return sum.join('');
};
