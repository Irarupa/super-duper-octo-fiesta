class Box {
    constructor(x,y,width,height) {
      var options = {
          'restitution':1,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      fill("red");
      strokeWeight(4);
      stroke("brown");
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  