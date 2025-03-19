// Planets and Moons
// Junyu
// March 19th, 2025
// Storing objects in objects, overwriting objects, basic


let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(70);
  myPlanet.display();
}

function mousePressed(){
  //mouseClicked() to behaves differently in certain browsers
  myPlanet.createMoon();
}
class Planet{
  //1. Constructor
  constructor(x,y){
    this.x = x;    this.y = y;    this.s = 100;
    this.moons = [];    

  }
  //2. Class Functions
  display(){
    //draw the planet + all the moons
    circle(this.x, this.y, this.s);

    for(let m of this.moons){
      m.update();
    }
  }

  createMoon(){
    this.moons.push( new Moon(this.x, this.y));
  }
}

class Moon{
  constructor(x,y){
    this.x = x;  this.y = y;   this.speed = 2;
    this.angle = 0;   this.orbitRadius = 80;   this.s = 25;
  }
  update(){
    // handles all internal class function calls
    this.move();
    this.display();
  }

  move(){

  }

  display(){
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }
}
