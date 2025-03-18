// Connected Nodes
// Junyu
// March 18, 2025
// OOP Review + Object-Object 


// Global Variables
let nodes = [];   // to hold all our objects
let reach = 150;   


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let n of nodes){
    n.display();
    
  }
}

function mousePressed(){
  // creat one node per mousepress
  nodes.push(new csNode(mouseX, mouseY));

}


class csNode{
  //1. constructor
  constructor(x,y){ // called once per object created
    // properties related to position/ rendering 
    this.x = x;     this.y = y;     this.size = 20;
    this.c = color(random(225), random(255), random(255));

    // properties related to motion
    this.xTime = random(10);   this.yTime = random(10);
    this.timeShift = 0.01;     this.maxSpeed = 5;


  }


  //2. class methods
  display(){
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.size);
  }
}
