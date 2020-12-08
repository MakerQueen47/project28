class mango{

constructor(x,y){

    var options = {

        'isStatic': true,
        'restitution': 0,
        'friction': 1, 
        'density':1.2

    }
    this.r = 30;
    this.body = Bodies.circle(x,y,this.r/2, options);
    World.add(world, this.body)
    this.image = loadImage("sprites/mango.png");




}

display(){

    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    image(this.image,0 ,0, this.r,this.r);
    pop();


}


}