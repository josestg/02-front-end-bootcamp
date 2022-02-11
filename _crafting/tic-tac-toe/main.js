const cells = document.querySelectorAll(".cell");
const gameOverStatus = document.getElementById("game-over-status");
const nextPlayerStatus = document.getElementById("next-player-status");
const startButton = document.getElementById("start-button");
const banner = document.getElementById("banner");
const gameBoard = document.getElementById("board");

const filledCellClassName = "filled";
const hideElementClassName = "hide";
const unstartedClassName = "unstarted";
const xPlayerSymbol = "X";
const oPlayerSymbol = "O";
const xPlayerHitPower = 1;
const oPlayerHitPower = 4;

let currentPlayer = xPlayerSymbol;

function getWinnerByTotalScore(score) {
  switch (score) {
    case 3:
      return xPlayerSymbol;
    case 12:
      return oPlayerSymbol;
    default:
      return null;
  }
}

function evaluateWinnerOnHorizontal(board) {
  // horizontal cells
  for (let i = 0; i < 3; i++) {
    let score = board[i].reduce((prev, curr) => prev + curr, 0);
    const winner = getWinnerByTotalScore(score);
    if (winner !== null) {
      return winner;
    }
  }

  return null;
}

function evaluateWinnerOnVertical(board) {
  for (let i = 0; i < 3; i++) {
    let score = 0;
    for (let j = 0; j < 3; j++) {
      score += board[j][i];
    }

    const winner = getWinnerByTotalScore(score);
    if (winner !== null) {
      return winner;
    }
  }

  return null;
}

function evaluateWinnerOnDiagonal(board) {
  const leftDiagonalScore = board[0][0] + board[1][1] + board[2][2];
  const winner = getWinnerByTotalScore(leftDiagonalScore);
  if (winner !== null) {
    return winner;
  }

  const rightDiagonalScore = board[0][2] + board[1][1] + board[2][0];
  return getWinnerByTotalScore(rightDiagonalScore);
}

function getNextPlayerSymbol(currentPlayer) {
  return currentPlayer === xPlayerSymbol ? oPlayerSymbol : xPlayerSymbol;
}

function createBoard() {
  const boardValues = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  cells.forEach((cell) => {
    const textContent = cell.textContent;
    const label = cell.getAttribute("aria-label");
    const [x, y] = label.split(",").map((e) => parseInt(e));

    if (textContent == xPlayerSymbol) {
      boardValues[x][y] = xPlayerHitPower;
    }

    if (textContent == oPlayerSymbol) {
      boardValues[x][y] = oPlayerHitPower;
    }
  });

  return boardValues;
}

function evaluateWinner() {
  const boardValues = createBoard();

  // horizontal cells
  let winner = evaluateWinnerOnHorizontal(boardValues);
  if (winner !== null) {
    return winner;
  }

  winner = evaluateWinnerOnVertical(boardValues);
  if (winner !== null) {
    return winner;
  }

  // diagonal cells
  return evaluateWinnerOnDiagonal(boardValues);
}

function isGameOver() {
  let allFilled = true;
  cells.forEach((cell) => {
    allFilled = allFilled && cell.classList.contains(filledCellClassName);
  });

  return allFilled;
}

function handleGameFrame(cell) {
  if (cell.classList.contains(filledCellClassName)) {
    alert("Already filled");
    return;
  }

  cell.classList.add(filledCellClassName);
  cell.textContent = currentPlayer;
  const winner = evaluateWinner();

  const hasAWinner = winner !== null;

  if (isGameOver() || hasAWinner) {
    startButton.classList.remove(hideElementClassName);
    startButton.textContent = "Restart?";
    gameOverStatus.classList.remove(hideElementClassName);
    gameBoard.appendChild(banner);
    gameBoard.classList.add(unstartedClassName);

    if (hasAWinner) {
      nextPlayerStatus.textContent = `Player ${currentPlayer} win`;
      return;
    } else {
      nextPlayerStatus.textContent = `Game tie`;
      return;
    }
  }

  let nextPlayer = getNextPlayerSymbol(currentPlayer);
  nextPlayerStatus.textContent = `Player ${nextPlayer} turn`;
  currentPlayer = nextPlayer;
}

cells.forEach((cell) => {
  cell.addEventListener("click", () => handleGameFrame(cell));
});

startButton.addEventListener("click", () => {
  startButton.classList.add(hideElementClassName);
  gameOverStatus.classList.add(hideElementClassName);
  nextPlayerStatus.classList.remove(hideElementClassName);
  banner.remove();
  nextPlayerStatus.textContent = `Player ${currentPlayer} turn`;
  gameBoard.classList.remove(unstartedClassName);
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove(filledCellClassName);
  });
});
