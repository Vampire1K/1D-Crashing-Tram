class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5,
            length : 70            
        }
       
        this.chain = Constraint.create(options);
        World.add(myWorld, this.chain);
    }
   
   show(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        stroke(0);
        strokeWeight(7);
        line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}