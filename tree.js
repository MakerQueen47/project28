class tree{

constructor(){

    var options = {

        'isStatic': true,
        'restitution':0,
        'friction':1.0,
        'density':3.0
    }

    this.w = 450;
    this.h = 500;
    this.body = Bodies.rectangle(350,200,this.w,this.h, options);
    World.add(world, this.body)
    this.image = loadImage("sprites/tree.png");




}

display(){
 
    push();
    translate(this.body.position.x,this.body.position.y);
    image(this.image,0 ,0, this.w,this.h);
    pop();


}


}