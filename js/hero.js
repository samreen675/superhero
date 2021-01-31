class Hero {
    constructor(x, y, r) {
      var options = {
          density:1,
  
          frictionAir:0.005,
      }
      this.r=this.r
      this.r=this.r
      
      this.body = Bodies.circle(x,y,r/2, options);
      this.image=loadImage("image/Superhero-01.png")
      World.add(world, this.body);
   
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      

      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(255);
      image(this.image,0,0, 300,200);
      pop();
    }
  };