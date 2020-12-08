class stone{

constructor(){

    var options = {

        'isStatic': false,
        'restitution': 0,
        'friction': 1,
        'density': 1.2
    }

    this.r = 25;
    this.body = Bodies.circle(50,200,this.r, options);
    World.add(world, this.body)
    this.image = loadImage("sprites/stone.png");




}

display(){

    var angle = this.body.angle;

    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    image(this.image,0 ,0, this.r*2,this.r*2);
    pop();


}


}