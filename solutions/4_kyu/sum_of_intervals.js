function sumIntervals(intervals){
  let nums = new Set();
  
  intervals.forEach((interval) => {
    for (let j = interval[0]; j < interval[1]; j++) nums.add(j);
  });
  
  return nums.size;
};
