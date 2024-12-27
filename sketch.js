let x = 2;
let musicStarted = false;  // Add flag to track if music has started

function preload() {
  img = loadImage("Asset 2.png");
  img2 = loadImage("Asset 3@2x.png")
  font = loadFont('Satoshi-Black.otf');
  bgmusic = loadSound('You (Instrumental Version).mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  pixelDensity(2);
  
  img.resize(0, 800);
  img2.resize(0, 654);
}

function draw() {
  background('#8BC34A');
  
  imageMode(CENTER);
  rectMode(CENTER);
  
  image(img2, windowWidth/2, windowHeight/1.8, img2.width/2, img2.height/2);
  image(img, windowWidth/2, windowHeight/x, img.width/2, img.height/2);

  push();
  fill('rgba(19,18,18,0.38)');
  textSize(18);
  textAlign(CENTER);
  text('[ click to open box ♥︎ ]', windowWidth/2, windowHeight/1.2);
  pop();
}

function mouseClicked() {
  if (!musicStarted) {
    bgmusic.play();
    musicStarted = true;
  }
  
  if (x === 2) {
    x = 4.9;
  } else {
    x = 2;
  }
}