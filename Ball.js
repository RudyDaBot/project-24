class bruh{
    constructor(x,y) {
        var options = {
            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
     this.body=Matter.Bodies.circle(x,y,100, options);
      World.add(world,this.body);
    }
    display() {
       
     var pos = this.body.position;
     fill("red");
     circle(pos.x,pos.y,this.width,this,height);
     
     pop();

    }
}