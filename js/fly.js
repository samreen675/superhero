class Fly {
    constructor(b1,p1){
      var options={
        bodyA:b1,
        pointB:p1,
        length:250,
        stifness:1.2,
      }
      this.sling=Constraint.create(options)
      World.add(world,this.sling)
    }
    display(){
      var p1=this.sling.bodyA.position
      var p2=this.sling.pointB
      line(p1.x,p1.y,p2.x,p2.y)

    }
  };
  
  