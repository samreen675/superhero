class SlingShot {
    constructor(body1, point1) {
        var options = {
            bodyA: body1,
            pointB: point1,
            length: 450,
            stiffness: 1.2,

        }
        this.sling = Constraint.create(options)
        World.add(world, this.sling)
    }
    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            push();

            stroke("red");
            strokeWeight(0);

            line(pointB.x, pointB.y, pointA.x, pointA.y);

            pop();
        }

    }

    fly() {
        this.sling.bodyA = null
    }


    attach(b1) {
        this.sling.bodyA = b1
    }



}