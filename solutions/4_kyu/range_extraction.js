function solution(list) {
  const result = [];
  
  for (let i = 0; i < list.length; i++) {
    let rangeCount = 1;
    
    while(list[i] + rangeCount == list[i + rangeCount]) rangeCount++;
    
    if (rangeCount > 2) {
      const range = list.slice(i, i + rangeCount + 1);
      result.push(range[0] + '-' + range[rangeCount - 1]);
      i += rangeCount - 1;
    } else {
      result.push(list[i]);
    };
  };
  
  return result.join(',');
};
