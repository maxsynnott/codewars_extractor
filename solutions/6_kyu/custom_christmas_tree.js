function customChristmasTree(chars, n) {
  let tree = [];
  let charIndex = 0;
  
  for (let i = 0; i < n; i++) {
    let row = [];

    for (let k = 0; k < i + 1; k++) {
      row.push(chars[charIndex % chars.length]);
      charIndex++;
    };

    tree.push(row.join(" ").padStart(n * 2 - n + i, " "));
  }
  
  for (let i = 0; i < 1 + Math.floor((n - 3) / 3); i++) tree.push("|".padStart((n * 2) / 2, " "));
  
  return tree.join("\n");
}