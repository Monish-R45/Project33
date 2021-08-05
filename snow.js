class Snow{
    constructor(x, y, r) {
        var options = {
            'restitution':0.0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,r, options);
        this.image = loadImage("snow4.webp");
        this.r = r
        World.add(world, this.body);
      }
      changepos(){
        if(this.body.position.y>height){
          Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,10)})
        }
      }
      display(){
        var angle = this.body.angle;
        push();
        
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.r, this.r);
        pop();
      }
}