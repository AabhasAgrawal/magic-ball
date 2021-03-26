function setup() {
  createCanvas(800,400);

hr = hour();
mn = minute();
sc = second();

let h = hour();
text('Current hour:\n' + h, 5, 50);

let m = minute();
text('Current minute: \n' + m, 5, 50);

let s = second();
text('Current second: \n' + s, 5, 50);

 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  // Scale the mouseX value from 0 to 720 to a range between 0 and 175
  let c = map(mouseX, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
//  ellipse(width/2, height/2, d, d);


arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
}