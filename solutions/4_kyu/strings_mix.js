// This is terrible but not in the mood for refactoring atm

function mix(s1, s2) {
  const result = [];
  
  const charCounts = [s1, s2].map((s) => {
    const charCount = {};
    
    for (let i = 0; i < s.length; i++) {
      const charCode = s.charCodeAt(i);
      
      if (charCode >= 97 && charCode <= 122) {
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
      };
    };
    
    return charCount;
  });
  
  for (let i = 97; i <= 122; i++) {
    const c = String.fromCharCode(i);
    
    const [c1, c2] = [(charCounts[0][c] || 0), (charCounts[1][c] || 0)];
    
    const max = Math.max(c1, c2);
    
    if (max > 1) {
      const prepend = c1 == c2 ? '=' : c1 > c2 ? '1' : '2';
      let append = ""
      
      for (let j = 0; j < max; j++) append += c;
      
      result.push(prepend + ':' + append);
    }
  }
  
  result.sort((a, b) => {
    if (a.length == b.length) {
      [a, b] = [a, b].map(s => s.replace(/(=|:)/g, ''));
      return a.localeCompare(b);
    }
    
    return b.length - a.length;
  })
  
  
  return result.join('/');
}
