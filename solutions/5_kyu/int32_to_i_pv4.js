function int32ToIp(int32) {
  const bitString = int32.toString(2).padStart(32, '0');
  
  const ip = [];
  
  for (let i = 0; i < 4; i ++) ip.push(parseInt(bitString.slice(i * 8, i * 8 + 8), 2));
  
  return ip.join('.');
}
