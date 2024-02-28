let clicked = false;
let foxY = 0;
let s = 0;

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
  if (clicked) {
    drawFoxy(340);
}
  if (foxY >= 225) {
    push();
    scale(s);
  if (s <= 1) {
    s = s + 0.01;
    }
  drawBunny(0, 0, "orange","rgb(187,132,31)", 255, 255, 0);
  }
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

function drawFoxy(x) {
  push();
  translate(x, foxY);  
  scale(0.75);
  
  fill("rgb(219,143,3)");
  
  // arms
  push();
  rotate(PI/4);
  ellipse(-40, 30, 15, 140);
  pop();
  
  push();
  rotate(7*PI/4);
  ellipse(40, 30, 15, 140);
  pop();
  
  // tail
  push();
  rotate(PI/4);
  ellipse(20, 60, 30, 120);
  fill("white");
  arc(19, 100, 26, 40, 0, PI + PI/5, PIE);
  pop();
  
  // legs and body
  rect(-30, 50, 15, 160);
  rect(15, 50, 15, 160);
  rect(-35, -60, 70, 140, 30);
  
  // belly
  fill("rgba(255,228,179,0.81)");
  rect(-25, -40, 50, 100, 30);
  
  fill("rgb(219,143,3)");
  
  // ears
  triangle(-32, -100, -10, -118, -35, -125);
  triangle(32, -100, 10, -118, 35, -125);
  
  // nose
  triangle(-20, -80, 20, -80, 0, -60);
  fill("black");
  ellipse(0, -60, 7);
  
  // head shape
  noStroke();
  fill("rgb(219,143,3)");
  ellipse(0, -100, 65, 55);

  // eyes
  fill("white");
  ellipse(-15, -95, 9);
  ellipse(15, -95, 9);
  fill("black");
  ellipse(-15, -95, 6);
  ellipse(15, -95, 6);

  // whiskers
  stroke("black");
  line(-30, -75, -5, -65);
  line(30, -75, 5, -65);
  line(-33, -60, -5, -62);
  line(33, -60, 5, -62);
  
  pop();

  if (foxY <= 250) {
    foxY = foxY + 5;
  }
}


function mouseClicked() {
  if (mouseX < 250 &&
      mouseX > 100 && 
      mouseY > 175 && 
      mouseY < 300) {
    clicked = !clicked;
    foxY = 0;
    s = 0;
  }
}
