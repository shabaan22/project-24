class Square {
    constructor(x, y) {
      var options = {
        'density': 1,
        'friction': 0.5,
        'restitution':1,
      };
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.width = 40;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('yellow')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };