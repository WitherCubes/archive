class Pig
{
    constructor(x, y){
        var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
this.body = Bodies.rectangle(x, y, 55, 55, options);
this.width = 55;
this.height = 55;

World.add(world, this.body);
}

display()
{
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
}
}