const i = 12;
let j = 1;
let volumeOfBalls = 0;
const BALL_WALL_THICKNESS = 0.01;
let radius = 0.5 / 2 - BALL_WALL_THICKNESS;
while (j <= i) {
  volumeOfBalls += (4 / 3) * Math.PI * radius ** 3;
  radius += BALL_WALL_THICKNESS;
  j++;
}
console.log(volumeOfBalls);
