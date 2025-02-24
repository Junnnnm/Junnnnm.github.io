// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tSize = width/10;
let x; // declaration only


function setup(){
  //runs once, right at the strart
  createCanvas(windowWidth, windowHeight);
  x = width/2; // initialization, do in setup()
  rectMode(CENTER);
}


function draw(){
  background(2000);
  //print("Current Frame: " + frameCount); //console.log()



  // ----------Mouse Event---------
  fill("green"); //fill/stroke can use color strings
  textSize(tSize);
  text(mouseX + ", " + mouseY + " " + mouseButton, mouseX. mouseY);

  // ----------Keyboard Section----------
  fill(255,200,100);
  square(x, 200, 50, 5);

  if(keyIsDown(RIGHT_ARROW)){
    X = X - 5;
    if (x < 0){
      x = width;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    X + 5;
    if (x > width){
      x = 0;
    }

  }
}

function mousePressed(){
  //this is called automatically.. do not call it
  //yourself
  //this is called once per mouse button press
  tSize = random(5,100);
}
