let xOff = 0;
let yOff = 1;
let zOff = 2;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw() {
  background(0);

  // noStroke();
  noFill();
  stroke(255,0,111);
  translate(noise(xOff)*100, noise(yOff)*height*0.01, -noise(zOff)*600);
  rotateY(millis() / 100000);
  sphere(400);

  noFill();
  stroke(88,4,255);
  translate(noise(xOff)*100, noise(yOff)*height*0.01, -noise(zOff)*600);
  rotateY(millis() / 1000);
  sphere(400);

  noFill();
  stroke(4,255,97);
  translate(noise(xOff)*90, noise(yOff)*height*0.01, -noise(zOff)*600);
  rotateY(millis() / 1000);
  sphere(400);

  
  xOff+=0.001;
  yOff+=0.001;
  zOff+=0.001;
}