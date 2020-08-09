snail = function(array) {
  const path = [];
  
  if (array[0].length > 0) {
    const size = array.length
    let nPad = 0;
    let ePad = 0;
    let sPad = 0;
    let wPad = 0;
    
    while (nPad < 10) {
      for (let x = wPad; x < size - ePad; x++) path.push(array[nPad][x]);
      if (path.length == size ** 2) break;
      nPad++;

      for (let y = nPad; y < size - sPad; y++) path.push(array[y][size - ePad - 1]);
      if (path.length == size ** 2) break;
      ePad++;

      for (let x = size - ePad - 1; x >= wPad; x--) path.push(array[size - sPad - 1][x]);
      if (path.length == size ** 2) break;
      sPad++;

      for (let y = size - sPad - 1; y >= nPad; y--) path.push(array[y][wPad]);
      if (path.length == size ** 2) break;
      wPad++;
    }
  }
  
  return path;
}