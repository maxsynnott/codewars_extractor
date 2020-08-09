function validSolution(board) {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    const column = board.map(r => r[i]);
    
    const [x, y] = [Math.floor(i / 3) * 3, Math.floor(i / 3) * 3];
    const grid = board.slice(y, y + 3).map(row => row.slice(x, x + 3)).reduce((a, b) => a.concat(b));
    
    for (let j = 1; j < 10; j++) {
      if (!row.includes(j)) return false;
      if (!column.includes(j)) return false;
      if (!grid.includes(j)) return false;
    };
  };
  
  return true;
}