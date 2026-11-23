function rotateOnceCW(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  return Array.from({ length: cols }, (_, r) =>
    Array.from({ length: rows }, (_, c) => grid[rows - 1 - c][r])
  );
}

function rotateCorners(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let cornerSum = 0;
  let nonCornerSum = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const w = toNum(matrix[r][c]);
      const isCorner = (r === 0 || r === rows - 1) && (c === 0 || c === cols - 1);
      if (isCorner) cornerSum += w;
      else nonCornerSum += w;
    }
  }

  const rotations =
    rows === 2 && cols === 2 ? 0 : (((cornerSum * nonCornerSum) % 4) + 4) % 4;

  let grid = matrix.map((row) => [...row]);
  for (let i = 0; i < rotations; i++) {
    grid = rotateOnceCW(grid);
  }

  return [
    [grid[0][0], grid0.length - 1]],
    [grid[grid.length - 1][0], gridgrid.length - 1.length - 1]],
  ];
}
// Which programming language(s) are you planning to publish this kata in first, and would you like help writing random test cases for your test suite?

// answer in js

// JavaScript
function toNum(val) {
  if (typeof val === "boolean") return val ? 1 : 0;
  if (typeof val === "number") return val;
  return val.charCodeAt(0);
}

function rotateOnceCW(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  return Array.from({ length: cols }, (_, r) =>
    Array.from({ length: rows }, (_, c) => grid[rows - 1 - c][r])
  );
}

function rotateCorners(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let cornerSum = 0;
  let nonCornerSum = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const w = toNum(matrix[r][c]);
      const isCorner = (r === 0 || r === rows - 1) && (c === 0 || c === cols - 1);
      if (isCorner) cornerSum += w;
      else nonCornerSum += w;
    }
  }

  const rotations =
    rows === 2 && cols === 2 ? 0 : (((cornerSum * nonCornerSum) % 4) + 4) % 4;

  let grid = matrix.map((row) => [...row]);
  for (let i = 0; i < rotations; i++) {
    grid = rotateOnceCW(grid);
  }

  return [
    [grid[0][0], grid0.length - 1]],
    [grid[grid.length - 1][0], gridgrid.length - 1.length - 1]],
  ];
}