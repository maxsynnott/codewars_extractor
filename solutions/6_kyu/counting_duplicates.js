function duplicateCount(text) {
  const counts = {};
  
  text = text.toLowerCase();
  
  for (let i = 0; i < text.length; i++) counts[text[i]] = (counts[text[i]] || 0) + 1;

  return Object.values(counts).filter(n => n > 1).length;
}
