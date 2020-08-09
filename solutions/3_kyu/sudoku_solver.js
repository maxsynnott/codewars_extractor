function sudoku(puzzle) {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (puzzle[y][x] == 0) {
        const possibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        const row = puzzle[y];
        const column = puzzle.map(r => r[x]);

        const [gx, gy] = [x, y].map(n => Math.floor(n / 3) * 3);
        const grid = puzzle.slice(gy, gy + 3).map(row => row.slice(gx, gx + 3)).reduce((a, b) => a.concat(b));
        
        const conflicts = [row, column, grid].reduce((a, b) => a.concat(b));
        
        conflicts.forEach((n) => {
          const idx = possibles.indexOf(n);
          if (idx != -1) possibles.splice(idx, 1);
        });
        
        if (possibles.length == 1) {
          puzzle[y][x] = possibles[0];
          
          y = 0;
          x = -1;
        };
      };
    };
  };
  
  return puzzle;
}