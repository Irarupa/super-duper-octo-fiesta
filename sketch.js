
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var box;
var boxes=[]
 
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);
     
    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(10,10);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
     ground = new Ground(200,380,400,20); 
    }
 
function mousePressed() {
        box = new Box(mouseX,mouseY,40,40);
        boxes.push(box)
    
}
 
function draw() {
    // Draw all the elements including the slider that 
     
    background(255);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value(50,100);
   Engine.update(engine);
    // Use a for loop to show all the boxes
    for(var i = 0;i<boxes.length;i++){
      boxes[i].display();  
    }
     ground.display();
    }
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
//function Box(x, y, w, h, options) {

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    //this.show = function () {
        
   // }
//}