class Ball{
    constructor(){
        var options={
            "restitution":0.3,
            "isStatic":false,
            "friction":0.5,
            "density":1.2,
        }
        this.bodyBall=Bodies.circle(70,250,50,options);
        this.radius=50;
        World.add(world,this.bodyBall);
    }
    display(){
        var posBall=this.bodyBall.position;
        push();
        fill("magenta");
ellipse(posBall.x,posBall.y,this.radius,this.radius);
pop();
    }
}