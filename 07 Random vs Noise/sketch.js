// Random vs Noise
// Junyu
// Feb 28th, 2025

// extension: cs30-p5
// A look at different ways yo use
// unpredictability in our programs..

let mySeed;
let noiseStart = 5;
let noiseTime;
let noiseSpeed = 0.1;


function setup() {
  createCanvas(800, 800);
  textAlign(CENTER, CENTER);
  mySeed = random(1000);
  frameRate(2100);
  // randomNumbers();
}


function draw() {
  noiseTime = noiseStart;
  randomSeed(mySeed);
  background(220);
  randomNumbers();
  noiseNumbers();
  noiseStart += noiseSpeed;
}


function noiseNumbers(){
  // display a line of several numbers
  let x = 100;
  while(x <= 500){
    let randomNum = noise(noiseTime); //0-1 (normalized)
    randomNum = map(randomNum,0,1,1,100);  //1-100
    randomNum = round(randomNum);

    fill(140,220,140);  noStroke();
    circle(x,400,randomNum);
    fill(0);
    text(randomNum, x, 400);
    x += 50;
    noiseTime += noiseSpeed;
  }
}


function randomNumbers(){
  // display a line of serveral numbers generated
  // with the random() function    1-100
  // - these should be uniformly distributed

  let x = 100; 
  while(x <= 500){
    let randomNum = round(random(1,100));
    fill(200,80,80);  noStroke();
    circle(x, 200, randomNum);
    fill(0);
    text(randomNum, x, 200);
    x += 20;
  }
}