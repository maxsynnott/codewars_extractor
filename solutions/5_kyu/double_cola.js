function whoIsNext(names, r){
  const counts = names.map(n => [n, 1]);
  
  for (let i = 0; i < r;) {
    i += counts[0][1];
    counts[0][1] *= 2;
    counts.push(counts.shift());
  }
  
  return counts[counts.length - 1][0];
}
