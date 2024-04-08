/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidRow(board, row) {
    const seen = new Set();
  
    for (let i = 0; i < 9; i++) {
      let num = board[row][i];
      if (num !== "." && seen.has(num)) {
        return false;
      }
      seen.add(num);
    }
    return true;
  }
function isValidCol(board, col) {
    const seen = new Set();
    for (let i = 0; i < 9; i++) {
      let num = board[i][col];
      if (num !== "." && seen.has(num)) {
        return false;
      }
      seen.add(num);
    }
    return true;
  }
function isValidGrid(board, startRow, startCol) {
    const seen = new Set();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const num = board[startRow + i][startCol + j];
        if (num !== "." && seen.has(num)) {
          return false;
        }
        seen.add(num);
      }
    }
    return true;
  }
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    if (!isValidRow(board, i)) {
      return false;
    }
  }
  for (let j = 0; j < 9; j++) {
    if (!isValidCol(board, j)) {
      return false;
    }
  }
  for (let i = 0; i < 9; i+= 3) {
    for (let j = 0; j < 9; j+= 3) {
      if (!isValidGrid(board, i, j)) {
        return false;
      }
    }
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
