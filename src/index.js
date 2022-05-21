const getWidth = function(n) {
  if (n < 1) {
    return 5;
  }
  const count = Math.pow(2, n) - 1;
  return (count * 8) + 3;
}

const getHeight = function(n) {
  if (n < 1) {
    return 3;
  }
  const count = Math.pow(2, n) - 1;
  return (count * 4) + 2;
}

const createBoard = function(w, h) {
  let board = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const drawSquare = function(board) {
  board[0][0] = '└';
  board[0][1] = '─';
  board[0][2] = '─';
  board[0][3] = '─';
  board[0][4] = '┘';

  board[1][0] = '│';
  board[1][1] = ' ';
  board[1][2] = ' ';
  board[1][3] = ' ';
  board[1][4] = '│';

  board[2][0] = '┌';
  board[2][1] = '─';
  board[2][2] = '─';
  board[2][3] = '─';
  board[2][4] = '┐';
}

const drawCurve = function(board, pos, n, type) {
  board[pos.y + 1][pos.x - 3] = '┌';
  board[pos.y + 1][pos.x - 2] = '─';
  board[pos.y + 1][pos.x - 1] = '┘';
  board[pos.y + 1][pos.x + 1] = '└';
  board[pos.y + 1][pos.x + 2] = '─';
  board[pos.y + 1][pos.x + 3] = '┐';

  board[pos.y][pos.x - 4] = '─';
  board[pos.y][pos.x - 3] = '┘';
  board[pos.y][pos.x + 4] = '─';
  board[pos.y][pos.x + 3] = '└';

  board[pos.y - 1][pos.x - 4] = '─';
  board[pos.y - 1][pos.x - 3] = '┐';
  board[pos.y - 1][pos.x + 4] = '─';
  board[pos.y - 1][pos.x + 3] = '┌';

  board[pos.y - 2][pos.x - 3] = '└';
  board[pos.y - 2][pos.x - 2] = '─';
  board[pos.y - 2][pos.x - 1] = '┐';
  board[pos.y - 2][pos.x + 1] = '┌';
  board[pos.y - 2][pos.x + 2] = '─';
  board[pos.y - 2][pos.x + 3] = '┘';

  if (n === 1) {
    if (type !== 'down') {
      setCap(board, [ 
        { y: pos.y + 2, x: pos.x - 1 },
        { y: pos.y + 2, x: pos.x },
        { y: pos.y + 2, x: pos.x + 1 },
      ], [ '┌', '─', '┐'] );
    }

    if (type !== 'up') {
      setCap(board, [ 
        { y: pos.y - 3, x: pos.x - 1 },
        { y: pos.y - 3, x: pos.x },
        { y: pos.y - 3, x: pos.x + 1 },
      ], [ '└', '─', '┘'] );
    }

    if (type !== 'right') {
      setCap(board, [ 
        { y: pos.y, x: pos.x - 5 },
        { y: pos.y - 1, x: pos.x - 5 },
      ], [ '┌', '└' ] );
    }

    if (type !== 'left') {
      setCap(board, [ 
        { y: pos.y, x: pos.x + 5 },
        { y: pos.y - 1, x: pos.x + 5 },
      ], [ '┐', '┘' ] );
    }
  }
}

const setCap = function(board, positions, characters) {
  let empty = true;
  for (let i = 0; i < positions.length; i++) {
    if (board[positions[i].y][positions[i].x] !== ' ') {
      empty = false;
    }
  }

  if (empty) {
    for (let i = 0; i < positions.length; i++) {
      board[positions[i].y][positions[i].x] = characters[i];
    }
  }
}

const getStepW = function(n) {
  return getWidth(n) - 3;
}

const getStepH = function(n) {
  return getHeight(n) - 2;
}

const sierpinski = function(n, board, pos, type) {
  if (n < 1) {
    drawSquare(board);
  } else {
    drawCurve(board, pos, n, type);
  }

  if (n > 1) {
    sierpinski(n - 1, board, { x: pos.x, y: pos.y + parseInt(getStepH(n - 1) / 2) + parseInt(getStepH(1) / 2) }, 'up');
    sierpinski(n - 1, board, { x: pos.x, y: pos.y - parseInt(getStepH(n - 1) / 2) - parseInt(getStepH(1) / 2) }, 'down');
    sierpinski(n - 1, board, { x: pos.x + parseInt(getStepW(n - 1) / 2) + parseInt(getStepW(1) / 2), y: pos.y }, 'right');
    sierpinski(n - 1, board, { x: pos.x - parseInt(getStepW(n - 1) / 2) - parseInt(getStepW(1) / 2), y: pos.y }, 'left');
  }
}

const draw = function(board) {
  var result = '\n ';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += board[board.length - i - 1][j];
    }
    result += '\n ';
  }
  return result;
}

const create = function(n) {
  if (n === undefined || n < 0) {
    return '';
  }

  const board = createBoard(getWidth(n), getHeight(n));
  sierpinski(n, board, { x: parseInt(getWidth(n) / 2.0), y: parseInt(getHeight(n) / 2.0) } );
  return draw(board);
}

module.exports = {
  create: create
};