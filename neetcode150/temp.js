var isValidSudoku = function (board) {
  const seen = new Set();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const value = board[r][c];
      if (value !== ".") {
        const rowKey = `row-${r}-${value}`;
        const colKey = `col-${c}-${value}`;
        const squareKey = `square-${Math.floor(r / 3)}-${Math.floor(
          c / 3
        )}-${value}`;

        if (seen.has(rowKey) || seen.has(colKey) || seen.has(squareKey)) {
          return false;
        }

        seen.add(rowKey);
        seen.add(colKey);
        seen.add(squareKey);
    }
}
console.log(seen)
  }
  return true;
};
let board = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];
console.log(isValidSudoku(board));
