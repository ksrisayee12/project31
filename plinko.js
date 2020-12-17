class Plinko{
    constructor(x, y, r){
        var options = {
            isStatic:true
        }
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill(color(mouseX, mouseY, mouseX/mouseY));
        ellipse(pos.x, pos.y, this.r, this.r);
      }
}
