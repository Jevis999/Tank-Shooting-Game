class Cannon{
    constructor(x, y, width, height, angle) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.angle>-1.10){
        if(frameCount%20===0){
      this.body.angle = this.body.angle - 0.1;
        }
      }else{
        this.body.angle = this.body.angle + 0.75;
      }
      console.log(this.body.angle);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  