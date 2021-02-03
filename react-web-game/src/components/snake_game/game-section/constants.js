const CANVAS_SIZE = [600, 600];
const SNAKE_START = [
  [8, 7],
  [8, 8]
];
const APPLE_START = [8, 3];
const SCALE = 40;
const SPEED = 1000;
const DIRECTIONS = {
  "UP": [0, -1], // up
  "Down": [0, 1], // down
  "Left": [-1, 0], // left
  "Right": [1, 0] // right
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
};