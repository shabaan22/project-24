class Sand {
    constructor(x, y) {
      var options = {
        'density': 1,
        'friction': 0.5,
        'restitution':1.5,
      }
      this.body = Bodies.rectangle(x, y, 15, 15, options);
      this.width = 15;
      this.height = 15;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('red')
      fill('yellow')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };