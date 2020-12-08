class ground{

constructor(){

    var options = {

        'isStatic': true
    }
    this.w = 800;
    this.h = 50;
    this.body = Bodies.rectangle(400,700,this.w,this.h, options);
    World.add(world, this.body)





}

display(){

    push();
    fill("brown");
    translate(this.body.position.x,this.body.position.y);
    rect(0,0, this.w,this.h);
    pop();

}


}