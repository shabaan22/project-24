class Rect {
    constructor(x, y) {
      var options = {
        'density': 2,
        'friction': 0.8,
        'restitution':0.5,
      };
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.width = 40;
      this.height = 80;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('black')
      fill('blue')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };