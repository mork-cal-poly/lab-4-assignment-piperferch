function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  drawBunny(0, 0, "pink", "rgb(248,134,154)", 255, 0, 255);
}

function drawBackground(x, y, r, g, b) {

  push();
  
  translate(x, y);
  
  fill('#FFA522');
  noStroke();
  rect(0, 0, 400);
  
  //background blue
  fill(82, 219, 255);
  noStroke();
  rect(15, 15, 370, 370, 25, 25, 25, 25);
  
  //background rectangles
  //dark orange
  fill(220, 105, 32);
  noStroke();
  rect(275, 50, 25, 100);
  //light orange
  fill(255, 173, 45);
  noStroke();
  rect(300, 90, 25, 100);
  
  //transparent rectangle background
  noStroke();
  fill(r, g, b, 100);
  rect(0, 0, 400, 400);
  
  pop();

  }

function drawBunny(x, y, bodyColor, headColor, r, g, b) {
  
  drawBackground(x, y, r, g, b);

  push();
  
  //I wanted the bunny off-center, same as Lab 1
  translate(x + 170, y + 220);
  
  //body
  fill(bodyColor);
  noStroke();
  rect(-170, 50, 190, 130, 50, 55, 0, 0);
  
  //ears
  //back ear
  fill(65, 105, 225);
  noStroke();
  ellipse(-30, -110, 50, 170);
  //front ear
  fill(47, 141, 255);
  noStroke();
  ellipse(-65, -100, 50, 170);
  
  //inner ear
  //same light orange
  fill(255, 173, 45);
  noStroke();
  ellipse(-65, -90, 40, 140);
  
  //head
  fill(headColor);
  noStroke();
  ellipse(10, 5, 180);
  
  //eye socket
  fill(58, 59, 60);
  noStroke();
  arc(5, -20, 40, 40, PI, PI/4, PIE);
  
  //eyeball
  //iris
  fill(220, 105, 32);
  noStroke();
  ellipse(5, -20, 30, 30);
  fill(255, 173, 45);
  noStroke();
  ellipse(5, -20, 25, 25);
  //"pupil"
  fill(58, 59, 60);
  noStroke();
  ellipse(6, -20, 17, 17);
  
  //tired eyelid
  fill(58, 59, 60);
  noStroke();
  arc(5, -25, 30, 25, PI, 0, OPEN);
  
  //nose
  fill(65, 105, 225);
  noStroke();
  triangle(78, 20, 108, 20, 93, 45);
  
  //whiskers
  stroke(255, 255, 255);
  strokeWeight(2);
  line(75, 25, 40, 15);
  line(77, 30, 25, 32);
  line(76, 35, 35, 43);
  
  pop();
  
}
