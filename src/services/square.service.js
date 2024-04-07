const SquaresService = {
  goodSquares: (square) => {
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
  },
  validateSquare: (square) => {
    if (square.length >= 1000) return false;
    for (element of square) {
      if (!Array.isArray(element) || element.length !== square.length) {
        console.log('Invalid 1');
        return false;
      }
    }
    for (element of square) {
      for (e of element) {
        if (e !== 0 && e !== 1) {
          console.log('Invalid 2');
          return false;
        }
      };
    }
    return true;

  }
};
module.exports = SquaresService;