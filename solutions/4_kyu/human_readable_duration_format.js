function formatDuration (seconds) {
  const sentence = []
  const units = [
    ['year', 31536000],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1]
  ]
  
  for (let i = 0; i < units.length; i++) {
    const [unit, value] = units[i];
    
    const quantity = Math.floor(seconds / value);
    if (quantity >= 1) sentence.push(`${quantity} ${unit}${quantity > 1 ? 's' : ''}`);
    seconds -= quantity * value;
  }
  
  if (sentence.length == 0) {
    return 'now'
  } else if (sentence.length < 2) {
    return sentence[0]
  } else {
    return [sentence.slice(0, -1).join(', '), sentence[sentence.length - 1]].join(" and "); 
  }
}
