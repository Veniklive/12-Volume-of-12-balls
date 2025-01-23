const i = 12;
let j = 1;
let volumeOfBalls = null;
const ballWallThickness = 0.01;
let radius = 0.5 / 2 - ballWallThickness;
while (j <= i) {
  volumeOfBalls += (4 / 3) * Math.PI * radius ** 3;
  radius += ballWallThickness;
  j++;
}
console.log(volumeOfBalls);
