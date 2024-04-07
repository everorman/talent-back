const SquaresService = {
  goodSquares: function (square) {
    const n = square.length;
    let count = 0;

    function isInnerSquare(row, col, size) {
      for (let i = row; i < row + size; i++) {
        for (let j = col; j < col + size; j++) {
          if (square[i][j] !== 1) {
            return false;
          }
        }
      }
      return true;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (square[i][j] === 1) {
          let maxSize;
          if (n - i < n - j) {
            maxSize = n - i;
          } else {
            maxSize = n - j;
          }
          for (let size = 1; size <= maxSize; size++) {
            if (isInnerSquare(i, j, size)) {
              count++;
            } else {
              break;
            }
          }
        }
      }
    }
    return count;
  }
};
module.exports = SquaresService;