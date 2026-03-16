function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0]?.length ?? 0;

  if (rows === 0 || cols === 0) {
    return false;
  }

  if (word.length > rows * cols) {
    return false;
  }

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(row: number, col: number, index: number): boolean {
    if (board[row][col] !== word[index]) {
      return false;
    }

    if (index === word.length - 1) {
      return true;
    }

    const current = board[row][col];
    board[row][col] = "#";

    for (const [rowOffset, colOffset] of directions) {
      const nextRow = row + rowOffset;
      const nextCol = col + colOffset;

      if (
        nextRow < 0 ||
        nextRow >= rows ||
        nextCol < 0 ||
        nextCol >= cols ||
        board[nextRow][nextCol] === "#"
      ) {
        continue;
      }

      if (dfs(nextRow, nextCol, index + 1)) {
        board[row][col] = current;
        return true;
      }
    }

    board[row][col] = current;
    return false;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
}